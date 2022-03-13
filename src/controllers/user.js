require("../db");
const services = require("../services/user");

const signup = async (req, res) => {
  try {
    await services.signup(req.body);
    return res.status(201).json({ message: "user creation success!" });
  } catch (err) {
    console.log("Error: ", err)
    res.status(500);
    return res.json({ error: err });
  }
};

const login = async (req, res) => {
  try {
    await services.login(req.body).then((data) => {
      if (data && data.hasOwnProperty("accessToken")) {
        res.status(200);
        console.log("data in user controller :", data)
        return res.json(data)
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
    return res.json({message: "Logout success!"});
  } catch (err) {
    console.log("Error: ", err);
  }
};

module.exports = { signup: signup, login: login, logout: logout };
