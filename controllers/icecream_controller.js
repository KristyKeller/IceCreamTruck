const express = require("express");

const router = express.Router();

// Import the model (icecream.js) to use its database functions
const icecream = require("../models/icecream.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    icecream.all(function(data) {
      var hbsObject = {
        icecream: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

router.post("/api/icecream/", function(req, res) {
  icecream.create([
    "icecream_name", "devoured"
  ], [
    req.body.icecream_name, false
  ], function(result) {
    // Send back the ID of the new icecream
    res.json({ id: result.insertId });
  });
});

router.put("/api/icecream/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  icecream.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/icecream/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  iceCream.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use
module.exports = router;
