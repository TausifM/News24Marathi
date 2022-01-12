const router = require("express").Router();
const res = require("express/lib/response");
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
    res.status(401).json({ message: "You are not allowed" });
  }
});

// Get
router.get("/find/:id", verify, async (req, res) => {
  try {
    await News.findById(req.params.id);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update
router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedNews = await News.findByIdAndDelete(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedNews);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed ");
  }
});

// Delete
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await News.findByIdAndDelete(req.params.id);
      res.status(200).json("News deleted successfully");
    } catch (error) {
      res.status(500).jsōn(error);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
});
// Get random
router.get("/find/:id", verify, async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await News.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await News.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
});
// Get All
router.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});
module.exports = router;
