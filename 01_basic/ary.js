// -----------------------------sort() ---------------------------------

// console.log(["Hello", "Hi", "Good", "World"].sort());

// console.log([10, 35, 21, 121, 11].sort((n1, n2) => n1 - n2));

// id기준 - 내림차순 정렬
// const id_desc = (obj1, obj2) => obj2.id - obj1.id;

// // salary기준 - 오름차순 정렬
// const salary_asc = (a, b) => a.salary - b.salary;

// // first_name 오름차순 정렬
// const fn_asc = (a, b) => (a.first_name < b.first_name ? -1 : 1);

// ary.sort(fn_asc);

// console.log(ary);

// if ("hello" > "Hello") {
//   console.log("hello");
// } else {
//   console.log("Hello");
// }

// -----------------------------filter() : 조건을 만족하는 요소  ---------------------------------

// console.clear();

// // 급여가 10,000 이하인 사람들
// const less_then_10000 = (elem, idx) => {
//   console.log(elem, idx);
//   if (elem.salary < 10000) {
//     return true;
//   }
//   return false;
// };

// // 여자 중에서 8,000 이상인 사람
// const female_more_than_8000 = (elem) =>
//   elem.gender == "Female" && elem.salary > 8000;

// -----------------------------map() : A -> A' 매핑 ---------------------------------

// A : id | first_name | last_name | email | gender | salary

// A' :  no | name | gender | salary

// const result = ary
//   .filter(female_more_than_8000) //
//   .map((elem, idx, array) => {
//     // 객체 구조분해
//     const { id, first_name, last_name, gender, email, salary } = elem;
//     //
//     const obj = {
//       no: id,
//       name: first_name + "-" + last_name,
//       gender,
//       salary,
//     };
//     return obj;
//   });

// console.log(result);
