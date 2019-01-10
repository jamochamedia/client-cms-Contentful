// import localConfig from "./localConfig";
import hostedConfig from "./hostedConfig";

export default {
  auth0: {
    client: "PB3cwRt09eS4nM4PIzkGeCVGIETDTS4k",
    domain: "jamocha.auth0.com",
    // redirectUri: localConfig.urls.redirectUri,
    redirectUri: hostedConfig.urls.redirectUri,
    audience: "https://api.jamochamedia.com/"
  }
};
