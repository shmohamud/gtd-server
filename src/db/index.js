const mongoose = require("mongoose");
require('dotenv').config()
const chalk = require("chalk");
const connected = chalk.bold.greenBright;
const error = chalk.bold.yellowBright;
const disconnected = chalk.bold.red;
const closed = chalk.bold.bgWhite;

const dbURL = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/gtd-api";

console.log("DB URL ", dbURL)

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", function () {
  console.log(connected("Mongoose connection is open to ", dbURL));
});

mongoose.connection.on("disconnected", function () {
  console.log(disconnected("Mongoose connection is disconnected"));
});

mongoose.connection.on("error", function (err) {
  console.log(error("Mongoose connection error", err));
});

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log(
      closed("Mongoose connection is disconnected due to app termination")
    );
    process.exit(0);
  });
});
