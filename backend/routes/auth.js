const User = require("../models/userModel");
const express = require("express");
const CryptoJS = require("crypto-js");
const router = express.Router();
const jwt = require("jsonwebtoken");
// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      "secret key 123"
    ).toString(),
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});
// Login
router.post("/login", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const decryptPass = CryptoJS.AES.decrypt(
      user.password,
      "secret key 123"
    ).toString(CryptoJS.enc.Utf8);
    if (decryptPass !== req.body.password) {
      return res.status(401).json({ error: "Incorrect password" });
    }
    const accesstoken = jwt.sign(
        { _id: user._id, isAdmin: user.isAdmin },
        "secret key 123",
        { expiresIn: "1h" }
      ),
      refreshtoken = jwt.sign(
        { _id: user._id, isAdmin: user.isAdmin },
        "secret key 123",
        { expiresIn: "7d" }
      );
    const { password, ...info } = user._doc;

    res.status(200).json({ ...info, accesstoken, refreshtoken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
