var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
  // `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  // `message` varchar(255),
  // `username` varchar(255),
  // `roomname` varchar(255),
  // `createdAt` varchar(255),
  // PRIMARY KEY (`id`)

var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

dbConnection.connect();

var insertData = function(data, callback) {
  dbConnection.query('INSERT INTO messages SET ?', data, callback)
};

var selectData = function(ascending, limit, callback) {
  var order =' ';
  if(!ascending){order = ' DESC '}
  dbConnection.query('SELECT * FROM messages ORDER BY createdAt'+order+'LIMIT '+limit, data, callback)
};

module.exports.insertData = insertData;
module.exports.selectData = selectData;
/*
var data = {message: "bye", username: "I", roomname: "Heaven"};

insertData(data, function(err, result){
  console.log(err);
  console.log(result);

  selectData(true, 2, function(err, result){
    console.log(err);
    console.log(result);
  })
});*/
