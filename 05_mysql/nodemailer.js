const nodemailer = require("nodemailer");

const daumConfig = {
  host: "smtp.daum.net",
  port: 465,
  secure: true,
  auth: {
    user: "whu14777@daum.net",
    pass: "yfxbievheburbxwy",
  },
};
const send = async (data) => {
  return new Promise((resolve, reject) => {
    // nodemailer 모듈의 createTransport 객체
    const transport = nodemailer.createTransport(daumConfig);
    // 메일 발송
    transport.sendMail(data, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      console.log(result);
      console.log(data);
      resolve(result);
    });
  });
};

// send({
//   from: "whu14777@daum.net",
//   to: "tjdtn7897@gmail.com",
//   subject: "파일첨부테스트",
//   html: "<p>파일첨부연습</p>",
//   attachments: [
//     {
//       filename: "레드향.jpg", // 파일명
//       path: __dirname + "/uploads/" + "레드향.jpg", // 실제 파일
//     },
//   ],
// });

// console.log("mail send . . .");

module.exports = { send };
