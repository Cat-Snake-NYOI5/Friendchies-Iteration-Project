const sessionController = {};

// verify if a cookie exists, if it does then move on. Otherwise direct them to the sign up page. 
sessionController.isLoggedIn = function (req, res, next) {
  console.log(req.cookies.ssid, "req.cookies")
  if (req.cookies.ssid) {
    req.session.isLoggedIn = true;
    return next()
  } else {
    return res.redirect(302, '/signup')
  }
}

// create a new session 
// sessionController.startSession = async (req, res, next) => {
//   // if the cookie doesnt exist, then throw an error. 
//   if (!res.cookie) return next({ log: "Express error handler caught on sessionController.startSession middleware error", status: 500, message: { err: "An error occurred" } })
//   try {
//     // save a session somehow
//     await 
//   }
//   catch (err) {
//     return next(err);
//   }
// };

// drop a session? 

module.exports = sessionController;