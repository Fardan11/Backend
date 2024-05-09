const fs = require("fs");

// fs.writeFile("Message.text", "Hello from node!", (err) => {
//   if (err) throw err;
//   console.log("The file has Been saved");
// });

fs.readFile("./Message.text", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
