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

// var dbConnection = mysql.createConnection({
//   user: "root",
//   password: "",
//   database: "chat"
// });

// dbConnection.connect();

// var insertData = function(data, callback) {
//   dbConnection.query('INSERT INTO messages SET ?', data, callback)
// };

// var selectData = function(ascending, limit, callback) {
//   var order =' ';
//   if(!ascending){order = ' DESC '}
//   var queryString = 'SELECT * FROM messages ORDER BY createdAt'+order+'LIMIT '+limit;
//   dbConnection.query(queryString, callback);
// };

// module.exports.selectData = selectData;

var Sequelize = require('sequelize');
var sequelize = new Sequelize('chat', 'root', "");

var User = sequelize.define('User', {
  username: Sequelize.STRING,
});

var Message = sequelize.define('MessageTable', {
  message: Sequelize.STRING,
  roomname: Sequelize.STRING

});

//User.hasMany(Message, {as: 'Texts'});;;
Message.belongsTo(User);

User.sync().success(function() {});
Message.sync().success(function() {});

var insertData = function(data, callback) {
  var newMessage = Message.build(data);
  var user = User.build({username:'bobert'});
  user.save().success( function() {
    newMessage.save().success(function() {
      newMessage.setUser(user);
    });
  });
};

var selectData = function(where, order, callback) {
  Message.findAll().success(function(data) {
    callback(data);
  });
};

module.exports.insertData = insertData;
module.exports.selectData = selectData;
