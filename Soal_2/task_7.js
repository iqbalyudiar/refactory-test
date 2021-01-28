let users = require("./profile_list.json");

const articleFilter = users
  .filter(
    (user) =>
      user.articles.filter(
        (article) =>
          article.published_at.split("-")[0] === "2019" &&
          article.published_at.split("-")[1] < 8
      ).length > 0
  )
  .map((user) =>
    user.articles.map(
      (article) =>
        `title: ${article.title}, published at: ${article.published_at}`
    )
  );

console.log("Answer of Exercise Number 7 \n", articleFilter);
