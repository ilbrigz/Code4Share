var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", {
		title: "Code4Share - a test plateform for sharing code."
	});
});

router.get("/about", function(req, res, next) {
	res.render("about", {
		body: "Code4Share - a plateform for sharing code.",
		title: "Code4Share-title"
	});
});
/* GET contact page. */
router
	.route("/contact")
	.get(function(req, res, next) {
		res.render("contact", {});
	})
	.post((req, res, next) => {
		res.render("thank", {});
	});

module.exports = router;
