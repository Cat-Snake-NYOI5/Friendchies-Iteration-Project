const { query, json } = require("express");
const createProfileController = {};
const db = require("../dbModel");

createProfileController.newProfile = (req, res, next) => {
  //const login_id = [req.query.id];
  console.log("createprofile");
  console.log(req.body);

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
  const values = [
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
  ];

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
      return next({ message: { err: `the field ${field} is required` } });
    }
  });
  //the table name may need to be in title Profile
  const createProfile = `INSERT INTO Profile (dog_name, owner_name, zip, breed, size, age, phone_number, gender, image_url, isfixed, biography) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;
  db.query(createProfile, values)
    .then(() => {
      res.locals.createProfile = { createProfile: true };
      console.log("exiting createprofile");
      return next();
    })
    .catch((err) => {
      return next({ message: { err: "createProfile" } });
    });
};

module.exports = createProfileController;
