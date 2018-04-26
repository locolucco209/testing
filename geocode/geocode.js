var request = require('request');
console.log(process.argv)
// set .argv to variable
let movie_title = process.argv[2]

request("http://www.omdbapi.com/?t=" + movie_title + "&y=&plot=short&apikey=trilogy&r=json", function (error, response, body){
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log('body:', JSON.parse(body).Released); // Print the HTML for the Google homepage.

});
