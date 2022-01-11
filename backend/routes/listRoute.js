const express = require("express");
const verify = require("../verifyToken");
const List = require("../models/listModel");
const router = require(express).Router();
// Create
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
      const savedList = await newList.save();
      res.status(200).json(savedList);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
});
// Delete
router.delete("/:id", verify, async (req, res) => {
  if (req.use.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json("deleted list");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(400).json("You are not allowed");
  }
});
// Get
router.get("/", verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error);
  }
});
