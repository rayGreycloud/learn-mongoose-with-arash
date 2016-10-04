var express = require('express');
var mongoose = require('mongoose');

var app = express();

app.get('/', function(req, res, next) {
  res.json("Home Page!!");
});

app.get('/:name', function(req, res, next) {
    res.json("Hello " + req.params.name);
});

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server running on port 3000");
  }
});
