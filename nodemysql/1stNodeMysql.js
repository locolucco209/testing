var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'animals_db'
});

connection.connect((error) => {
if (error) throw error
console.log(`Connected as ${connection.threadID}`);
connection.query("SELECT * from people", (error, response) => {
  if (error) throw error
  console.log(response)
})
connection.end();
})
