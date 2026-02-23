// customer (고객) 과 관련된 라우팅 정보
const router = require("express").Router();
const path = require("path"); // path 모듈 불러오기

router.get("/error", function (req, res) {
  throw new Error("에러발생");
});

// http요청방식 + end point => CRUD 처리(REST 방식)
router.get(
  "/search",
  (req, res, next) => {
    console.log("middleware 요청");
    next();
  },
  (req, res) => {
    // res.redirect("/"); 요청의 경로를 재지정
    // res.sendFile(path.join(__dirname, "red.jpg"));
    // res.download(path.join(__dirname, "red.jpg"));
    console.log("응답처리 중");
    res.json({ retCode: "Success", retMsg: "server status 200" });
  },
);

router.post("/add", (req, res) => {
  res.send("Post방식 요청.");
});

// // GET 요청(parameter로 처리) => req.params 처리가능
// router.get("/login/:uid/:passwd", (req, res) => {
//   console.log(req.params);
//   res.send("login page.");
// });

// Post 요청 (body에 데이터 해석) => req.body 해석
router.post("/login", (req, res) => {
  console.log(req.body);
  res.send("login page.");
});

// comppression() 미들웨어 적용 http://localhost:3000/customer/download
router.get("/download", (req, res) => {
  // res.send("compression() 모듈 적용됨.");
  res.download(path.join(__dirname, "..", "red.jpg"));
});

module.exports = router; // 모듈 내보내기
