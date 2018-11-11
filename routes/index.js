var express = require("express");
var router = express.Router();

var nodemailer = require("nodemailer");
var config = require("../config");
var transporter = nodemailer.createTransport(config.mailer);

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
		//validating here
		req.checkBody("name", "Empty name").notEmpty();
		req.checkBody("email", "Empty email").isEmail();
		req.checkBody("message", "Empty message").notEmpty();
		let errors = req.validationErrors();

		if (errors) {
			res.render("contact", {
				title: "Code4Share - a test plateform for sharing code.",
				name: req.body.name,
				email: req.body.email,
				message: req.body.message,
				errorMessages: errors
			});
		} else {
			var mailOptions = {
				from: "Code4Share <noreply@code4share.com",
				to: "braynbrigoli24@gmail.com",
				subject: `You got a new message from visitor ${req.body.email}`,
				text: req.body.message
			};

			transporter.sendMail(mailOptions, function(error, info) {
				if (error) {
					return console.log(error);
				}
				{
					res.render("thank", {
						title: "Code4Share - a test plateform for sharing code."
					});
				}
			});
		}
		console.log(errors);
	});
module.exports = router;
