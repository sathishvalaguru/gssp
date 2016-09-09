process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./server/config/mongoose'),
  express = require('./server/config/express'),
  cloudant = require('./server/config/cloudant');
//passport = require('./config/passport');

var db = mongoose(),
  cdb = cloudant(),
  app = express();
//var passport = passport();

app.listen(3000);
module.exports = app;
console.log('Server running at http://localhost:3000/');
