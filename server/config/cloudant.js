var config = require('./config'),
		Cloudant = require('cloudant');

module.exports = function () {
	var cloudant = Cloudant("https://sathishvalaguru:sa26512371@sathishvalaguru.cloudant.com");
	//var cdb = cloudant.db.use("gssp");
	return cloudant;
};
