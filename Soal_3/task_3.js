const invents = require("./inventory_list.json");

const items = invents.filter((invent) => invent.type === "furniture");

console.log("Answer of Task 3\n", items);
