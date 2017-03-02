var cheerio = require("cheerio");
var request = require("request");

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

            if (count === 20){


            }
        });
        console.log(results);
    });
}

$('#startScrape').click(getPost('https://www.buzzfeed.com/'));

function postPosts(){

};