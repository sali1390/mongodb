// Dependencies
var express = require("express");
var handlebars = require("express-handlebars");
var mongo = require("mongo");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request");
var logger = ("morgan");

// Bring in our Models: Article and User
//var Note = require("./models/Article.js");
//var User = require("./models/User.js");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
var app = express();

// Use morgan and body parser with our app
//app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Make public a static dir
app.use(express.static("public"));

// Local database configuration with mongoose
mongoose.connect("mongodb://localhost/newswebscraper");

//Remote database configuration
//mongoose.connect("mongodb://heroku_l9xxcpgn:5mm8ovatqhsjltn02nbu38smq6@ds151028.mlab.com:51028/heroku_l9xxcpgn");

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

var count;
var results = [];

function getPost(url){
    count=0;
    request(url, function(err, res, body){
        //console.log(body)

        var $ = cheerio.load(body);

        $('div.js-feed-item').each(function(index, element){
            var title = $(this).children('div.xs-p1').children('div.xs-px05').children('a.link-gray').find('h2').text();

            var teaser = $(this).children('div.xs-p1').children('div.xs-px05').children('a.link-gray').find('p').text();

            //var image = $(this).children().find('a').attr('style');

            var link = $(this).children().find('a').attr('href');

            //var timePosted = ;

            if (title === '' && teaser === ''){

            } else (
                results.push({
                    title: title,
                    teaser: teaser,
                    //image: image
                    link: 'https://buzzfeed.com' + link
                    //timePOsted: timePosted
                })
            );

            count++;
            console.log(count);

            if (count === 20){
                console.log(results);
                return(results)
            }
        });
    });
}

getPost('https://www.buzzfeed.com/');
