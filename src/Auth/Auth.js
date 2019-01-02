import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "jamocha.auth0.com",
    clientID: "NN94F3O0Xi5c794xWdKHY0usZERvGfNm",
    redirectUri: "http://localhost:3000/",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    this.auth0.authorize();
  }
}
