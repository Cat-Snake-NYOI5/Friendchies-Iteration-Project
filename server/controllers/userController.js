const { verify } = require('jsonwebtoken');
const db = require('../dbModel');

const userController = {};
// for both signing up and logging in

// Sign up a new user
userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const createUserSQL = `INSERT INTO Login (username, password) VALUES ($1, $2) RETURNING id`;

    const response = await db.query(createUserSQL, [username, password]);
    console.log(response);

    res.locals.user = response.rows[0].id// send my id back
    return next();
  } catch (err) {
    return next(err);
  }
};
//login an existing user 
userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const params = [username, password];
    const verifyUserSQL = 'SELECT id FROM Login WHERE (username = $1 AND password = $2)'
    const response = await db.query(verifyUserSQL, [username, password]);
    res.locals.user = response.rows[0].id // send my id back
    return next();
  } catch (err) {
    return next(err);
  }
}

module.exports = userController;
