let users = require("./profile_list.json");

const dobFilter = users.filter(
  (user) => user.profile.birthday.split("-")[0] === "1986"
);
console.log("Answer of Exercise Number 5 \n", dobFilter);
