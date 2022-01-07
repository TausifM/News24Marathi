const router = require("express").Router();
const News = require("../models/newsModel");
const verify = require("../verifyToken");

//Create News
router.post("/", verify, async (req, res, next) => {
  if (req.user.isAdmin) {
    const newNews = new News(req.body);
    try {
      const savedNews = await newNews.save();
      res.status(201).json(savedNews);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json({ message: "Youare not allowed" });
  }
});
module.exports = router;
