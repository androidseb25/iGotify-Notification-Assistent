# Security Policy

This policy covers the iGotify Notification Assistant in this repository, including its API, web interface, deployment files, and integrations with Gotify and SecNtfy.

## Versions

Use the [latest stable release](https://github.com/androidseb25/iGotify-Notification-Assistent/releases/latest). For Docker deployments, use the `ghcr.io/androidseb25/igotify-notification-assist` image. If practical, check whether the issue also affects the latest stable release before reporting it.

## Reporting a Vulnerability

Submit your report privately using the repository’s [Report a vulnerability form](https://github.com/androidseb25/iGotify-Notification-Assistent/security/advisories/new).

Include the following in your private report.

- The affected component, what happens, and the potential security impact.
- The iGotify version, Docker image tag or digest if applicable, and deployment method. Include the Gotify version or reverse proxy setup if relevant.
- Steps to reproduce the issue in a test environment, with redacted logs or configuration if helpful.

Remove passwords, Gotify client tokens, SecNtfy device tokens, authorization headers, and private notification content from anything you share. Use redacted excerpts from `.env` or logs and keep database files private.

Keep vulnerability details out of public issues, pull requests, and Discord channels. Please coordinate the timing of any public disclosure with the maintainer.
