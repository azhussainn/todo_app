const db = require('../config/mongoose');
const Note = require('../models/newNote');

module.exports.addNote = function(req, res){
    Note.create(req.body, function(err, newNote){
        if(err){
            console.log('error in creating a contact');
            return};
        return res.redirect('back')});
};

module.exports.deleteNote = function(req, res){

        //find the note in the database using id and delete
        Note.findByIdAndDelete(req.body.id, { lean: true }, function(err){
            if(err){
                console.log('error in deleting an object in database');
                return;
            }
            return res.redirect('back');
        })

};

module.exports.editNote = function(req, res){
    console.log(req.body);
    return res.render("../views/editNotes.ejs");
};