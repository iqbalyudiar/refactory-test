const fs = require("fs");

let rawdata = fs.readFileSync("profile_list.json");
let users = JSON.parse(rawdata);

// console.log(users);

const articles = users.filter((user) => user.articles.length > 0);
console.log("Answer of Exercise Number 2 \n", articles);
