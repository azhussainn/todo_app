const mongoose = require('mongoose');

//Building Schema for contacts
const toDoSchema = new mongoose.Schema({
    description : {
        type : String, 
        required : true
    },
    category : {
        type : String,
        required : true
    },
    date : {
        type: Date,
        required : true
    }
});

//Naming the database
const ToDo = mongoose.model('ToDo', toDoSchema);

//This file can now export Contact db
module.exports = ToDo;
