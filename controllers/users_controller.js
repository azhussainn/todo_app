const db = require('../config/mongoose');
const Note = require('../models/newNote');

module.exports.profile = function(req, res){
    Note.create(req.body, function(err, newNote){
        if(err){
            console.log('error in creating a contact');
            return;
        }
        console.log("*********", newNote);
        res.redirect('back');
    })
};