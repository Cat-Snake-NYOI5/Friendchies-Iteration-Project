const express = require("express");
const swipeController = require("../controllers/swipeController");
const swipeRouter = express.Router();

swipeRouter.get("/:id", (req, res) => {
  return res.status(200);
});
swipeRouter.post("/like", swipeController.likeDog, (req, res) => {
  return res.status(200).json(res.locals.dog);
});

swipeRouter.post("/dislike", swipeController.dislikeDog, (req, res) => {
  return res.status(200).json(res.locals.dog);
});

module.exports = swipeRouter;
