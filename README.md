# Covidx Backend

Cloud functions supporting the CovidX app.

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

## Example input sent with Get to the function:

GET: 
```
{
  "client_user_id": "12345678910", 
  "client_user_email": "nabyl@myemail.com"
}
```

RESULT: 
```
{
  "expiresIn": 3600,
  "humanId": "XXXXidXXXX",
  "accessToken": "XXXXtokenXXXX"
}
```
