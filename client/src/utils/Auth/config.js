// import localConfig from "./localConfig";
import hostedConfig from "./hostedConfig";

export default {
  auth0: {
    client: "tqieceTsEIowUTJGkFw3QzYXVxn218m1",
    domain: "jamocha.auth0.com",
    // redirectUri: localConfig.urls.redirectUri
    redirectUri: hostedConfig.urls.redirectUri
  }
};
