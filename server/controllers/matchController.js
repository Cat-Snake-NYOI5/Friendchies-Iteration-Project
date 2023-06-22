const { query, json } = require('express');
const matchController = {};
const db = require('../dbModel');

matchController.getMatch = async (req, res, next) => {
  const id = req.params.id;
  try {
    const params = [id];
    const getAllMatches = `SELECT * FROM Profile LEFT OUTER JOIN Viewed ON receiver_id = Profile.id OR giver_id = Profile.id
    WHERE receiver_id = $1 AND liked = true OR giver_id = $1 AND liked = true EXCEPT Select * FROM Profile LEFT OUTER JOIN Viewed ON giver_id = Profile.id OR receiver_id = Profile.id WHERE giver_id = $1 or Profile.id = $1`
    const listofMatches = await db.query(getAllMatches, params);
    console.log(listofMatches);
    res.locals.listofMatches = listofMatches.rows;
    next();
  }
  catch (err) {
    const errorObj = Object.assign(err, { log: "Error in MatchController.getMatch" });
    return next(errorObj);
  }
}

matchController.getPotentialMatches = async (req, res, next) => {
  try {
    const id = req.user.id; // assuming req.user contains the logged-in user's info

    // This SQL query returns pooches that the current user has not viewed yet.
    const getPotentialMatches = `
      SELECT * 
      FROM Pooches 
      WHERE id NOT IN (
        SELECT dog_id 
        FROM Viewed 
        WHERE user_id = ${id}
      )
      AND owner != ${id}; // excluding the current user's pooch from potential matches
    `;

    const potentialMatches = await db.query(getPotentialMatches);
    console.log(potentialMatches);
    res.locals.potentialMatches = potentialMatches.rows;
    console.log(res.locals.potentialMatches);
    return next();
  } catch (err) {
    return next(err);
  }
}


module.exports = matchController;
