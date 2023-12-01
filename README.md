# iGotify

The first App for the Gotify notification service, with background notifications.


## ⭐ Features

* show received notifications with markdown
* background notifications with Firebase service

## 🔧 How to Install Gotify & iGotify-Notification-Assist

### 🐳 Docker `compose.yaml`

### Installation

1. Create a file with the name `compose.yaml` or clone this repo and go to step 3
2. Copy the code down below in the yaml file
3. change environment variables in the compose file
4. execute `docker compose up -d` to start the docker compose

### Needed environment variables

* `GOTIFY_DEFAULTUSER_PASS` = the user password for the defaultuser
* `IGOTIFY_USER_TOKEN` = create a new Client under Gotify and copy the token and paste it as env variable for the docker container
* `GOTIFY_SERVER_URL` = the domain from the gotify server

&nbsp;

```bash
version: "3"

services:
  gotify:
    image: gotify/server # Uncommand correct server image
    # image: gotify/server-arm7
    # image: gotify/server-arm64
    ports:
      - 8680:80
    environment:
      - GOTIFY_DEFAULTUSER_PASS=my-very-strong-password # Change me!!!!!
      - TZ=Europe/Berlin
    restart: unless-stopped
    volumes:
      - gotify-data:/app/data

  igotify-notification: # (iGotify-Notification-Assistent)
    image: ghcr.io/androidseb25/igotify-notification-assist:latest
    pull_policy: always
    ports:
      - 8681:8080
    environment:
      - IGOTIFY_CLIENT_TOKEN="<CLIENT_TOKEN>"  # create a client in gotify an add here the client token
      - GOTIFY_SERVER_URL="http://gotify"  # default container name from gotify server
    restart: unless-stopped
    volumes:
      - igotify-notification-data:/app/data

volumes:
  gotify-data:
  igotify-notification-data:
```
*Thank you The_Think3r for the compose file*

## 🔧 Install iGotify app

### ⚠️ Attention for Ad Block user

Please allow following url's to the whitelist of you're ad blocker, only when you get an alert dialog in the app, because we need it for the notification token and crash analystic.

```bash
||firebaselogging-pa.googleapis.com^
||firebaseinstallations.googleapis.com^
||device-provisioning.googleapis.com^
||firebase-settings.crashlytics.com^
```

Download link from TestFlight: currently private beta
for entering the private beta please send me a DM via discord @sebakaderangler, with you're icloud mail and reason for use.

On the login screen you need to enter the Gotify Server URL and the URL from the Notification Assist, if you use the URL with a port please enter it, too! (Image 1)

After the checks for the URL are finished and correct you need to login with your login credentials. (Image 2)

&nbsp;

<div style="display: flex;">
  <img alt="login_screen_urls" src="https://github.com/androidseb25/iGotify-Notification-Assistent/blob/main/login_screen_1.png" data-canonical-src="https://github.com/androidseb25/iGotify-Notification-Assistent/blob/main/login_screen_1.png" width="200" height="400" />
  <img alt="login_screen_credentials" src="https://github.com/androidseb25/iGotify-Notification-Assistent/blob/main/login_screen_2.png" data-canonical-src="https://github.com/androidseb25/iGotify-Notification-Assistent/blob/main/login_screen_2.png" width="200" height="400" />
</div>

&nbsp;
 
And if everythink is ok, you're logged in 🎉

Now you receive background notifications when Gotify receives a message.
