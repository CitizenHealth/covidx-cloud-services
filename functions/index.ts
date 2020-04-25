const functions = require("firebase-functions");
const admin = require("firebase-admin");
import humanAPIHandshake from "./modules/humanapi";

admin.initializeApp(functions.config().firebase);

// Human API
exports.humanAPITokenExchange = functions.https.onRequest(
  (
    req: { body: any },
    res: {
      setHeader: (arg0: string, arg1: string) => void;
      status: (
        arg0: number
      ) => {
        (): any;
        new (): any;
        send: { (arg0: string): void; new (): any };
      };
    }
  ) => {
    console.log(`humanAPITokenExchange = ${JSON.stringify(req.body, null, 2)}`);

    humanAPIHandshake(
      req,
      res,
      admin.database(),
      (success: any, responseJSON: any) => {
        res.setHeader("Content-Type", "application/json");
        if (success) {
          res.status(201).send(JSON.stringify(responseJSON));
        } else {
          res.status(400);
        }
      }
    );
  }
);
