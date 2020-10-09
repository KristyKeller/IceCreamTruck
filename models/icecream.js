// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var icecream = {
    all: function (cb) {
		orm.all("icecream", function (res) {
			console.log("here");
			cb(res);
		});
    },
    
	create: function (cols, vals, cb) {
        console.log("mode ice cream created"),
        orm.create("icecream", cols, vals, function (res) {
            cb(res);
            
		});
    },
     
   update: function (objColVals, condition, cb) {
		orm.update("icecream", objColVals, condition, function (res) {
			cb(res);
		});
    },
    
	delete: function (condition, cb) {
		orm.delete("icecream", condition, function (res) {
			cb(res);
		});
	}
};

// Export the database functions for the controller (icecream_controller.js).
module.exports = icecream;