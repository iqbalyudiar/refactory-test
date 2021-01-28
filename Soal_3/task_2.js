const invents = require("./inventory_list.json");

const items = invents.filter((invent) => invent.type === "electronic");

console.log("Answer of Task 2\n", items);
