const express = require("express");
const path = require("path");
const userRouter = require("./routes/userRoute");
const swipeRouter = require("./routes/swipeRouter");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cookieController = require("./controllers/cookieController");

const matchController = require("./controllers/matchController");
const router = express.Router();
const matchRouter = require('./routes/matchRoute');
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
  }),
  secret: 'JWVduNcvPd9wNF5lt/rQc7cv4', // equivalent to a random SALT
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
  //Cookies can be set with an “expiry date”, and that is given in milliseconds. Days * 24 * 60 * 60 * 1000 is therefore the milliseconds in a day – 1000 milliseconds * 60 seconds * 60 minutes * 24 hours * days
}));

// Build file
app.use("/build", express.static(path.join(__dirname, "../build")));
app.use("/", cookieController.setCookie, express.static(path.join(__dirname, "../index.html")));


app.use("/swipe", swipeRouter);
app.use('/api/user', userRouter);
app.use('/api/matches', matchRouter);


// Add this line to include the router
app.use("/api", router);

// serve index.html
// router.get('/matches', matchController.getMatches, (req, res) => {
//   return res.status(200).json(res.locals.matches);
// });

router.get("/dogs", matchController.getAllDogs, (req, res) => {
  return res.status(200).json(res.locals.listOfDogs);
});

// app.get('/*', (req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
// });

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.use((err, req, res, next) => {
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
