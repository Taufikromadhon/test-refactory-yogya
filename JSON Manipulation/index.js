const data = require("./data.json");

console.log("1. Find Items in the Meeting Room.");
console.log(data.filter((data) => data.placement.name = "Meeting Room"));
console.log("############");
console.log("\n \n \n");
console.log("############");
console.log("2. Find all electronic devices.");
console.log(data.filter((data) => data.type = "electronic"));
console.log("############");
console.log("\n \n \n");
console.log("############");
console.log("3. Find all the furniture.");
console.log(data.filter((data) => data.type = "furniture"));
console.log("############");
console.log("\n \n \n");
console.log("############");
console.log("4. Find all items were purchased on 16 Januari 2020.");
var startDate = new Date("2020-01-16");
var endDate = new Date("2020-01-16");

var resultProductData = data.filter(function (a) {
  var hitDates = a.purchased_at || {};
  hitDates = Object.keys(hitDates);  
  hitDateMatchExists = hitDates.some(function (dateStr) {
    var date = new Date(dateStr);
    return date >= startDate && date <= endDate;
  });
  return hitDateMatchExists;
});
console.log(resultProductData);
console.log("############");
console.log("\n \n \n");
console.log("############");
console.log("5. Find all items with brown color.");
console.log(data.filter((data) => data.tags = "brown"));
