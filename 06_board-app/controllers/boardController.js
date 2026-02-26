// 컨트롤(라우트 핸들러)
const boardService = require("../services/boardService");

// /api/board
const list = async (req, res) => {
  console.log("현재로그인정보: ", req.session.user.login_id);
  const [rows] = await boardService.getList();
  res.json(rows); // 화면에 출력될 결과
};

// /api/board:id
const detail = async (req, res) => {
  const { id } = req.params;
  const [rows] = await boardService.getDetail(id);
  res.json(rows);
};

// post /api/board/
const insert = async (req, res) => {
  const { title, content, writer_id } = req.body;

  try {
    await boardService.insert({ title, content, writer_id });

    res.json({ retCode: "OK" });
  } catch (err) {
    console.log(err);
    console.log("req.body => ", req.body);
    const msg = err ? err.sqlMessage : "알 수 없는 예외발생";
    res.json({ retCode: "NG", retMsg: msg });
  }

  // const result = await boardService.insert({
  //   title,
  //   content,
  //   writer_id,
  // });

  // if (result.messageId) {
  //   res.json({ retCode: "OK" });
  // } else {
  //   res.json({ retCode: "NG" });
  // }
  // res.json(result);
};

module.exports = { list, detail, insert };
