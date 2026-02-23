const path = require("path");
const fs = require("fs");

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename, ".js"));
console.log(path.extname(__filename));

// parse => root, dir, base, ext 분리
console.log(path.parse(__filename));

//
console.log(path.format({ dir: "D:\\git\\node.js", base: "sample.txt" }));
console.log(path.join("D:\\git\\node.js", "node.js", "module", "sample.txt"));

const filePath = path.join(
  "D:\\",
  "git",
  "node.js",
  "module",
  "output",
  "stderr.log",
);

//file i/o 처리
// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

const data = fs.readFileSync(filePath, "utf-8");
console.log(data);

console.log("end of prog");

fs.writeFile(__dirname + "\\todo.txt", "Sample...", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("write done");
});
