import Auth0 from "auth0-js";
import config from "./config";
// import localConfig from "./localConfig";
import hostedConfig from "./hostedConfig";

const requestedScopes = "openid profile content:editor admin:all";

const auth0Client = new Auth0.WebAuth({
  domain: config.auth0.domain,
  clientID: config.auth0.client,
  redirectUri: config.auth0.redirectUri,
  audience: config.auth0.audience,
  responseType: "token id_token",
  scope: requestedScopes
});

//Handles Login
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

//Sets access and id tokens = handleAuthentication();
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
  console.log("grabbed auth tokens");
}

export function getAccessToken() {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return accessToken;
  }
  console.log("set access token");
}

export function getIdToken() {
  const idToken = localStorage.getItem("idToken");
  if (idToken) {
    return idToken;
  }
  console.log("got id token");
}

export function setSession(result) {
  //Set isLoggedIn flag in localStorage
  localStorage.setItem("isLoggedIn", "true");

  const { accessToken, idToken } = result;
  localStorage.setItem("idToken", idToken);
  localStorage.setItem("accessToken", accessToken);

  const scopes = result.scope || requestedScopes || "";
  localStorage.setItem("scopes", scopes);

  console.log("set session");
}

export function setScopes(result) {
  const scopes = result.scope || requestedScopes || "";
  localStorage.setItem("scopes", scopes);
}

export function userHasScopes(scopes) {
  const localScopes = localStorage.getItem("scopes");
  if (localScopes) {
    const grantedScopes = localScopes.split(" ");
    return scopes.every(scope => grantedScopes.includes(scope));
  }
  return false;
}

export function getProfile(callback) {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    auth0Client.userinfo(accessToken, (err, profile) => {
      if (profile) {
        const userProfile = profile;
        localStorage.setItem("userProfile", userProfile);
      }
      callback(err, profile);
    });
  }
}

//TODO: RENEWSESSION FIX
export function renewSession() {
  auth0Client.checkSession({}, (err, result) => {
    if (err) {
      console.log(err);
      console.log("Could not get new user token");
      logout();
    }
    setSession(result);
  });
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
    // returnTo: localConfig.urls.login,
    returnTo: hostedConfig.urls.login,
    client_id: config.auth0.client
  });

  //Clear access and id token
  localStorage.removeItem("idToken");
  localStorage.removeItem("accessToken");

  //Remove isLoggedIn flag from localStorage
  localStorage.removeItem("isLoggedIn");

  //Remove isLoggedIn flag from localStorage
  localStorage.removeItem("scopes");

  //Remove isLoggedIn flag from localStorage
  localStorage.removeItem("userProfile");

  console.log("you are logged out");
}
