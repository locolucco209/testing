var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'top_songsdb'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var fs = require("fs");
fs.readFile("Top1000Songs.csv", "utf8", function(error, data) {
   if (error) {
     return console.log(error);
   }
   console.log(data);
   var dataArr = data.split("\n");
   console.log(dataArr);

 });

 
