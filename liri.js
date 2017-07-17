var twitterKeys = require('./keys.js');
var twitterPackage = require('twitter');
var spotifyAPI = require('node-spotify-api');
var spotifyKeys = require('./keys.js');
var request = require('request');
var fs = require('file-system');

// Input Arguments
var userCommand = process.argv[2];
var userInput = process.argv[3];


//Switch Case

switch (userInput) {
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

function myTweets () {
        request("https://api.twitter.com/1.1/statuses/user_timeline.json?@boot_hw=twitterapi&count=20", function(error, tweets, response) {
            console.log(tweets);
            console.log("this works");
        })
    }

// // Movie - This
// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=40e9cece", function(error, response, body) {

//   // If there were no errors and the response code was 200 (i.e. the request was successful)...
//   if (!error && response.statusCode === 200) {

//     // Then we print out the imdbRating
//     console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//   }
// });