const express = require("express");

const app = express();

/*
app.use((req, res, next) => {
  console.log("First middleware");
  next();
});
app.use((req, res, next) => {
  console.log("Second middleware");
  next();
});
app.use((req, res, next) => {
  console.log("Response from Express");
  res.send(`<h1>Welcome to Express!`);
});
*/
app.get("/users", (req, res, next) => {
  res.send(`<html>
  <title>Users</title>
  <body>
  <p>Users of this app</p>
  <ul><li>Aniebiet Afia</li><li>John Bridge</li><li>Mary Sanders</li></ul>
  </body>
  </html>`);
});

app.get("/", (req, res, next) => {
  res.send(`<h1>Welcome to Express!</h1>`);
});

app.listen(3000);
