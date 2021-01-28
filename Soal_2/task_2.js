let users = require("./profile_list.json");

const articles = users.filter((user) => user.articles.length > 0);
console.log("Answer of Exercise Number 2 \n", articles);
