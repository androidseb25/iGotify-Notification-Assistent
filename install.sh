#!/bin/bash

# Colors for output (fallback when dialog not available)
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Dialog settings
DIALOG_HEIGHT=15
DIALOG_WIDTH=60
BACKTITLE="iGotify Notification Assistent"

# Dialog theme with black borders
setup_dialog_theme() {
  export DIALOGRC=$(mktemp)
  cat > "$DIALOGRC" << 'EOF'
use_shadow = ON
use_colors = ON
screen_color = (CYAN,BLUE,ON)
dialog_color = (BLACK,WHITE,OFF)
title_color = (BLUE,WHITE,ON)
border_color = (BLACK,WHITE,OFF)
button_active_color = (WHITE,BLUE,ON)
button_inactive_color = (BLACK,WHITE,OFF)
button_key_active_color = (WHITE,BLUE,ON)
button_key_inactive_color = (RED,WHITE,OFF)
button_label_active_color = (YELLOW,BLUE,ON)
button_label_inactive_color = (BLACK,WHITE,ON)
inputbox_color = (BLACK,WHITE,OFF)
inputbox_border_color = (BLACK,WHITE,OFF)
searchbox_color = (BLACK,WHITE,OFF)
searchbox_title_color = (BLUE,WHITE,ON)
searchbox_border_color = (BLACK,WHITE,OFF)
position_indicator_color = (BLUE,WHITE,ON)
menubox_color = (BLACK,WHITE,OFF)
menubox_border_color = (BLACK,WHITE,OFF)
item_color = (BLACK,WHITE,OFF)
item_selected_color = (WHITE,BLUE,ON)
tag_color = (BLUE,WHITE,ON)
tag_selected_color = (YELLOW,BLUE,ON)
tag_key_color = (RED,WHITE,OFF)
tag_key_selected_color = (RED,BLUE,ON)
check_color = (BLACK,WHITE,OFF)
check_selected_color = (WHITE,BLUE,ON)
uarrow_color = (GREEN,WHITE,ON)
darrow_color = (GREEN,WHITE,ON)
gauge_color = (BLUE,WHITE,ON)
EOF
}

# Cleanup on exit
cleanup() {
  [ -n "$DIALOGRC" ] && [ -f "$DIALOGRC" ] && rm -f "$DIALOGRC"
}
trap cleanup EXIT

# Dialog wrapper
dlg() {
  dialog "$@"
}

# Check if running as root
check_root() {
  if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}Please run as root (sudo)${NC}"
    exit 1
  fi
}

# Install dialog if not present
ensure_dialog() {
  if ! command -v dialog &> /dev/null; then
    echo -e "${YELLOW}Installing dialog...${NC}"
    if command -v apt-get &> /dev/null; then
      apt-get update -qq && apt-get install -y -qq dialog
    elif command -v dnf &> /dev/null; then
      dnf install -y -q dialog
    elif command -v yum &> /dev/null; then
      yum install -y -q dialog
    elif command -v pacman &> /dev/null; then
      pacman -Sy --noconfirm dialog
    elif command -v apk &> /dev/null; then
      apk add --quiet dialog
    else
      echo -e "${RED}Could not install dialog. Please install it manually.${NC}"
      exit 1
    fi

    # Verify dialog was installed successfully
    if ! command -v dialog &> /dev/null; then
      echo -e "${RED}Failed to install dialog. Please install it manually.${NC}"
      exit 1
    fi
    echo -e "${GREEN}Dialog installed successfully.${NC}"
  fi
}

# Detect distribution
detect_distro() {
  if [ -f /etc/os-release ]; then
    . /etc/os-release
    DISTRO=$ID
    DISTRO_VERSION=$VERSION_ID
  elif [ -f /etc/alpine-release ]; then
    DISTRO="alpine"
    DISTRO_VERSION=$(cat /etc/alpine-release)
  else
    DISTRO="unknown"
    DISTRO_VERSION="unknown"
  fi
}

# Check GLIBC compatibility for .NET (called very early, before dialog install)
check_glibc_early() {
  # Skip check on Alpine (uses musl, not glibc)
  if [ -f /etc/alpine-release ]; then
    return 0
  fi

  # Get GLIBC version
  GLIBC_VERSION=$(ldd --version 2>&1 | head -1 | grep -oE '[0-9]+\.[0-9]+' | head -1)

  if [ -z "$GLIBC_VERSION" ]; then
    # Try alternative method
    GLIBC_VERSION=$(getconf GNU_LIBC_VERSION 2>/dev/null | awk '{print $2}')
  fi

  if [ -z "$GLIBC_VERSION" ]; then
    # Can't determine version, let it proceed
    return 0
  fi

  # Extract major and minor version
  GLIBC_MAJOR=$(echo "$GLIBC_VERSION" | cut -d. -f1)
  GLIBC_MINOR=$(echo "$GLIBC_VERSION" | cut -d. -f2)

  # .NET 10.0 requires GLIBC 2.34+
  REQUIRED_MAJOR=2
  REQUIRED_MINOR=34

  # Compare versions
  if [ "$GLIBC_MAJOR" -lt "$REQUIRED_MAJOR" ] 2>/dev/null || \
     { [ "$GLIBC_MAJOR" -eq "$REQUIRED_MAJOR" ] && [ "$GLIBC_MINOR" -lt "$REQUIRED_MINOR" ]; } 2>/dev/null; then

    # Detect distro for helpful message
    if [ -f /etc/os-release ]; then
      . /etc/os-release
      DISTRO_NAME="$NAME $VERSION_ID"
    else
      DISTRO_NAME="Your system"
    fi

    echo ""
    echo -e "${RED}============================================${NC}"
    echo -e "${RED}         UNSUPPORTED SYSTEM${NC}"
    echo -e "${RED}============================================${NC}"
    echo ""
    echo -e "${YELLOW}$DISTRO_NAME is not supported.${NC}"
    echo ""
    echo -e "Your GLIBC version: ${RED}$GLIBC_VERSION${NC}"
    echo -e "Required:           ${GREEN}2.34 or newer${NC}"
    echo ""
    echo ".NET 10.0 requires GLIBC 2.34+ which is"
    echo "typically available in:"
    echo "  - Debian 12 (Bookworm) or newer"
    echo "  - Ubuntu 22.04 or newer"
    echo "  - Fedora 35 or newer"
    echo "  - RHEL/AlmaLinux/Rocky 9 or newer"
    echo ""
    echo -e "${YELLOW}Please upgrade your operating system.${NC}"
    echo ""
    exit 1
  fi

  return 0
}

# Detect init system
detect_init() {
  if command -v systemctl &> /dev/null && systemctl --version &> /dev/null; then
    INIT_SYSTEM="systemd"
  elif command -v rc-service &> /dev/null; then
    INIT_SYSTEM="openrc"
  else
    INIT_SYSTEM="unknown"
  fi
}

# Install dependencies
install_deps() {
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
      if command -v pacman &> /dev/null; then
        pacman -Sy --noconfirm curl unzip icu
      else
        return 1
      fi
      ;;
  esac
}

# Install .NET
install_dotnet() {
  export DOTNET_ROOT=/opt/dotnet
  mkdir -p $DOTNET_ROOT
  curl -sSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin -c 10.0 --runtime aspnetcore --install-dir $DOTNET_ROOT
  # Create symlink - prefer /usr/local/bin if in PATH, fallback to /usr/bin
  if echo "$PATH" | tr ':' '\n' | grep -qx "/usr/local/bin"; then
    ln -sf $DOTNET_ROOT/dotnet /usr/local/bin/dotnet
  else
    ln -sf $DOTNET_ROOT/dotnet /usr/bin/dotnet
  fi
}

# Detect system architecture
detect_arch() {
  MACHINE=$(uname -m)
  case $MACHINE in
    x86_64)
      ARCH="amd64"
      ;;
    aarch64|arm64)
      ARCH="arm64"
      ;;
    armv7l|armhf)
      ARCH="arm"
      ;;
    *)
      ARCH=""
      ;;
  esac
}

# Download and install iGotify
install_igotify() {
  detect_arch

  if [ -z "$ARCH" ]; then
    dlg --backtitle "$BACKTITLE" --title "Error" --msgbox "\nUnsupported architecture: $(uname -m)\n\nSupported: amd64, arm64, arm" 9 50
    return 1
  fi

  RELEASE=$(curl -s https://api.github.com/repos/androidseb25/iGotify-Notification-Assistent/releases/latest | grep "tag_name" | awk '{print substr($2, 3, length($2)-4) }')

  cd /tmp
  rm -f igotify.zip
  curl -sSL -o igotify.zip "https://github.com/androidseb25/iGotify-Notification-Assistent/releases/download/v${RELEASE}/iGotify-Notification-Service-${ARCH}-v${RELEASE}.zip"

  [ -d /opt/iGotify ] && rm -rf /opt/iGotify
  mkdir -p /opt/iGotify
  unzip -q igotify.zip -d /opt/iGotify
  rm -f igotify.zip
}

# Setup systemd service
setup_systemd() {
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
}

# Setup OpenRC service
setup_openrc() {
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
}

# Get installed version
get_installed_version() {
  if [ -f /opt/iGotify/version.txt ]; then
    cat /opt/iGotify/version.txt
  elif [ -d /opt/iGotify ]; then
    echo "unknown"
  else
    echo "not installed"
  fi
}

# Get latest version
get_latest_version() {
  curl -s https://api.github.com/repos/androidseb25/iGotify-Notification-Assistent/releases/latest | grep "tag_name" | awk '{print substr($2, 3, length($2)-4) }'
}

# Progress bar installation
do_install() {
  detect_init

  (
    echo "5"
    echo "XXX"
    echo "Detecting system configuration..."
    echo "XXX"
    sleep 1

    echo "15"
    echo "XXX"
    echo "Installing dependencies..."
    echo "XXX"
    install_deps 2>&1 | dlg --backtitle "$BACKTITLE" --title "Dependencies" --progressbox 10 60

    echo "35"
    echo "XXX"
    echo "Installing .NET 10.0 Runtime..."
    echo "XXX"

  ) | dlg --backtitle "$BACKTITLE" --title "Installing iGotify" --gauge "Starting installation..." 8 60 0

  # .NET installation with progress
  (
    echo "40"
    install_dotnet 2>&1
    echo "70"
  ) | dlg --backtitle "$BACKTITLE" --title "Installing .NET" --gauge "Installing .NET 10.0 Runtime..." 8 60 35

  # iGotify download and setup
  (
    echo "75"
    echo "XXX"
    echo "Downloading iGotify..."
    echo "XXX"
    install_igotify 2>&1

    echo "90"
    echo "XXX"
    echo "Setting up service..."
    echo "XXX"

    if [ "$INIT_SYSTEM" = "systemd" ]; then
      setup_systemd 2>&1
    else
      setup_openrc 2>&1
    fi

    # Save version
    RELEASE=$(curl -s https://api.github.com/repos/androidseb25/iGotify-Notification-Assistent/releases/latest | grep "tag_name" | awk '{print substr($2, 3, length($2)-4) }')
    echo "$RELEASE" > /opt/iGotify/version.txt

    echo "100"
    echo "XXX"
    echo "Installation complete!"
    echo "XXX"
  ) | dlg --backtitle "$BACKTITLE" --title "Installing iGotify" --gauge "Downloading iGotify..." 8 60 70

  dlg --backtitle "$BACKTITLE" --title "Installation Complete" --msgbox "\niGotify has been installed successfully!\n\nService is running on port 8681\n\nCheck status: systemctl status iGotify" 13 50
}

# Progress bar uninstallation
do_uninstall() {
  if [ ! -d /opt/iGotify ]; then
    dlg --backtitle "$BACKTITLE" --title "Error" --msgbox "\niGotify is not installed." 7 40
    return
  fi

  dlg --backtitle "$BACKTITLE" --title "Confirm Uninstall" --yesno "\nAre you sure you want to uninstall iGotify?" 8 50

  if [ $? -ne 0 ]; then
    return
  fi

  detect_init

  (
    echo "10"
    echo "XXX"
    echo "Stopping service..."
    echo "XXX"

    if [ "$INIT_SYSTEM" = "systemd" ]; then
      systemctl stop iGotify.service 2>/dev/null || true
      systemctl disable iGotify.service 2>/dev/null || true
    else
      service iGotify stop 2>/dev/null || true
      rc-update del iGotify default 2>/dev/null || true
    fi
    sleep 1

    echo "40"
    echo "XXX"
    echo "Removing service files..."
    echo "XXX"

    if [ "$INIT_SYSTEM" = "systemd" ]; then
      rm -f /etc/systemd/system/iGotify.service
      systemctl daemon-reload
    else
      rm -f /etc/init.d/iGotify
    fi
    sleep 1

    echo "70"
    echo "XXX"
    echo "Removing iGotify files..."
    echo "XXX"

    rm -rf /opt/iGotify
    sleep 1

    echo "100"
    echo "XXX"
    echo "Uninstallation complete!"
    echo "XXX"

  ) | dlg --backtitle "$BACKTITLE" --title "Uninstalling iGotify" --gauge "Starting uninstallation..." 8 60 0

  # Ask about .NET removal
  dlg --backtitle "$BACKTITLE" --title "Remove .NET?" --yesno "\nDo you also want to remove the .NET runtime?\n\n(Located at /opt/dotnet)" 9 50

  if [ $? -eq 0 ]; then
    (
      echo "50"
      echo "XXX"
      echo "Removing .NET runtime..."
      echo "XXX"
      rm -rf /opt/dotnet
      rm -f /usr/bin/dotnet /usr/local/bin/dotnet
      sleep 1
      echo "100"
      echo "XXX"
      echo ".NET removed!"
      echo "XXX"
    ) | dlg --backtitle "$BACKTITLE" --title "Removing .NET" --gauge "Removing .NET..." 8 60 0
  fi

  dlg --backtitle "$BACKTITLE" --title "Uninstall Complete" --msgbox "\niGotify has been uninstalled successfully!" 7 50
}

# Update function
do_update() {
  if [ ! -d /opt/iGotify ]; then
    dlg --backtitle "$BACKTITLE" --title "Error" --msgbox "\niGotify is not installed.\n\nPlease install it first." 9 40
    return
  fi

  INSTALLED=$(get_installed_version)
  LATEST=$(get_latest_version)

  if [ "$INSTALLED" = "$LATEST" ]; then
    dlg --backtitle "$BACKTITLE" --title "Up to Date" --msgbox "\niGotify is already up to date!\n\nLatest version:    v$LATEST\nInstalled version: v$INSTALLED" 10 50
    return
  fi

  dlg --backtitle "$BACKTITLE" --title "Update Available" --yes-label "Update to v$LATEST" --no-label "Cancel" --yesno "\nUpdate available!\n\nInstalled: v$INSTALLED\nLatest: v$LATEST\n\nDo you want to update?" 11 50

  if [ $? -ne 0 ]; then
    return
  fi

  detect_init

  (
    echo "10"
    echo "XXX"
    echo "Stopping service..."
    echo "XXX"

    if [ "$INIT_SYSTEM" = "systemd" ]; then
      systemctl stop iGotify.service 2>/dev/null || true
    else
      service iGotify stop 2>/dev/null || true
    fi
    sleep 1

    echo "30"
    echo "XXX"
    echo "Downloading iGotify v$LATEST..."
    echo "XXX"

    install_igotify 2>&1

    echo "70"
    echo "XXX"
    echo "Saving version info..."
    echo "XXX"

    echo "$LATEST" > /opt/iGotify/version.txt
    sleep 1

    echo "85"
    echo "XXX"
    echo "Starting service..."
    echo "XXX"

    if [ "$INIT_SYSTEM" = "systemd" ]; then
      systemctl start iGotify.service
    else
      service iGotify start
    fi
    sleep 1

    echo "100"
    echo "XXX"
    echo "Update complete!"
    echo "XXX"

  ) | dlg --backtitle "$BACKTITLE" --title "Updating iGotify" --gauge "Starting update..." 8 60 0

  dlg --backtitle "$BACKTITLE" --title "Update Complete" --msgbox "\niGotify has been updated to v$LATEST!" 7 50
}

# Status check
do_status() {
  detect_init

  if [ ! -d /opt/iGotify ]; then
    dlg --backtitle "$BACKTITLE" --title "Status" --msgbox "\niGotify is not installed." 7 40
    return
  fi

  INSTALLED=$(get_installed_version)
  LATEST=$(get_latest_version)

  if [ "$INIT_SYSTEM" = "systemd" ]; then
    SERVICE_STATUS=$(systemctl is-active iGotify.service 2>/dev/null || echo "inactive")
    SERVICE_ENABLED=$(systemctl is-enabled iGotify.service 2>/dev/null || echo "disabled")
  else
    if service iGotify status &>/dev/null; then
      SERVICE_STATUS="active"
    else
      SERVICE_STATUS="inactive"
    fi
    SERVICE_ENABLED="unknown"
  fi

  # Check if .NET is installed
  if [ -f /opt/dotnet/dotnet ]; then
    DOTNET_VERSION=$(/opt/dotnet/dotnet --version 2>/dev/null || echo "unknown")
    DOTNET_ICON="\\Z2✓\\Zn"
  else
    DOTNET_VERSION="not installed"
    DOTNET_ICON="\\Z1✗\\Zn"
  fi

  # Status icons with colors (\Z2=green, \Z1=red, \Z3=yellow)
  if [ "$SERVICE_STATUS" = "active" ]; then
    STATUS_ICON="\\Z2✓\\Zn"
  else
    STATUS_ICON="\\Z1✗\\Zn"
  fi

  if [ "$SERVICE_ENABLED" = "enabled" ]; then
    ENABLED_ICON="\\Z2✓\\Zn"
  elif [ "$SERVICE_ENABLED" = "disabled" ]; then
    ENABLED_ICON="\\Z1✗\\Zn"
  else
    ENABLED_ICON="\\Z3?\\Zn"
  fi

  # Update available?
  if [ "$INSTALLED" != "$LATEST" ] && [ "$INSTALLED" != "unknown" ]; then
    UPDATE_ICON="\\Z3!\\Zn"
    UPDATE_LINE="\\n[$UPDATE_ICON] Update available: v$LATEST"
  else
    UPDATE_ICON="\\Z2✓\\Zn"
    UPDATE_LINE="\\n[$UPDATE_ICON] Up to date"
  fi

  dlg --backtitle "$BACKTITLE" --title "iGotify Status" --colors --msgbox "\
\niGotify v$INSTALLED\n\n\
[$STATUS_ICON] Service Running: $SERVICE_STATUS\n\
[$ENABLED_ICON] Service Enabled: $SERVICE_ENABLED\n\
[$DOTNET_ICON] .NET Runtime:    $DOTNET_VERSION\n\
$UPDATE_LINE\n\n\
Init System: $INIT_SYSTEM" 15 50
}

# Main menu
main_menu() {
  LAST_CHOICE=1
  while true; do
    # Check if iGotify is installed
    if [ -d /opt/iGotify ]; then
      # Installed: Show Update, Status, Uninstall, Exit
      CHOICE=$(dlg --backtitle "$BACKTITLE" --title "Main Menu" --cancel-label "Exit" --default-item "$LAST_CHOICE" --menu "Choose an option:" $DIALOG_HEIGHT $DIALOG_WIDTH 4 \
        1 "Update iGotify" \
        2 "Check Status" \
        3 "Uninstall iGotify" \
        4 "Exit" \
        3>&1 1>&2 2>&3)

      EXIT_STATUS=$?

      if [ $EXIT_STATUS -ne 0 ]; then
        clear
        echo -e "${GREEN}Goodbye!${NC}"
        exit 0
      fi

      LAST_CHOICE=$CHOICE

      case $CHOICE in
        1) do_update ;;
        2) do_status ;;
        3) do_uninstall ;;
        4)
          clear
          echo -e "${GREEN}Goodbye!${NC}"
          exit 0
          ;;
      esac
    else
      # Not installed: Show Install, Exit
      CHOICE=$(dlg --backtitle "$BACKTITLE" --title "Main Menu" --cancel-label "Exit" --default-item "$LAST_CHOICE" --menu "Choose an option:" $DIALOG_HEIGHT $DIALOG_WIDTH 2 \
        1 "Install iGotify" \
        2 "Exit" \
        3>&1 1>&2 2>&3)

      EXIT_STATUS=$?

      if [ $EXIT_STATUS -ne 0 ]; then
        clear
        echo -e "${GREEN}Goodbye!${NC}"
        exit 0
      fi

      LAST_CHOICE=$CHOICE

      case $CHOICE in
        1) do_install ;;
        2)
          clear
          echo -e "${GREEN}Goodbye!${NC}"
          exit 0
          ;;
      esac
    fi
  done
}

# Main entry point
check_root
check_glibc_early
ensure_dialog
setup_dialog_theme
main_menu
