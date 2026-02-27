const jwt = require("jsonwebtoken");

const authCheck = async (req, res, next) => {
  console.log("middleware1 . . .");
  if (req.session.user) {
    next();
  } else {
    return res.send({ retCode: "NG", retMsg: "권한이 없습니다." });
  }
};

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  if (!authHeader) {
    res.json({ retCode: "NG", retMsg: "토큰 값이 없습니다." });
    return;
  }

  const token = authHeader.split(" ")[1];
  const decoded = jwt.verify(token, "secret-token");
  console.log(decoded);

  req.user = decoded;

  next();
};

module.exports = { authCheck, verifyToken };
