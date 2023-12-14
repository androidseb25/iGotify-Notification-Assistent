# iGotify

A small Gotify server notification assistent to trigger Push Notifications to iOS Devices (App Link down below) over Firebase

## ⭐ Features

* show received notifications with markdown
* trigger notifications with Firebase service

## 🔧 How to Install Gotify & iGotify-Notification-Assist

### 🐳 Docker `docker-compose.yaml`

### Installation

1. Create a file with the name `docker-compose.yaml` or clone this repo and go to step 3
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
    restart: always
    volumes:
      - igotify-notification-data:/app/data

volumes:
  gotify-data:
  igotify-notification-data:
```
*Thank you The_Think3r for the compose file*

## 🔧 Install iGotify app

### ⚠️ Attention for DNS blocker user

Please allow following url's to the whitelist of you're DNS blocker, only when you get an alert dialog in the app, because we need it for the notification token and crash analystic.

```bash
||firebaselogging-pa.googleapis.com^
||firebaseinstallations.googleapis.com^
||device-provisioning.googleapis.com^
||firebase-settings.crashlytics.com^
||crashlyticsreports-pa.googleapis.com^
```

Download from

<a href="https://apps.apple.com/de/app/igotify/id6473452512?itsct=apps_box_badge&amp;itscg=30200" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 180px; height: 83px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/de-de?size=250x83&amp;releaseDate=1702425600" alt="Download on the App Store" style="border-radius: 13px; width: 180px; height: 83px;"></a>

For Bugs or feedback please send me a PM in Discord under the name sebakaderangler or send a bug report via TestFlight.

On the login screen you need to enter the Gotify Server URL and the URL from the Notification Assist, if you use the URL with a port please enter it, too! (Image 1)

After the checks for the URL are finished and correct you need to login with your login credentials. (Image 2)

&nbsp;

![](https://raw.githubusercontent.com/androidseb25/iGotify-Notification-Assistent/main/login_screen_1.png)
![](https://raw.githubusercontent.com/androidseb25/iGotify-Notification-Assistent/main/login_screen_2.png)

&nbsp;
 
And if everythink is ok, you're logged in 🎉

Now you receive background notifications when Gotify receives a message.
