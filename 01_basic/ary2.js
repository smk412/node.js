// ----------------------------- reduce() : 이전 순번의 결과를 다음 순번의 매개 값으로 활용---------------------------------

// result = [10, 15, 20, 25, 30].reduce((accm, elem, idx) => {
//   console.log(idx, "-> ", accm, elem);
//   if (elem >= 20) {
//     const li = document.createElement("li");
//     li.innerText = elem;
//     accm.appendChild(li);
//   }
//   return accm;
// }, document.querySelector("list"));

// console.log(result);

// console.clear();

// Male 사람의 급여합계.
// const male_salary_sum = (accm, elem, idx, array) => {
//   const { salary, gender } = elem;
//   console.log(idx, "-> ", accm);
//   if (gender == "Male") {
//     accm += salary;
//   }
//   return accm;
// };

// result = ary.reduce(male_sarary_sum, 0);

// console.log("Male  급여 합계 : " + result);

// Female의 급여가 10,000 이하인 사람들의 { 번호 | 이름(fn+ln) | 이메일 | 급여 }
// 새로운 배열로 생성

// const female_info_orderBy_salary = (accm, elem) => {
//   const { salary, gender, id, first_name, last_name, email } = elem;
//   const obj = {
//     no: id,
//     name: first_name + "-" + last_name,
//     email,
//     salary,
//   };

//   if (gender == "Female" && salary <= "10000") {
//     accm.push(obj);
//   }
//   return accm;
// };

// result = ary.reduce(female_info_orderBy_salary, []);

// console.log(result);
