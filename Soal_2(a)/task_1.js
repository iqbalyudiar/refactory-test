const fs = require("fs");

let rawdata = fs.readFileSync("profile_list.json");
let users = JSON.parse(rawdata);

let userName = users.filter((user) => user.profile.phones.length < 1);

console.log("Answer of Exercise Number 1 \n", userName);
