const request = require("request");

const humanAPIHandshake = (
  req: { body: any },
  res: any,
  database: {
    ref: (
      arg0: string
    ) => {
      (): any;
      new (): any;
      set: {
        (arg0: { humanId: any; accessToken: any }): Promise<any>;
        new (): any;
      };
    };
  },
  callback: {
    (success: any, responseJSON: any): void;
    (
      arg0: boolean,
      arg1: { humanId: any; accessToken: any; publicToken: any } | undefined
    ): void;
  }
) => {
  var sessionTokenObject = req.body;
  // Human API's session authentication endpoint
  const authUrl = "https://auth.humanapi.co/v1/connect/token"

  // Payload you send to Human API's session authentication endpoint
  const requestBody = {
    client_id: "b3ba82edcb7acf0b5c0bd97dd61fb7f95cf425fa",
    client_user_id: sessionTokenObject.client_user_id,
    client_user_email: sessionTokenObject.userEmail,
    client_secret: "6afec5e52be32eafb4af80cbeec1231d063fda00-",
    type: "session"
  };

// Issue a POST call to Human API's authentication service
request({
  url: authUrl,
  method: "POST",
  json: true,
  body: requestBody
}, (error: any, result: { statusCode: number; body: any; }, body: any) => {
  if (error) {
    throw error;
  }
  if (result.statusCode >= 400 ) {
    console.error("Server returned error status");
    callback(false, null);
        return;
  }
  
  console.log(result.body)
})
};

export default humanAPIHandshake;
