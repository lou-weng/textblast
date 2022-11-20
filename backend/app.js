const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const auth = require("./auth");
const groupFunctions = require("./insert-data");

const app = express();
app.use(cors());
const port = 3000;

const jsonParser = bodyParser.json();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/user", async (req, res) => {
  const { username } = req.query;

  const user = await auth.getUser(username);
  res.send(user);
});

app.post("/register", jsonParser, async (req, res) => {
  const { username, password } = req.body;

  const isUsernameTaken = await auth.getUser(username);

  if (isUsernameTaken) {
    res.status(400);
    res.send("Username is already taken");
    return;
  }

  const hashedPassword = auth.getHashedPassword(password);

  const userObject = {
    username: username,
    password: hashedPassword,
  };

  await auth.createUser(userObject);
  res.status(200);
  res.send("Successfully registered!");
});

// getting group
app.get("/group", async (req, res) => {
  const groupID = req.body.groupID;
  const group = await groupFunctions.getGroup(groupID);
  res.send("getGroup: " + group);
});

// adding group
app.post("/group", jsonParser, async (req, res) => {
  const { gID, gName } = req.body;

  const groupDocument = {
    gID: gID,
    gName: gName,
  };

  await groupFunctions.createGroup(groupDocument);
  res.status(200);
  res.send("group creation success");
});
