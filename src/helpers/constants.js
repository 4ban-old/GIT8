require("dotenv").config();

export default {
  REPO: {
    user: "4ban",
    name: "GIT8",
    url: "https://github.com/4ban/GIT8",
  },
  API: {
    url: "https://api.github.com/",
  },
  OAUTH: {
    authorizationUrl: "https://github.com/login/oauth/authorize",
    tokenUrl: "https://github.com/login/oauth/access_token",
    scope: "repo, notifications, user:email",
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  },
};
