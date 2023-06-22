const { query, json } = require('express');
const matchController = {};
const db = require('../dbModel');

matchController.getMatch = async (req, res, next) => {
  const id = req.params.id;
  try {
    const params = [id];
    const getAllMatches = `SELECT Profile.id, Profile.dog_name, Profile.zip, Profile.breed, Profile.size, Profile.age, Profile.phone_number, Profile.gender, Profile.image_url, Profile.isfixed, Profile.biography
    FROM Profile
    LEFT JOIN Viewed
    ON Profile.id = Viewed.receiver_id OR Profile.id= Viewed.giver_id
    WHERE Viewed.receiver_id = $1 AND Viewed.liked = 'true' AND NOT Profile.id = $1 OR Viewed.giver_id = $1 AND Viewed.liked = 'true' AND NOT Profile.id = $1`
    const listofMatches = await db.query(getAllMatches, params);
    console.log(listofMatches);
    res.locals.listofMatches = listofMatches.rows;
    next();
  }
  catch (err) {
    const errorObj = Object.assign(err, {log: "Error in MatchController.getMatch" });
    return next(errorObj);
  }
}



matchController.getAllDogs = async (req, res, next) => {
  try {
    const getAllDogs = `SELECT * FROM Profile`;
    const listOfDogs = await db.query(getAllDogs);
    console.log(listOfDogs);
    res.locals.listOfDogs = listOfDogs.rows;
    return next();
  } catch (err) {
    return next(err);
  }
}
// we don't have a matches table, can reference for info. 
// controller.getMatches = async (req, res, next) => {
//   try {
//     const id = 1;
//     const getMatches = 'SELECT p.id, p.name, p.owner, p.zip, p.breed, p.size, p.age, p.gender FROM pooches p RIGHT OUTER JOIN matches ON matches.matched_user = p.id WHERE matches.login_user = 1';
//     const listOfMatches = await db.query(getMatches);
//     console.log(listOfMatches);
//     res.locals.matches = listOfMatches.rows;
//     return next();
//   } catch (err) {
//     return next(err);
//   }
// }

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
