
var express = require("express");
var app = express();

// Require routes
var index = require("../routes/index");

// Add route handlers
app.get("/", index.pingPage);
app.get("/users", index.usersPage);

module.exports = app;