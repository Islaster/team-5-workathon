const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  create,
  login,
  checkToken,
  edit,
};

function checkToken(req, res) {
  console.log("req.user", req.user);
  res.json(req.exp);
}

async function login(req, res) {
  try {
    console.log(user);
    const user = await User.findOne({ email: req.body.username });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json(createJWT(user));
  } catch {
    res.status(400).json("Bad Credentials");
  }
}

async function create(req, res) {
  try {
    //add user to the database
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // send back the token as a string
    // which we need to account for
    // in the client
    res.json(token);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
}
async function edit(req, res) {
  User.findOneAndUpdate({ "User._id": req.params.id }).then(function (user) {
    user.name = req.body.name;
    user.username = req.body.username;
    user.save(() => {
      res.json(user);
    });
  });
  try {
  } catch (e) {
    console.log(e);
    res.status(400);
  }
}
/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}
