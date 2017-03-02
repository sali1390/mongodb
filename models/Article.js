//Dependencies
var mongoose = require('mongoose');

//Create a Schema class
var Schema = mongoose.Schema;

//Instantiate a new Article schema class
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    teaser: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    timePosted: {
        type: String,
        required: true
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;