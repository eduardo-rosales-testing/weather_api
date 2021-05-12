const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.status(200).json({
    msg: "Home Page"
  });
});

app.listen(2000, () => {
  console.log("server is running...");
});