//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/toDo_db', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

//testing the connection
const db = mongoose.connection;

//check if error in connection
db.on('error', console.error.bind(console, 'error connecting to db!'));

//if no error
db.once('open', function() {
  console.log("we're connected to the database !");
});