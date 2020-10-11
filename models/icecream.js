// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var icecream = {
    selectAll: function (table, cb) {
		orm.selectAll("icecream", function (res) {
			console.log("here");
			cb(res);
		});
    },
    
	insertOne: function(colName, valOfCol, cb) {
		orm.insertOne("icecream", colName, valOfCol, function(res) {
		  cb(res);
		});
	  },
	  updateOne: function(valOfCol, condition, cb) {
		orm.updateOne("icecream", valOfCol, condition, function(res) {
		  cb(res);
		});
	  }
};

// Export the database functions for the controller (icecream_controller.js).
module.exports = icecream;