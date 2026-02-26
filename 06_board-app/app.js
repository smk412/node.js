// express 인스턴스.
const express = require("express");
require("dotenv").config();
const session = require("express-session");

const boardRoutes = require("./routes/boardRoutes");
const authRoutes = require("./routes/authRoutes");

// 서버 인스턴스.
const app = express();
app.use(express.static("public"));

// session 관리
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false, // true => https, false => http
      maxAge: 10 * 60 * 1000,
    },
    store: new fileStore(),
  }),
);

// json body-parser
app.use(express.json());

//라우팅 정보
app.use("/api/board", boardRoutes);
app.use("./api/auth", authRoutes);

// 서버 시작.
app.listen(3000, () => {
  console.log("http://localhost:3000 is running...");
});
