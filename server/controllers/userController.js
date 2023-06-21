const db = require('../dbModel');

const userController = {};
// for both signing up and logging in
userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const createUserSQL = `INSERT INTO Login (username, password)
    VALUES ($1, $2)`;

    const response = await db.query(createUserSQL, [username, password]);

    res.locals.user = response;
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = userController;
