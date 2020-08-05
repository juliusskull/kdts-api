'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'poolideas',
    password: 'Poolideas2020',
    port     : '3306',
    database:'k2'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;