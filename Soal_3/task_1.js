const invents = require("./inventory_list.json");

const items = invents.filter(
  (invent) => invent.placement.name === "Meeting Room"
);

console.log("Answer of Task 1\n", items);
