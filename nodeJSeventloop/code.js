const fs = require("fs");
const os = require('os');

console.log(os.cpus().length);
console.log("1");
//Blocking...
// const result = fs.readFileSync("constacts.txt", "utf-8");
// console.log(result);
// console.log("2");


//Non-Blocking
fs.readFile("constacts.txt", "utf-8", (err, result)=>{
console.log(result);
});
console.log("2");


//Default thread pool size = 4
//Max depends on ssystem cpu core