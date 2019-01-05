// import localConfig from "./localConfig";
import hostedConfig from "./hostedConfig";

export default {
  auth0: {
    client: "NN94F3O0Xi5c794xWdKHY0usZERvGfNm",
    domain: "jamocha.auth0.com",
    redirectUri: hostedConfig.urls.redirectUri,
    audience: "https://jamocha.auth0.com/userinfo"
  }
};
