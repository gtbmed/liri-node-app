var tKeys = require('./keys.js');
var twitterPackage = require('twitter');
var spotifyAPI = require('node-spotify-api');
var spotifyKeys = require('./keys.js');
var request = require('request');
var fs = require('file-system');

// Input Arguments
var userCommand = process.argv[2];
var userInput = process.argv[3];


//Switch Case

switch (userCommand) {
        case 'my-tweets':
            myTweets();
        break;

        case 'spotify-this-song':

        break;

        case 'movie-this':

        break;

        case 'do-what-it-says': 

        break;

        default:
        

};

function myTweets() {
    var client = new twitterPackage ({
        consumer_key: tKeys.twitterKeys.consumer_key,
        consumer_secret: tKeys.twitterKeys.consumer_secret,
        access_token_key: tKeys.twitterKeys.access_token_key,
        access_token_secret: tKeys.twitterKeys.access_token_secret
    });

    //Create our parameters for the Twitter API
    var parameters = {screen_name: 'boot_hw', count: '20'};

    client.get('statuses/user_timeline', parameters, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
        } else {
            console.log(error);
        }
    });
}
// // Movie - This
// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=40e9cece", function(error, response, body) {

//   // If there were no errors and the response code was 200 (i.e. the request was successful)...
//   if (!error && response.statusCode === 200) {

//     // Then we print out the imdbRating
//     console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//   }
// });