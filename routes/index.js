var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", {
		title: "Code4Share - a plateform for sharing code."
	});
});

router.get("/about", function(req, res, next) {
	res.render("about", {
		body: "Code4Share - a plateform for sharing code.",
		title: "Code4Share-title"
	});
});
router.get("/contact", function(req, res, next) {
	res.render("contact", {});
});

module.exports = router;
