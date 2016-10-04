var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://root:abc123@ds049486.mlab.com:49486/mongoose-arash', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected");
  }
});

var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

var User = mongoose.model('User', UserSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res, next) {
  res.json("Home Page!!");
});

app.post('/create-user', function(req, res, next) {
  var user = new User();
  user.name = req.body.name;
  user.age = req.body.age;
  user.save(function(err) {
    if (err) console.log(err);
    res.json(user);
  });
});

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server running on port 3000");
  }
});
