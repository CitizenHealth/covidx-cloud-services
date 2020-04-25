# Humantiv Backend

Cloud functions supporting the Humantiv app.

## Prerequisites
Install Firebase CLI

```
npm install -g firebase-tools
```

Login to the CovidX project Firebase console from CLI
```
firebase login
```

## Installation

```
cd functions
yarn
```
## Deployment
Install the firebase CLI:
```
npm install -g firebase-tools
```
Read the Google \[Get Started\](https://firebase.google.com/docs/functions/get-started) documentation.
```
firebase deploy --only functions
```

## Functions List
**humanAPITokenExchange**:
Exchanges a handshake with the Human API to get the user publicToken
-  *Input*: Human API user sessionTokenObject.
-  *Returns*: Human API user publicToken
---