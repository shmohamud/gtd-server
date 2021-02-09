require("../db");
const services = require("../services/user");

const signup = async (req, res) => {
  try {
    await services.signup(req);
    res.status(201);
  } catch (err) {
    res.status(500);
    console.log(err.stack);
  }
};

const login = async (req, res) => {
  try {
    await services.login(req).then((data) => {
      if (data && data.hasOwnProperty("accessToken")) {
        res.status(200);
        return res.json(data);
      } else {
        throw "Invalid Credentials";
      }
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

const logout = async (req, res) => {
  try {
    await services.logout(req.body);
    res.status(200);
    return res.json("Logout success!");
  } catch (err) {
    console.log("Error: ", err);
  }
};

module.exports = { signup: signup, login: login, logout: logout };
