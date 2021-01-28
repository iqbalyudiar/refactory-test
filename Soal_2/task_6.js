let users = require("./profile_list.json");

const articleFilter = users
  .filter(
    (user) =>
      user.articles.filter((article) =>
        article.title.toLowerCase().includes("tips")
      ).length > 0
  )
  .map((user) => user.articles.map((article) => `${article.title}`));

// const articleName = articleFilter.filter((article) => article.articles);

console.log("Answer of Exercise Number 6 \n", articleFilter);
