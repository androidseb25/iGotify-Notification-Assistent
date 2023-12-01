# iGotify

The first App for the Gotify notification service, with background notifications.


## ⭐ Features

* show received notifications with markdown
* background notifications with Firebase service

## 🔧 How to Install Gotify & iGotify-Notification-Assist

### 🐳 Docker Compose

```bash
version: "3"

services:
  gotify:
    image: gotify/server # !!!ATTENTION!!! choose correct version (arm7, arm64)
    ports:
      - 8680:80
    environment:
      - GOTIFY_DEFAULTUSER_PASS=SecR3T # Change ME!!!!!
      - TZ=Europe/Berlin
    restart: unless-stopped
    volumes:
      - gotify-data:/app/data

  igotify-notification: # (iOS notification bridge)
    image: ghcr.io/androidseb25/igotify-notification-assist:latest
    ports:
      - 8681:8080
    environment:
      - IGOTIFY_CLIENT_TOKEN="<CLIENT_TOKEN>"  # create client in gotify an add here the client token
      - GOTIFY_SERVER_URL="http://gotify"  # default container name from gotify server
    restart: unless-stopped
    volumes:
      - igotify-notification-data:/app/data

volumes:
  gotify-data:
  igotify-notification-data:
```
*Thank you The_Think3r for the compose file*

### Needed environment variables

* `GOTIFY_DEFAULTUSER_PASS` = the user password for the defaultuser
* `IGOTIFY_USER_TOKEN` = create a new Client under Gotify and copy the token and paste it as env variable for the docker container
* `GOTIFY_SERVER_URL` = the domain from the gotify server

## 🔧 Install iGotify app

Download link from TestFlight: currently private beta
for entering the private beta please send me a DM via discord @sebakaderangler

On the login screen you need to enter the Gotify Server URL and the URL from the Notification Assist, if you use the URL with a port please enter it, too! (Image 1)
After the checks for the URL are finished and correct you need to login with your login credentials. (Image 2)

<div style="display: flex;">
  <img alt="login_screen_urls" src="https://github.com/androidseb25/iGotify-Notification-Assistent/blob/main/login_screen_1.png" data-canonical-src="https://github.com/androidseb25/iGotify-Notification-Assistent/blob/main/login_screen_1.png" width="200" height="400" />
  <img alt="login_screen_credentials" src="https://github.com/androidseb25/iGotify-Notification-Assistent/blob/main/login_screen_2.png" data-canonical-src="https://github.com/androidseb25/iGotify-Notification-Assistent/blob/main/login_screen_2.png" width="200" height="400" />
</div>

 
And if everythink is ok, you're logged in :D 

Now you receive background notifications when Gotify receives a message.
