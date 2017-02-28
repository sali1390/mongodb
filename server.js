// Dependencies
var express = require("express");
var handlebars = requie("express-handlebars")
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cheerio = require("cheerio)
var request = require("request")

// Bring in our Models: Article and User
var Note = require("./models/Article.js");
var User = require("./models/User.js");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
var app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/newswebscraper");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});

// Listen on Port 3000
app.listen(3000, function() {
    console.log("App running on port 3000!");
});
