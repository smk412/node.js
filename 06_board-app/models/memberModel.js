const pool = require("../config/db");

//  (insert)
async function createMember(loginId, name, password, role) {
  const sql = `INSERT INTO tbl_member (login_id, name, password, role)
               VALUES (?, ?, ?, ?)`;
  return pool.query(sql, [loginId, name, password, role]);
}

// 조회
async function findMemberById(loginId) {
  const sql = `
    SELECT * FROM tbl_member
    WHERE login_id = ?`;
  return pool.query(sql, [loginId]);
}
module.exports = { createMember, findMemberById };
