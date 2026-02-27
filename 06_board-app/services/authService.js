const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authModel = require("../models/memberModel");

// 회원등록
async function signUp(loginId, name, password, role) {
  //비밀번호 암호화
  const hashed = await bcrypt.hash(password, 10);
  console.log(hashed);

  return authModel.createMember(loginId, name, hashed, role);
}

// 로그인
async function login(loginId, password) {
  const [rows] = await authModel.findMemberById(loginId);

  // 조회된 결과 없으면 실패
  if (rows.length == 0) {
    return null;
  }
  // 평문:password == rows[0].password 비교
  const user = rows[0];
  // console.log("service.login().user", user);
  const match = await bcrypt.compare(password, user.password);

  // 값이 다름
  if (!match) {
    return null;
  }

  // token발행 -> 암호화 -> 반환
  const token = jwt.sign(
    {
      member_id: user.member_id,
      login_id: user.login_id,
      role: user.role,
    },
    "secret-token",
    { expiresIn: "1h" },
  );

  console.log("token", token);

  // 정상
  return token; // token
}
module.exports = { signUp, login };
