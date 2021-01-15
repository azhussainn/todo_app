const db = require('../config/mongoose');
const Note = require('../models/newNote');

module.exports.home = function(req, res){
    Note.find({}, function(err, notes){
        if(err){
            console.log("error in fetching notes from db");
            return};
        return res.render('home.ejs',{title : 'Todo App', notes_list : notes })
    })
}