//문자열 특정패턴 찾기
console.log("Hello, World".replace(/l/g, "L"));
console.log(
  /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test("010-1234-5678"),
);

console.log(
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test("abcd1234@naver.com"),
);
