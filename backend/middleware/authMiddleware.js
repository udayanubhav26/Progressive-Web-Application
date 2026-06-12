const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;   // ✅ ALWAYS USE THIS

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};