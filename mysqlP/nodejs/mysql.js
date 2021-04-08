var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : process.env.DB_PASSWORD,
  database : 'react-miraclemorning'
});
 
connection.connect();
 
connection.query('SELECT * from posts', function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});
 
connection.end();