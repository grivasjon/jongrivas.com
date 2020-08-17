const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      return {
        // environment varibales for local development
        env: {
          IDP_DOMAIN: "jongrivas.auth.us-east-2.amazoncognito.com",
          USER_POOL_ID: "us-east-2_cdU7bT1WV",
          USER_POOL_CLIENT_ID: "27oaa5f8998rrpquhf9u79imp",
          REDIRECT_SIGN_IN: "http://localhost:3000/token",
          REDIRECT_SIGN_OUT: "http://localhost:3000/",
          AUTH_COOKIE_DOMAIN: "localhost",
        },
      };
    default:
      return {
        // environment varibales for production
        env: {
          IDP_DOMAIN: "",
          USER_POOL_ID: "",
          USER_POOL_CLIENT_ID: "",
          REDIRECT_SIGN_IN: "",
          REDIRECT_SIGN_OUT: "",
          AUTH_COOKIE_DOMAIN: "",
        },
      };
  }
};