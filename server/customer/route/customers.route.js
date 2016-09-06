var customers = require('../controller/customers.controller');

module.exports = function (app) {
	app.route('/api/customers')
		.post(customers.create)
		.get(customers.list);

	app.route('/api/customers/:customerId')
		.get(customers.read)
		.put(customers.update)
		.delete(customers.delete);
};