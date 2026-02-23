// 공유
const { boardList, userName } = require("./board");

console.log(userName); //임포트하였지만, userName없음 ( 익스포트 x) -> 추가됨
let result = boardList();
console.log(result);
