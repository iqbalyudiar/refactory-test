let users = require("./profile_list.json");

const checkname = users.filter((user) =>
  user.profile.full_name.toLowerCase().includes("annisa")
);
console.log("Answer of Exercise Number 3 \n", checkname);
