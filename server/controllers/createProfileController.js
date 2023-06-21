const { query, json } = require("express");
const createProfileController = {};
const db = require("../dbModel");

createProfileController.newProfile = (req, res, next) => {
  const login_id = [req.query.id];

  const {
    dog_name,
    owner_name,
    zip,
    breed,
    size,
    age,
    phone_number,
    gender,
    image_url,
    isfixed,
    biography,
  } = req.body;

  const fields = [
    "dog_name",
    "owner_name",
    "zip",
    "breed",
    "size",
    "age",
    "phone_number",
    "gender",
    "image_url",
  ];
  fields.map((field) => {
    if (!req.body[field]) {
      return next({ err: { mesasge: `the field ${field} is required` } });
    }
    //the table name may need to be in title Profile
    const createProfile = `INSERT INTO Profile (dog_name, owner_name, zip, breed, size, age, phone_number, gender, image_url, isfixed, biography,) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11,)`;
    db.query(
      createProfile,
      dog_name,
      owner_name,
      zip,
      breed,
      size,
      age,
      phone_number,
      gender,
      image_url,
      isfixed,
      biography
    )
      .then(() => {
        res.locals.createProfile = { createProfile: true };
        return next();
      })
      .catch((err) => {
        return next(err);
      });
  });
};

module.exports = createProfileController;
