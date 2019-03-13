import config from "./config";
import { auth0Client, requestedScopes } from "./auth0Client";

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
      if (email && Id) {
        if (!emailVerified) {
          history.push("/verify");
          return true;
        }
        history.push("/");
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
}

//Sets the session (idToken, accessToken, scopes, userId)
export function setSession(result) {
  const { accessToken, idToken } = result;
  localStorage.setItem("idToken", idToken);
  localStorage.setItem("accessToken", accessToken);

  const scopes = result.scope || requestedScopes || "";
  localStorage.setItem("scopes", scopes);

  const userid = result.idTokenPayload.sub;
  localStorage.setItem("userId", userid);
}

//checks for what scopes the user has
export function userHasScopes(scopes) {
  const localScopes = localStorage.getItem("scopes");
  if (localScopes) {
    const grantedScopes = localScopes.split(" ");
    return scopes.every(scope => grantedScopes.includes(scope));
  }
  return false;
}

//TODO: Create SecuredRoute function using checkAdmin and checkEditor

//Checks if the user has the admin scope
export function checkAdmin() {
  if (userHasScopes(["admin:all"])) {
    return true;
  } else if (userHasScopes(["role:editor"])) {
    window.location.href = "/editor";
    return false;
  } else if (userHasScopes(["client:linkedin"])) {
    window.location.href = "/";
    return false;
  } else {
    logout();
    return false;
  }
}

//checks if the user has the editor scope
export function checkEditor() {
  if (userHasScopes(["role:editor"])) {
    return true;
  } else if (userHasScopes(["client:linkedin"])) {
    window.location.href = "/";
    return false;
  } else {
    logout();
    return false;
  }
}

//checks if user has the client scope for linkedIn
export function checkClient() {
  if (userHasScopes(["client:linkedin"])) {
    return true;
  } else if (userHasScopes(["admin:all"])) {
    window.location.href = "/admin";
    return false;
  } else if (userHasScopes(["role:editor"])) {
    window.location.href = "/editor";
    return false;
  } else {
    logout();
  }
}

//Checks if user is logged in
export function areAuthItemsSet() {
  const idToken = localStorage.getItem("idToken");
  const accessToken = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("userId");
  if (idToken && accessToken && userId) {
    return true;
  }
  return false;
}

//Adds the IdToken to the idToken const
export function getIdToken() {
  const idToken = localStorage.getItem("idToken");
  if (idToken) {
    return idToken;
  }
  return false;
}

//Logs the user out & removes the idToken, accessToken, scopes, userProfile,
//userId, auth0Id
export function logout() {
  auth0Client.logout({
    returnTo: `${window.location.origin}${config.urls.login}`,
    client_id: config.auth0.client
  });

  //Clear access and id token
  localStorage.removeItem("idToken");
  localStorage.removeItem("accessToken");

  //Remove isLoggedIn flag from localStorage
  localStorage.removeItem("scopes");

  //Remove userProfile flag from localStorage
  localStorage.removeItem("userProfile");

  //Remove userid flag from localStorage
  localStorage.removeItem("userId");

  //Remove userid flag from localStorage
  localStorage.removeItem("auth0Id");
}
