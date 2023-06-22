const express = require('express');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const router = express.Router();
const sessionController = require('../controllers/sessionController');

router.post(
  '/signup',
  userController.verifyUser,
  cookieController.setCookie,
  sessionController.isLoggedIn,
  (req, res) => {
    res.status(200).json(res.locals.user);
  }
);

// router.post('/', userController.verifyUser, cookieController.setCookie, sessionController.isLoggedIn, (req, res) => {
//   res.status(200).json(res.locals.user);
// })
router.post('/login', userController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.user);
});
module.exports = router;
