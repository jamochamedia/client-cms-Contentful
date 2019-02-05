import Auth0 from "auth0-js";
import config from "./config";

export const requestedScopes = "openid profile";

export const auth0Client = new Auth0.WebAuth({
  domain: config.auth0.domain,
  clientID: config.auth0.client,
  redirectUri: config.auth0.redirectUri,
  audience: config.auth0.audience,
  responseType: "token id_token",
  scope: requestedScopes
});
