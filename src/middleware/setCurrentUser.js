const { getUserFromToken } = require("../services/user");

module.exports = function setCurrentUser(req, res, next) {
  const token = req.header("authorization");
  console.log("Token at setCurrUser: ", token);
  getUserFromToken(token).then((user) => {
    console.log("User in setCurrUser: ", user);
    req.user = user;
    next();
  });
};
