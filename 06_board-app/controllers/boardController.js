// 컨트롤(라우트 핸들러)
const boardService = require("../services/boardService");

// /api/board
const list = async (req, res) => {
  const [rows] = await boardService.getList();
  // console.log("boardController.list().[rows]", rows);

  res.json(rows); // 화면에 출력될 결과
};

// /api/board:id
const detail = async (req, res) => {
  const { id } = req.params;
  const [rows] = await boardService.getDetail(id);
  console.log(rows);
  //현재 로그인 정보(login_id, name)
  const { login_id, name, member_id } = req.session.user || {
    login_id: "",
    name: "",
    member_id: "",
  }; //

  res.json({ user: { login_id, name, member_id }, data: rows });
};

// post /api/board/
const insert = async (req, res) => {
  const { title, content } = req.body;
  const writer_id = req.user.member_id; // token에 저장된 값

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

// 삭제 (remove)
const remove = async (req, res) => {
  const { id } = req.params; // /api/board/3 -> [id == 3]
  const result = await boardService.remove(id, req.user);

  if (result == "NO_AUTH") {
    return res.json({ retCode: "NG", retMsg: "권한 없음." });
  }
  res.json({ retCode: "OK" });
};

module.exports = { list, detail, insert, remove };
