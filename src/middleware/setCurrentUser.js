const { getUserFromToken } = require("../services/user");

module.exports = function setCurrentUser(req, res, next) {
  const token = req.header("authorization");
  getUserFromToken(token).then((user) => {
    req.user = user;
    next();
  });
};
