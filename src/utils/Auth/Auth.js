import Auth0 from "auth0-js";
import config from "./config";

const auth0Client = new Auth0.WebAuth({
  domain: config.auth0.domain,
  clientID: config.auth0.client,
  redirectUri: config.auth0.redirectUri,
  audience: config.auth0.audience,
  responseType: "token id_token",
  scope: "openid profile"
});

export function ssoLogin(email, history) {
  auth0Client.passwordlessStart(
    {
      connection: "email",
      send: "link",
      email
    },
    (err, res) => {
      console.log(err);
      if (err)
        throw new Error(`User could not be sent sign on link error: ${err}`);

      const { email, emailVerified, Id } = res;
      console.log("id ->", Id);
      if (email && Id) {
        if (!emailVerified) {
          history.push("/verify");
          return true;
        }
        history.push("/home");
        return true;
      }
      throw new Error("No user was returned");
    }
  );
}

//Handle Authentication
export function setAuthItems(callback) {
  auth0Client.parseHash({}, (err, result) => {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    }
    setSession(result);
    callback(null, result);
  });
}

export function setSession(result) {
  //Set isLoggedIn flag in localStorage
  localStorage.setItem("isLoggedIn", "true");

  const { accessToken, idToken } = result;
  localStorage.setItem("idToken", idToken);
  localStorage.setItem("accessToken", accessToken);

  //Set access token expiry
  //TODO: IS THIS RIGHT?
  let expiresAt = result.expiresIn * 1000 + new Date().getTime();
  localStorage.setItem("expiresAt", expiresAt);
}

export function areAuthItemsSet() {
  const idToken = localStorage.getItem("idToken");
  const accessToken = localStorage.getItem("accessToken");
  if (idToken && accessToken) {
    return true;
  }
  return false;
}

export function logout() {
  auth0Client.logout({
    returnTo: "http://localhost:3000/login",
    client_id: config.auth0.client
  });

  //Clear access and id token
  localStorage.removeItem("idToken");
  localStorage.removeItem("accessToken");

  //Remove isLoggedIn flag from localStorage
  localStorage.removeItem("isLoggedIn");
}
