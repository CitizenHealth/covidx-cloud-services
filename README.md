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
  "accessToken": "eyJraWQiOiJSdjlSQ3o0VDB3TUNhSkhTYVg4bkg3Q1lOTFpmdUNsZnF2eDA1SFlja0ZvIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnJfOU8yOXdtV210T3FoRVY0VEpPZ1UtOGNOOUhOOGNVcml5R3pJWnBFeFEiLCJpc3MiOiJodHRwczovL2h1bWFuYXBpLm9rdGEuY29tL29hdXRoMi9hdXN1bHY5d2tjcEx5UDJEZDI5NiIsImF1ZCI6ImNvLmh1bWFuYXBpLnByb2R1Y3Rpb24iLCJpYXQiOjE1ODc4NTc4NjAsImV4cCI6MTU4Nzg2MTQ2MCwiY2lkIjoiMG9hdWx2aWRxdE5VeUZlYkoyOTYiLCJ1aWQiOiIwMHUzazV4ODN3cjNQdFV0SDI5NyIsInNjcCI6WyJhbm9ueW1vdXMiXSwic3ViIjoiYW5vbi11c2VyK2VjMGZmOTFiLTk2NjQtNDU3Ni04YmNhLTA2YTNiOGRmZGJmNEBub3QuaHVtYW5hcGkuY28iLCJjbGllbnRJZCI6ImIzYmE4MmVkY2I3YWNmMGI1YzBiZDk3ZGQ2MWZiN2Y5NWNmNDI1ZmEiLCJodW1hbklkIjoiYTI5MzMxZWZhNjk3MGY4MzBlNTg3MTkwZWY2ZDQ1ZmYiLCJncm91cHMiOlsiZW5kdXNlcnNfYW5vbnltb3VzIl0sInVzZXJJZCI6IjVlYTRjN2RjMGQwNjcxNWRlNTQ0NzYyNSJ9.BrDoc3ZxeoMNN9SSVTrupmj0AU0ciDHlU_l-6bU6MKTFG-e1yI_jVzLOVkvQOE3_d-18CKgizXCHLQXzlTGeNjhf5r08cPciYZiTf1l4wjyxP2m4XDoND58YCIjpQohJtkjomNMjJEX2TbpG4Z9TfCYVr-NH8UVqecz4YmjJRMv544QJtuHsp9RdUz_-psPFRTJ2uFtLkgbgE1m5CwM2tgC3U2c8eY3nsnWgtICUed0I_PGF6Rsk2DJ4-OmnspXIPCQem78lHDlTsz9751R8KI-161cdeS4Ki7Q70-NFv2UDYPVPVILTZIy7b4Wm8F4stx1_ZSC79uZSQH6JdZbNNQ"
}
```