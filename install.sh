#!/bin/bash
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== iGotify Notification Assistent Installer ===${NC}"

# Check if running as root
if [ "$EUID" -ne 0 ]; then
  echo -e "${RED}Please run as root${NC}"
  exit 1
fi

# Detect distribution
detect_distro() {
  if [ -f /etc/os-release ]; then
    . /etc/os-release
    DISTRO=$ID
  elif [ -f /etc/alpine-release ]; then
    DISTRO="alpine"
  else
    echo -e "${RED}Unsupported distribution${NC}"
    exit 1
  fi
  echo -e "${GREEN}Detected distribution: ${DISTRO}${NC}"
}

# Detect init system
detect_init() {
  if command -v systemctl &> /dev/null && systemctl --version &> /dev/null; then
    INIT_SYSTEM="systemd"
  elif command -v rc-service &> /dev/null; then
    INIT_SYSTEM="openrc"
  else
    echo -e "${RED}Unsupported init system${NC}"
    exit 1
  fi
  echo -e "${GREEN}Detected init system: ${INIT_SYSTEM}${NC}"
}

# Install dependencies
install_deps() {
  echo -e "${YELLOW}Installing dependencies...${NC}"
  case $DISTRO in
    alpine)
      apk update
      apk add libstdc++ icu-libs curl bash unzip
      ;;
    debian|ubuntu)
      apt-get update
      apt-get install -y curl unzip libicu-dev
      ;;
    rhel|centos|fedora|rocky|almalinux)
      if command -v dnf &> /dev/null; then
        dnf install -y curl unzip libicu
      else
        yum install -y curl unzip libicu
      fi
      ;;
    *)
      echo -e "${RED}Unsupported distribution: ${DISTRO}${NC}"
      exit 1
      ;;
  esac
  echo -e "${GREEN}Dependencies installed${NC}"
}

# Install .NET
install_dotnet() {
  echo -e "${YELLOW}Installing .NET 10.0...${NC}"

  export DOTNET_ROOT=/opt/dotnet
  mkdir -p $DOTNET_ROOT

  curl -sSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin -c 10.0 --install-dir $DOTNET_ROOT

  # Create symlink for system-wide access
  ln -sf $DOTNET_ROOT/dotnet /usr/local/bin/dotnet

  echo -e "${GREEN}.NET installed: $(dotnet --version)${NC}"
}

# Download and install iGotify
install_igotify() {
  echo -e "${YELLOW}Downloading iGotify...${NC}"

  RELEASE=$(curl -s https://api.github.com/repos/androidseb25/iGotify-Notification-Assistent/releases/latest | grep "tag_name" | awk '{print substr($2, 3, length($2)-4) }')
  echo -e "${GREEN}Latest version: v${RELEASE}${NC}"

  cd /tmp
  rm -f igotify.zip
  curl -sSL -o igotify.zip "https://github.com/androidseb25/iGotify-Notification-Assistent/releases/download/v${RELEASE}/iGotify-Notification-Service-amd64-v${RELEASE}.zip"

  # Remove old installation if exists
  [ -d /opt/iGotify ] && rm -rf /opt/iGotify

  mkdir -p /opt/iGotify
  unzip -q igotify.zip -d /opt/iGotify
  rm -f igotify.zip

  echo -e "${GREEN}iGotify installed to /opt/iGotify${NC}"
}

# Setup systemd service
setup_systemd() {
  echo -e "${YELLOW}Setting up systemd service...${NC}"

  DOTNET_PATH=$(command -v dotnet || echo "/opt/dotnet/dotnet")

  cat <<EOF >/etc/systemd/system/iGotify.service
[Unit]
Description=iGotify Notification Assistent
After=network.target

[Service]
WorkingDirectory=/opt/iGotify
ExecStart=${DOTNET_PATH} '/opt/iGotify/iGotify Notification Assist.dll'
Restart=always
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=igotify
Environment="ASPNETCORE_ENVIRONMENT=Production"
Environment="ASPNETCORE_URLS=http://0.0.0.0:8681"
TimeoutStopSec=30

[Install]
WantedBy=multi-user.target
EOF

  systemctl daemon-reload
  systemctl enable iGotify.service
  systemctl start iGotify.service

  echo -e "${GREEN}Systemd service created and started${NC}"
}

# Uninstall iGotify
uninstall() {
  echo -e "${YELLOW}Uninstalling iGotify...${NC}"

  detect_init

  # Stop and disable service
  if [ "$INIT_SYSTEM" = "systemd" ]; then
    systemctl stop iGotify.service 2>/dev/null || true
    systemctl disable iGotify.service 2>/dev/null || true
    rm -f /etc/systemd/system/iGotify.service
    systemctl daemon-reload
  else
    service iGotify stop 2>/dev/null || true
    rc-update del iGotify default 2>/dev/null || true
    rm -f /etc/init.d/iGotify
  fi

  # Remove iGotify
  [ -d /opt/iGotify ] && rm -rf /opt/iGotify
  echo -e "${GREEN}iGotify removed${NC}"

  # Ask about .NET
  echo ""
  read -p "Remove .NET runtime from /opt/dotnet? [y/N] " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    rm -rf /opt/dotnet
    rm -f /usr/local/bin/dotnet
    echo -e "${GREEN}.NET removed${NC}"
  fi

  echo ""
  echo -e "${GREEN}=== Uninstallation complete ===${NC}"
}

# Setup OpenRC service
setup_openrc() {
  echo -e "${YELLOW}Setting up OpenRC service...${NC}"

  DOTNET_PATH=$(command -v dotnet || echo "/opt/dotnet/dotnet")

  cat <<EOF >/etc/init.d/iGotify
#!/sbin/openrc-run

export ASPNETCORE_URLS="http://0.0.0.0:8681"
export ASPNETCORE_ENVIRONMENT=Production
export DOTNET_ROOT=/opt/dotnet

name="iGotify Notification Assistent"
description="iGotify Notification Service"
supervisor="supervise-daemon"
pidfile="/var/run/iGotify.pid"
command="${DOTNET_PATH}"
command_args="'/opt/iGotify/iGotify Notification Assist.dll'"
command_user="root:root"

depend() {
  need net
}
EOF

  chmod +x /etc/init.d/iGotify
  rc-update add iGotify default
  service iGotify start

  echo -e "${GREEN}OpenRC service created and started${NC}"
}

# Main installation
install() {
  detect_distro
  detect_init
  install_deps
  install_dotnet
  install_igotify

  if [ "$INIT_SYSTEM" = "systemd" ]; then
    setup_systemd
  else
    setup_openrc
  fi

  echo ""
  echo -e "${GREEN}=== Installation complete ===${NC}"
  echo -e "iGotify is now running on port 8681"
  echo ""
  echo -e "Check status:"
  if [ "$INIT_SYSTEM" = "systemd" ]; then
    echo -e "  systemctl status iGotify"
  else
    echo -e "  service iGotify status"
  fi
}

# Parse arguments
case "${1:-}" in
  --uninstall|-u)
    uninstall
    ;;
  --help|-h)
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --uninstall, -u  Uninstall iGotify"
    echo "  --help, -h       Show this help"
    echo ""
    echo "Without options, the script will install iGotify."
    ;;
  *)
    install
    ;;
esac
