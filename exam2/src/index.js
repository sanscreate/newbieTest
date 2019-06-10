var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'DB_USER',
  password : 'YOUR_PASSWORD',
  port     : 'YOUR_MYSQL_PORT',
  database : 'test_db'
});

connection.connect();

connection.query('SELECT * from FLOEV', function(err, rows, fields) {
  if (!err)
    console.log('The Answer is: ', rows);
  else
    console.log('Error while performing Query.', err);
});

connection.end();