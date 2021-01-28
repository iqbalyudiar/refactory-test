let users = require("./profile_list.json");

let userName = users.filter((user) => user.profile.phones.length < 1);

console.log("Answer of Exercise Number 1 \n", userName);
