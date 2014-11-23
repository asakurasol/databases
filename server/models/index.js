var db = require('../db');
var mongoDB = require('../mongo-db');


// module.exports.insertData = insertData;
// module.exports.selectData = selectData;

module.exports = {
  messages: {
    get: function (ascending, limit, callback) {
      //db.selectData(ascending, limit, callback);
      mongoDB.selectData(ascending, limit, callback);
    }, // a function which produces all the messages
    post: function (data, callback) {
      mongoDB.insertData(data, callback);
      db.insertData(data, callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      //db.selectData(different inputs, callback);
    },
    post: function () {}
  }
};

