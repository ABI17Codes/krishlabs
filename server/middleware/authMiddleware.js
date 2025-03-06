const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid Token" });
    req.admin = decoded;
    next();
  });
};

module.exports = verifyAdmin;
