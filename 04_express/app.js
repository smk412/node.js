const express = require("express"); // express 모듈 불러오기
const app = express(); // 인스턴스
const fs = require("fs");
const session = require("express-session");
const fileStore = require("session-file-store")(session);
const cors = require("cors");

const customerRoute = require("./routes/customer");
const compression = require("compression");

// body parser 셋업     body - parser : body 영역의 데이터를 해석
app.use(express.urlencoded()); // x-www-form-urlencoded
app.use(express.json()); //json
app.use("/customer/download", compression()); // 경로 설정 없으면, 모든 라우팅에 적용

// session 관리
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 60000,
    },
    store: new fileStore(),
  }),
);

// cors 셋업
app.use(cors());

//정적파일 폴더(html, css, js)
// app.use("/static", express.static("public"));
app.use(express.static("public"));

// 라우팅 [요청방식 + URL(end point) => 실행할 함수]
app.get("/", (req, res) => {
  const json = JSON.stringify({ id: "user99", name: "홍길동" });
  // fs.readFile 메소드 또는 fs.readFileSync
  const data = fs.readFileSync("./index.html", "utf-8");
  console.log(data);
  res.status(200).send(data);
});

// 외부 라우팅 정보 호출
app.use("/customer", customerRoute);
app.use("/product", require("./routes/product"));

app.get("/data", (req, res) => {
  res.json({ id: "1001", data: "sample" });
});

// session
app.get("/login", (req, res) => {
  req.session.user = { id: "user99", name: "홍길동" };
  res.send("session에 저장");
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("로그아웃");
});

app.get("/my_info", (req, res) => {
  console.log(req.session.user);
  if (!req.session.user) {
    res.json({ retCode: "NG", retMsg: "No user info" });
    return;
  }
  res.json(req.session.user);
});

// express 에서 에러처리
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ statusCode: res.statusCode, errMsg: err.message });
});

// 서버 실행
app.listen(3000, () => {
  console.log("http://localhost:3000 started");
});
