const path = require("path");
const express = require("express");
const addUserRoute = require("./routes/add-user");
const usersRoute = require("./routes/users");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(addUserRoute);
app.use(usersRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
