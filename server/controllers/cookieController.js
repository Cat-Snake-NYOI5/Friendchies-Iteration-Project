const cookieController = {};

cookieController.setCookie = function (req, res) {
  if (res.locals.user) return next({
    log: "Express error handler caught on the setCookie controller",
    status: 500, // is this the correct status error? 
    message: { err: "An error occurred" }
  })
  res.cookie('ssid', res.locals.user, { httpOnly: true });
  console.log(res.locals.user, 'coming from setCookie')
  return next();
}
//HttpOnly is a flag that can be included in a Set-Cookie response header. The presence of this flag will tell browsers to not allow client side script access to the cookie (if the browser supports it). This is important because it helps protect your cookie data from malicious scripts and helps mitigate the most common XSS attacks. http://scottksmith.com/blog/2014/09/04/simple-steps-to-secure-your-express-node-application/ 


module.exports = cookieController; 