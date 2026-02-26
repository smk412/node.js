// 게시글 관련 CRUD 기능

const pool = require("../config/db");

// 글목록 조회
async function getList() {
  const sql = `
    SELECT b.*, m.login_id, m.name
    FROM tbl_board b
    JOIN tbl_member m ON b.writer_id = m.member_id
    ORDER BY b.board_id DESC
  `;
  return pool.query(sql);
}

// 상세조회
async function getById(id) {
  const sql = `
    SELECT b.*, m.login_id, m.name
    FROM tbl_board b
    JOIN tbl_member m ON b.writer_id = m.member_id
    WHERE b.board_id = ?
  `;
  return pool.query(sql, [id]);
}

// 글등록 (insert)
async function insertById(data) {
  const sql = `
    INSERT INTO tbl_board (title, content, writer_id)
    VALUES (?, ?, ?)
  `;
  const values = [data.title, data.content, data.writer_id];

  const [result] = await pool.query(sql, values);
  return result;
}
module.exports = { getList, getById, insertById };
