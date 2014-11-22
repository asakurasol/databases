var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  // route /messages
  messages: {
    get: function (req, res) {
      models.messages.get(true, 20, function(err, data) {
        if (err) {
          console.log(err);
        }
        var results = {'results':data};
        console.log(results);
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      models.messages.post(req.body, function(err, data) {
        console.log(err);
        console.log(data);
        res.redirect(301, '../index.html');
      })
    } // a function which handles posting a message to the database
  },
  // route /users
  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

