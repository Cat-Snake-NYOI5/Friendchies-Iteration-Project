const { query, json } = require("express");
const db = require("../dbModel.js");

const swipeController = {};

swipeController.getdogs = (req, res, next) => {
  //req.query.id TBD
  const id = [req.query.id];
  //the table name may need to be in title Profile
  const getdogs = `SELECT * FROM profile 
  LEFT OUTER JOIN viewed 
  ON profile.id = giver_id 
  WHERE viewed.giver_id != $1`;

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
  const { giver_id, receiver_id } = req.body;
  //the table name may need to be in title Profile
  const likeDog = `INSERT INTO profile (giver_id,receiver_id,liked)
  VALUES ($1, $2, true)`;
  db.query(likeDog, giver_id, receiver_id)
    .then(() => {
      res.locals.listOfDogs = { like: true };
      return next();
    })
    .catch(({ message: { err: "error middleware likeDog" } }) => {
      return next(err);
    });
};

swipeController.dislikeDog = (req, res, next) => {
  const { giver_id, receiver_id } = req.body;
  const dislikeDog = `INSERT INTO Viewed (giver_id,receiver_id,liked)
  VALUES ($1, $2, false)`;
  db.query(dislikeDog, giver_id, receiver_id)
    .then(() => {
      res.locals.listOfDogs = { dislike: true };
      return next();
    })
    .catch((err) => {
      return next(err);
    });
};

module.exports = swipeController;
