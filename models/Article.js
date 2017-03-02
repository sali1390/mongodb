//Dependencies
var mongoose = require('mongoose');

//Create a Schema class
var Schema = mongoose.Schema;

//Instantiate a new Article schema class
var ArticleSchema = new Schema({
    title: {
        type: string,
        required: true
    },
    teaser: {
        type: string,
        required: true
    },
    image: {
        type: string,
        required: true
    },
    link: {
        type: string,
        required: true
    },
    timePosted: {
        type: string,
        required: true
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;