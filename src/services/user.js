require("../db");
const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const User = require("../models/user");
const Session = require("../models/session");

const signup = async (body) => {
  body.password = bcrypt.hashSync(body.password, 8);
  let created = new User(body);
  console.log("In signup, created is: ", created)
  await created.save();
  return 
};

const login = async (body) => {
  try {
    let user = await User.findOne({
      username: body.username,
    }).exec();
    let { _id, firstname, lastname, username, email, password } = user;
    const passwordIsValid = bcrypt.compareSync(body.password, password);
    if (passwordIsValid) {
      const accessToken = jwt.sign({ id: _id }, config.secret, {
        expiresIn: 86400,
      });
      const session = new Session({ uid: user._id, token: accessToken });
      session.save(function (err, user) {
        if (err) return err;
      });

      return { _id, firstname, lastname, username, email, accessToken };
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

const logout = async (body) => {
  try {
    let user = await User.findOne({
      username: body.username,
    }).exec();

    Session.deleteOne({ uid: user._id }, function (err) {
      if (err) {
        console.log(err);
        return err;
      }
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

//Find user based on jwt token stored in Session
const getUserFromToken = async (token) => {
  let accessToken = token.split(" ")[1];
  //Find Session based on username in request
  const user = await Session.findOne(
    { token: accessToken },
    function (err, session) {
      if (err) return err;
      uid = session.uid;
      //Find User based on user id (uid) in Session
      User.findOne({ _id: uid }, function (err, user) {
        if (err) return err;
      });
    }
  );
  return user;
};

module.exports = {
  signup: signup,
  login: login,
  logout: logout,
  getUserFromToken: getUserFromToken,
};
