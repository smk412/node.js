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

module.exports = { send };
