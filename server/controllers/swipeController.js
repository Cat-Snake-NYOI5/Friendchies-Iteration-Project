const { query, json } = require("express");
const db = require("../dbModel.js");

const swipeController = {};

swipeController.getdogs = (req, res, next) => {
  console.log('IN CORRECT CONTROLLER')
  const id = [req.params.id];

  const getdogs = `SELECT * FROM profile WHERE ID NOT IN (SELECT RECEIVER_ID FROM viewed WHERE GIVER_ID = $1)`

  db.query(getdogs, id)
    .then((data) => {
      res.locals.listOfDogs = data.rows;
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

swipeController.likeDog = (req, res, next) => {
  console.log("likeDo");
  const { giver_id, receiver_id } = req.body;
  const values = [giver_id, receiver_id, true];
  //the table name may need to be in title Profile
  //original
  // const likeDog = `INSERT INTO Viewed (giver_id,receiver_id,liked)
  // VALUES ($1, $2, $3)`;

  //modified
  const likeDog = `INSERT INTO viewed(giver_id, receiver_id, liked)
  SELECT $1, $2, $3 WHERE NOT EXISTS (SELECT * FROM Viewed WHERE giver_id = $1 AND receiver_id = $2)`;

  db.query(likeDog, values)
    .then(() => {
      res.locals.listOfDogs = { like: true };
      console.log("exiting likeDog");
      return next();
    })
    .catch((err) => {
      return next({ message: { err: "like" } });
    });
};

swipeController.dislikeDog = (req, res, next) => {
  const { giver_id, receiver_id } = req.body;
  // const dislikeDog = `INSERT INTO Viewed (giver_id,receiver_id,liked)
  // VALUES ($1, $2, $3)`;
  const dislikeDog = `INSERT INTO viewed(giver_id, receiver_id, liked)
  SELECT $1, $2, $3 WHERE NOT EXISTS (SELECT * FROM Viewed WHERE giver_id = $1 AND receiver_id = $2)`
  db.query(dislikeDog, [giver_id, receiver_id, false])
    .then(() => {
      res.locals.listOfDogs = { dislike: true };
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = swipeController;
