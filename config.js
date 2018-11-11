"use strict";

const keys = require("./configkeys/email");
module.exports = {
	mailer: {
		service: "Gmail",
		auth: {
			user: keys.email,
			pass: keys.password
		}
	}
};
