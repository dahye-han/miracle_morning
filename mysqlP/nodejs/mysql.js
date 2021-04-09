const dotenv = require('dotenv');
var mysql      = require('mysql');

dotenv.config();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : process.env.DB_PASSWORD,
  database : 'react-miraclemorning',
  port : '3307'
});
 
connection.connect();
 
connection.query('SELECT * from posts', function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});
 
connection.end();