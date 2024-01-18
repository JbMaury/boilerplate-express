let express = require("express");
let app = express();
app.use("/public", express.static(__dirname + "/public"));
absolutePath = __dirname + "/views/index.html";
console.log("Hello World");

app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

module.exports = app;
