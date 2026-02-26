// 업무
const boardModel = require("../models/boardModel");

// 서비스 - 모델 => 1:1매칭

/* 업무 (service)의 역할은 다음과 같다.
   업무 1. 조회 -> 변경 -> 등록 -> 변경
   업무 2. 변경 -> 조회 -> 등록 -> 변경
   업무 3. 등록 -> 변경 -> 조회 -> 변경
   service 단계가 없다면 model 단계에서 한 쿼리에 여러 동작들은 한 번에 작성해야함.
*/

//게시글 전체 조회 업무
async function getList() {
  return boardModel.getList();
}

//게시글 단건 조회 업무
async function getDetail(id) {
  return boardModel.getById(id);
}

// 등록(insert)
async function insert(data) {
  return boardModel.insertById(data);
}

module.exports = { getList, getDetail, insert };
