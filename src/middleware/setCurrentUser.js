const { getUserFromToken } = require("../services/user");

module.exports = async function setCurrentUser (req, res, next) {
  const token = req.header ? req.header ("authorization") : 'no token found';
  getUserFromToken(token).then((user) => {
    req.user = user;
    next();
  });
};
