var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CustomerSchema = new Schema({
	firstName: {
		type: String,
		default: '',
		trim: true
	},
	lastName: {
		type: String,
		default: '',
		trim: true
	},
	email: {
		type: String,
		default: '',
		trim: true
	},
	phone: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
});

mongoose.model('Customer', CustomerSchema);
/*
{
	"firstName": "Sathish",
	"lastName": "Valaguru",
	"email": "sathish@test.com",
	"phone": 9840214620,
	"created": "2016-08-31T17:09:20.679Z"
}
*/