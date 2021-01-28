// const fs = require("fs");

// let rawdata = fs.readFileSync("profile_list.json");
let rawdata = require("./profile_list.json");
// let users = JSON.parse(rawdata);
console.log(rawdata);

// const checkname = users.filter((user) =>
//   user.profile.full_name.toLowerCase().includes("annisa")
// );
// console.log("Answer of Exercise Number 3 \n", checkname);
