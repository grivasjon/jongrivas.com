const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      return {
        // environment varibales for local development
        env: {
          IDP_DOMAIN: "dev-jongrivas.auth.us-east-2.amazoncognito.com",
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
          IDP_DOMAIN: "jongrivas.auth.us-east-2.amazoncognito.com",
          USER_POOL_ID: "us-east-2_hhB2d3kYM",
          USER_POOL_CLIENT_ID: "4ajip6qtbar2q8un8goqc2anju",
          REDIRECT_SIGN_IN: "https://jongrivas.com/token",
          REDIRECT_SIGN_OUT: "https://jongrivas.com/",
          AUTH_COOKIE_DOMAIN: "jongrivas.com",
        },
      };
  }
};