console.log("=>");
const express = require('express'),
 cors = require('cors'),
app = express(),
bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
port = process.env.PORT || 3005;
app.use(cors());

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

console.log("=>1");
/*
const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
  user: 'root',
  password: 'Picasso01',
  port     : '3306',
  database:'ot'
});
console.log("=>2");
// connect to database
mc.connect(function(err){
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id 2_>?' );
   

});
*/


app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes.js'); //importing route
routes(app); //register the route