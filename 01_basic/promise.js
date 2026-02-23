// promise 객체 : pending/ fulfilled/ rejected

// fetch("./MOCK_DATA.json")
//   .then((resp) => resp.json())
//   .then((result) => {
//     console.log("result => ", result);
//   });

// console.log("end of prog.");

//setTimeout();
// 1번쨰 => 2초 작업
// 2번쨰 => 3초 작업
// 3번쨰 => 1초 작업
// 비동기식 처리가 시간상의 이점
// Promise => 비동기처리를 동기방식의 코드
// 예제.
// const promise = new Promise(function (resolve, reject) {
//   console.log("promise call.");
//   resolve("OK");
//   reject("NOK");
// });

// promise //
//   .then((param) => {
//     console.log(param);
//     return 1;
//   })
//   .then((param) => {
//     console.log(param);
//     return 2;
//   })
//   .catch((params) => {
//     console.error(params);
//   });

// // 비동기방식코드 -> 동기방식코드.
const p1 = new Promise(function (resolve) {
  setTimeout(() => {
    console.log("1번째");
    data += 5;
    console.log(`data => ${data}`);
    resolve(data); // then 메소드 호출
  }, 2000);
});

p1.then((param) => {
  //
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("2번째");
      data *= 2;
      console.log(`data => ${data}`);
      resolve(data); // then 메소드 호출
    }, 3000);
  });
})
  //
  .then((param) => {
    return new Promise(function (resolve) {
      setTimeout(() => {
        console.log("3번째");
        data -= 7;
        console.log(`data => ${data}`);
      }, 1000);
    });
  })
  .catch(
    (err) =>
      function () {
        console.error(err);
      },
  );

let data = 10;

// setTimeout(() => {
//   console.log("1번째");
//   answer += 5;
//   console.log(`answer => ${answer}`);
// }, 1000);

// setTimeout(() => {
//   console.log("2번째");
//   answer *= 2;
//   console.log(`answer => ${answer}`);
// }, 700);

// setTimeout(() => {
//   console.log("3번째");
//   answer -= 7;
//   console.log(`answer => ${answer}`);
// }, 1200);
