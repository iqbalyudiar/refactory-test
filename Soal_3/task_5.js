const invents = require("./inventory_list.json");

const items = invents.filter(
  (invent) => invent.tags.filter((tag) => tag === "brown").length > 0
);

console.log("Answer of Task 5\n", items);
