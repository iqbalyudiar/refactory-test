const invents = require("./inventory_list.json");

const items = invents.filter(
  (invent) =>
    date_conversion(invent.purchased_at).split(" ")[1] === "Jan" &&
    date_conversion(invent.purchased_at).split(" ")[2] === "2020"
);

console.log("Answer of Task 4\n", items);

function date_conversion(time) {
  var date = new Date(time).toString();
  return date;
}
