var m = angular.module("simpleApp", []);

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost4/todo-api').then(() => console.log("connection successful")).catch((err) => console.error(err));