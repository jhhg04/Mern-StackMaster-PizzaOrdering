const mongoose = require('mongoose');

// var mongoURLLocal = 'mongodb://localhost/testPizza';
// mongoose.connect(mongoURLLocal, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// });

var mongoURL = 'mongodb+srv://user:pass@cluster0.rq8mm.mongodb.net/mern-pizza';
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection;

db.on('connected', () => {
  console.log('MongoDB Connection Seccessfully');
});

db.on('error', () => {
  console.log('MongoDB Connection Failed');
});

module.exports = mongoose;
