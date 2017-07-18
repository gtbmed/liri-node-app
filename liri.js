var tKeys = require('./keys.js');
var twitterPackage = require('twitter');
var spotifyAPI = require('node-spotify-api');
var sKeys = require('./keys.js');
var request = require('request');
var fs = require('file-system');

// Input Arguments
var userCommand = process.argv[2];
var userInput = process.argv[3];


//Switch Case to switch between functions based upon user input

switch (userCommand) {
        case 'my-tweets':
            myTweets();
        break;

        case 'spotify-this-song':
            var songName = userInput;            
            spotifyThis(songName);
        break;

        case 'movie-this':
            movieName = userInput;
            movieThis(movieName);
        break;

        case 'do-what-it-says': 

        break;

        default:
        

};

// Functions for the switch case
// 1. myTweets gets the most recent 20 tweets from my test Twitter account
function myTweets() {
    var client = new twitterPackage ({
        consumer_key: tKeys.twitterKeys.consumer_key,
        consumer_secret: tKeys.twitterKeys.consumer_secret,
        access_token_key: tKeys.twitterKeys.access_token_key,
        access_token_secret: tKeys.twitterKeys.access_token_secret
    });

    //Create our parameters for the Twitter API
    var parameters = {screen_name: 'boot_hw', count: '20'}; // Limits which user we get the tweets from and how many

    client.get('statuses/user_timeline', parameters, function(error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) { // Runs through the tweets array and logs each of the tweets at their specific time
                var tweet = tweets[i].text;
                var tweetTime = tweets[i].created_at;
                console.log('boot_hw tweeted "' + tweet + '" at ' + tweetTime);
            }
        } else {
            console.log("Error: "+ error);
        }
    });
}

//2. spotifyThis 
function spotifyThis(songName) {
    // Authenticate the connection to Spotify API
    var spotify = new spotifyAPI ({
        id: sKeys.spotifyKeys.client_id,
        secret: sKeys.spotifyKeys.client_secret
    });
    // If the user leaves the song name input blank, we'll spam them with Ace of Base
    if (songName == null) {
        songName = 'The Sign Ace of Base';
    }
    // Have a separate parameters variable for the songName in case we need to set it for the null case scenario
    var parameters = songName;
    // Create the search of the spotify and input our parameters
    spotify.search({ type: 'track', query: parameters }, function(error, data) {
        if (!error && songName != null) {
          for (var i = 0; i < data.tracks.items.length; i++) {
            var artists = data.tracks.items[i].artists[0].name; //This took forever to find in the API documentation
            var name = data.tracks.items[i].name;
            var preview = data.tracks.items[i].preview_url;
            var album = data.tracks.items[i].album.name;
            console.log('=================================');
            console.log('Artists: ' + artists);
            console.log('Song Name: '+ name);
            console.log('Preview URL: '+ preview);
            console.log('Album Name: '+ album);
            console.log('=================================');
          }  
        } else {
            console.log("Error: "+ error)
         }
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