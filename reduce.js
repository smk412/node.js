const { ary } = require("./data");

const male_member_only = (accm, elem) => {
  if (elem.gender == "Male") {
    accm.Male.push(elem);
  }
  return accm;
};

let result = ary.reduce(male_member_only, { Male: [] });

console.log(result);

// const obj = { name: "Hong" };
// obj.name;
// obj["name"];
