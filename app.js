
var mysql = require('mysql');
/**https://trinitytuts.com/node-js-express-connectivity-with-phpmyadmin/ */
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port     : '3306',
  database:'ot2'
});
con.connect(function(err){
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });
var express = require('express');
var app = express();

// Create a MySQL pool
const pool = mysql.createPool(con);

app.get('/', function (req, res) {
  //res.send('Hello World!-2');
  /*
    pool.query('SELECT id as ID FROM ot', (error, result) => {
        if (error) throw error;

        console.log('The solution is: ', result[0].ID);
    });
    */
    con.query("SELECT id as ID FROM ot", function (err, result) {
        if (err) throw err;

        console.log('The solution is: ', result[0].ID);
        res.send('The solution is: '+result[0].ID);
      });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
