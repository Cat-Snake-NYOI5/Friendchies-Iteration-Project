const express = require('express');
const createProfileController = require('../controllers/createProfileController');
const swipeController = require('../controllers/swipeController');
const createProfileRouter = express.Router();

createProfileRouter.post(
  '/', // changed from '/'
  createProfileController.newProfile,
  (req, res) => {
    return res.status(200).json(res.locals.createProfile);
  }
);

module.exports = createProfileRouter;
