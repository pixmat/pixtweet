var twitter = require('ntwitter'),
  // five = require("johnny-five"),
  // board = new five.Board(),
  config = require('./config.json'),
  twit;

// Starting Twitter Configuration
twit = new twitter({
  consumer_key: config["consumer_key"],
  consumer_secret: config["consumer_secret"],
  access_token_key: config["access_token_key"],
  access_token_secret: config["access_token_secret"]
});

// Let's do some magic
twit
  .verifyCredentials(function (err, data) {
    console.log(data);
  })
  .stream('statuses/mentions_timeline', function(stream) {
    stream.on('error', function(error) {
      console.log('Error ...');
    });
    stream.on('data', function (data) {
      console.log(data);
    });
  });