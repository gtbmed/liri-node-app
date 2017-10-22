# liri-node-app
Language Interpretation and Recognition Interface

In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.


## How to run this app

1.  If you don't have node.js installed.  Get it here:
[Getting Started with NodeJS](https://nodejs.org/en/)

2.  Open up the directory containing the app and file liri.js in your favorite console

3. Enter node liri.js followed by one of the following commands:
  * my-tweets
  * spotify-this-song "insert song name here"
  * movie-this "insert movie name here"
  * do-what-it-says

## What each command does

* _my-tweets_: logs the most recent 20 tweets from a twitter account I made for this assignment

* _spotify-this-song_: Uses the Spotify API to search for songs of a similar title and logs the artist names, song name, preview url, and album name.

* _move-this_: Uses the OMDB API to search the movie name and logs the title, year the movie came out, the IMDB rating, the Rotten Tomatoes rating, the country the movie was produced in, the movie language, the plot synopsis, and the actors in the movie.

* _do-what-it-says_: This command reads the text file "random.txt" and searches for the previously mentioned commands to run.  The commands in the .txt file must be commma separated for the app to recognize them.
