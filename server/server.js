const express = require("express");
const path = require("path");
const userRouter = require("./routes/userRoute");
const swipeRouter = require("./routes/swipeRouter");
const dbModel = require('./dbModel');
const createProfileRouter = require("./routes/createProfileRouter");

const cookieParser = require('cookie-parser');
const session = require('express-session');
const cookieController = require("./controllers/cookieController");
const sessionController = require("./controllers/sessionController");
const userController = require("./controllers/userController");

const matchController = require("./controllers/matchController");
const router = express.Router();
const matchRouter = require("./routes/matchRoute");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(cookieParser());

// session https://www.npmjs.com/package/connect-pg-simple
app.use(session({
  store: new (require('connect-pg-simple')(session))({
    pool: dbModel.pool,
  }),
  secret: 'JWVduNcvPd9wNF5lt/rQc7cv4', // equivalent to a random SALT
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
  //Cookies can be set with an “expiry date”, and that is given in milliseconds. Days * 24 * 60 * 60 * 1000 is therefore the milliseconds in a day – 1000 milliseconds * 60 seconds * 60 minutes * 24 hours * days
}));

// Build file
app.use("/build", express.static(path.join(__dirname, "../build")));
app.use("/", express.static(path.join(__dirname, "../index.html")));

// app.post('/login', userController.verifyUser, cookieController.setCookie, sessionController.isLoggedIn, (req, res) => {
//   res.redirect(302, '/swipe')
// })
app.use("/swipe", swipeRouter);

// app.use("/createprofile", createProfileRouter);

app.use("/api/user", userRouter);

app.use("/api/matches", matchRouter);

// Add this line to include the router
app.use("/api", router);

// serve index.html
// router.get('/matches', matchController.getMatches, (req, res) => {
//   return res.status(200).json(res.locals.matches);
// });

// this should be app instead of router? 
// app.get("/dogs", matchController.getAllDogs, (req, res) => {
//   return res.status(200).json(res.locals.listOfDogs);
// });

// app.get('/*', (req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
// });

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.use((err, req, res, next) => {
  console.log("ERR", err);
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on port 3000.`));
