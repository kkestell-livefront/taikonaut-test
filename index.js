const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/health", (req, res) => {
  res.send("ok");
});


if (require.main === module) {
  app.listen(3000);
}

module.exports = app;
