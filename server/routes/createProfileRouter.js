const express = require("express");
const createProfileController = require("../controllers/createProfileController");
const swipeController = require("../controllers/swipeController");
const createProfileRouter = express.Router();

createProfileRouter.post(
  "/",
  createProfileController.newProfile,
  swipeController.likeDog,
  (req, res) => {
    return res.status(200).json(res.locals.createProfile);
  }
);

module.exports = createProfileRouter;
