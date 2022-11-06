const jwt = require("jsonwebtoken");

const validateToken = function(req, res, next) {
   let token = req.headers["x-auth-token"];
  
    if (!token) return res.send({ status: false, msg: "token required" });

    let decodedToken = jwt.verify(token, "lithium-rupam");
    if (!decodedToken) {
      return res.send({ status: false, msg: "token is invalid" });
    }
    next()
}

module.exports.validateToken = validateToken