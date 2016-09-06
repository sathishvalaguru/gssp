var mongoose = require('mongoose'),
	Customer = mongoose.model('Customer');

exports.list = function (req, res) {
	Customer.find(function (err, customers) {
		if (err)
			res.send(err);

		res.json(customers);
	});
};

exports.create = function (req, res) {
	var customer = new Customer(req.body);
	customer.firstName = req.body.firstName;
	customer.save(function (err) {
		if (err)
			res.send(err);

		res.json(customer);
	});
};

exports.read = function (req, res) {
	Customer.findById(req.params.customerId, function (err, customer) {
		if (err)
			res.send(err);
		res.json(customer);
	});
};

exports.update = function (req, res) {
	Customer.findById(req.params.customerId, function (err, customer) {
		if (err)
			res.send(err);

		customer.firstName = req.body.firstName;
		customer.lastName = req.body.lastName; // update
		customer.email = req.body.email;
		customer.phone = req.body.phone;

		customer.save(function (err) {
			if (err)
				res.send(err);
			res.json(customer);
		});
	});
};

exports.delete = function (req, res) {
	Customer.remove({
		_id: req.params.customerId
	}, function (err, customer) {
		if (err)
			res.send(err);

		res.json({
			message: 'Successfully deleted'
		});
	});
};