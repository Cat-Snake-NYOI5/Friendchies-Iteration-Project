const express = require("express");
const userController = require("../controllers/userController");
const cookieController = require("../controllers/cookieController")
const router = express.Router();

router.post('/signup', userController.createUser, cookieController.setCookie, (req, res) => {
  res.status(200).json(res.locals.user);
})

router.post('/login', userController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.user);
})
module.exports = router;
