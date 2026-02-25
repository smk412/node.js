const express = require("express");
const path = require("path");

require("dotenv").config();
const mysql = require("./index");
const encrypto = require("./crypto");
const nodemailer = require("./nodemailer");
const { upload } = require("./multer");
const { excel_run } = require("./excel");

// express 인스턴스
const app = express();

// body parser
app.use(express.json());

// 정적 페이지
app.use(express.static("public"));

// 라우팅
// 1. 전체 목록 조회. 리소스 + 요청방식 => CRUD(REST 방식)
app.get("/api/customer", async (req, res) => {
  const result = await mysql.query("customerList");
  console.log(result);

  // 결과응답. json 문자열로 반환
  res.json(result);
});

// 2. 등록
app.post("/api/customer/insert", async (req, res) => {
  const { name, email, phone, passwd } = req.body;
  // 암호화 단계
  const hashPasswd = encrypto.createPassword(passwd);

  const result = await mysql.query("customerInsert", [
    { name, email, phone, passwd: hashPasswd },
  ]);

  res.json(result);
});

// 3. 수정
app.put("/api/customer/update", async (req, res) => {
  const { name, email, phone, id } = req.body;
  const result = await mysql.query("customerUpdate", [
    { name, email, phone },
    id,
  ]);
  res.json(result);
});

// // 4. 삭제
app.delete("/api/customer/delete/:id", async (req, res) => {
  const { id } = req.params;
  const result = await mysql.query("customerDelete", [id]);
  res.json(result);
});

// 5. 조회(로그인: id(email), pw(평문 vs 암호화))
app.post("/api/login", async (req, res) => {
  // 조회(email 기준으로 조회. )
  const { email, plainTxt } = req.body;

  const [{ passwd }] = await mysql.query("customerSelect", [email]);
  // const result = passwd[0].passwd;

  // console.log("result => ", result);
  const success = encrypto.checkPassword(plainTxt, passwd);

  // console.log("createPW() => ", encrypto.createPassword(plainTxt));
  // console.log("passwd => ", result);

  res.json({ success });
});

// 6. 메일 발송
app.post("/api/mail", upload.single("myfile"), async (req, res) => {
  const { from, to, subject, text } = req.body;
  console.log(req.file);
  // multi 라인으로 변경
  const html = text
    .split("\n")
    .map((elem) => `<p>${elem}</p>`)
    .join("");

  //메일 발송 파일 첨부 여부에 따라 처리
  let attachments;
  if (req.file == undefined) {
    attachments = null;
  } else {
    attachments = [
      {
        filename: req.file.filename,
        path: req.file.path, //path.join(__dirname, req.file.destination, req.file.filename),
      },
    ];
  }
  const postData = {
    from,
    to,
    subject,
    html,
    attachments,
  };

  const result = await nodemailer.send(postData);

  if (result.messageId) {
    res.json({ retCode: "OK" });
  } else {
    res.json({ retCode: "NG" });
  }
  // res.json(result);
  // res.send("<p>메일발송성공</p>");
});

// 엑셀파일 첨부 후 db insert
app.post("/api/excel_upload", upload.single("excelFile"), async (req, res) => {
  const result = await excel_run(req.file.path);
  console.log("excel.post' result => ", result);
  res.json(result);
});

app.listen(3000, () => {
  console.log("server is running . . .");
});
