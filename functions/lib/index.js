"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const humanapi_1 = require("./modules/humanapi");
admin.initializeApp(functions.config().firebase);
// Human API
exports.humanAPITokenExchange = functions.https.onRequest((req, res) => {
    console.log(`humanAPITokenExchange = ${JSON.stringify(req.body, null, 2)}`);
    humanapi_1.default(req, res, admin.database(), (success, responseJSON) => {
        res.setHeader("Content-Type", "application/json");
        if (success) {
            res.status(201).send(JSON.stringify(responseJSON));
        }
        else {
            res.status(400);
        }
    });
});
//# sourceMappingURL=index.js.map