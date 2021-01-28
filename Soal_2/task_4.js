let users = require("./profile_list.json");

const articleFilter = users
  .filter(
    (user) =>
      user.articles.filter(
        (article) => article.published_at.split("-")[0] === "2020"
      ).length > 0
  )
  .map((user) => user.articles.map((article) => article.title));

console.log("Answer of Exercise Number 4 \n", articleFilter);
