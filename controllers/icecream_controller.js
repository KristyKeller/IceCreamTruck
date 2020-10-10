var express = require("express");
var icecream = require("../models/icecream.js");
var router = express.Router();

// Create all routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  icecream.selectAll("icecream", function (data) {
    var icecreamDataObject = {
      icecream: data
    };
    console.log(icecreamDataObject);
    res.render("index", icecreamDataObject);
  });
});

router.post("/api/icecream", function (req, res) {
  icecream.insertOne("icecream_name", [req.body.icecream], function (err, result) {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
});

router.put("/api/icecream/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  icecream.updateOne({devoured: req.body.devoured }, 
    condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/icecream/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  icecream.deleteOne(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use
module.exports = router;
