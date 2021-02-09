const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const projects = require("../routes/project");
const actions = require("../routes/action");
const braindumps = require("../routes/braindump");
const reviews = require("../routes/review");
const references = require("../routes/reference");
const incubates = require("../routes/incubate");
const inbaskets = require("../routes/inbasket");
const auth = require("../routes/auth");
const users = require("../routes/user");

const app = new express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/projects", projects);
app.use("/actions", actions);
app.use("/braindumps", braindumps);
app.use("/reviews", reviews);
app.use("/references", references);
app.use("/incubates", incubates);
app.use("/inbaskets", inbaskets);
app.use("/users", users)
app.use("/", auth)

const port = process.env.port || 4000;

app.listen(port, function () {
  console.log(`Server is up on port ${port}`);
});
