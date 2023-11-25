const express = require("express");
const app = express();
const mydb = require("./config/db");
const rout = require("./routes/router");
app.use(rout);

app.listen(2000, () => {
  console.log("server is running");
});
