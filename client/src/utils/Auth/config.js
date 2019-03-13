const config = {
  urls: {
    login: "/login",
    redirectUri: "/auth-handler"
  }
};

export default {
  ...config,
  auth0: {
    client: "tqieceTsEIowUTJGkFw3QzYXVxn218m1",
    domain: "jamocha.auth0.com",
    redirectUri: config.urls.redirectUri
  }
};
