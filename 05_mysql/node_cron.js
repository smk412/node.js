const cron = require("node-cron");
const { logger } = require("./winston");
require("dotenv").config();
const nodemailer = require("./nodemailer");

//초 분 시 일 월 요일
cron.schedule("0 50 12 * * *", () => {
  // console.log(Date.now());
  nodemailer.send({
    from: "whu14777@daum.net",
    to: "koala579@daum.net",
    subject: "작업스케줄러",
    text: "node cron 작업스케줄러",
  });
  logger.info("메일발송");
});
