const db = require('../config/mongoose');
const Note = require('../models/newNote');

module.exports.addNote = function(req, res){
    Note.create(req.body, function(err, newNote){
        if(err){
            console.log('error in creating a contact');
            return res.redirect('/');
        }
        return res.redirect('back')});
};

module.exports.deleteNote = function(req, res){
    if(typeof(req.body.id) == typeof('')){
        Note.findByIdAndDelete(req.body.id, { lean: true }, function(err){
            if(err){
                console.log('error in deleting an object in database');
                return res.redirect('/');
            }
            return res.redirect('/');
        })
    }
    else{
        for(let id of req.body.id){
            Note.findByIdAndDelete(id, { lean: true }, function(err){
                if(err){
                    console.log('error in deleting an object in database');
                    return res.redirect('/');
                }
            })
        }
        return res.redirect('/');
    }
}

module.exports.editNote = function(req, res){
    
    //Retrieve data from database
    Note.findById(req.query.id, function(err, data){
        if(err){
            console.log('error in fetching an object from the database');
            return res.redirect('/');
        }
        return res.render("../views/editNotes.ejs", {
            note : data
        });
    });
};

module.exports.updateNote = function(req, res){
    let k = Object.keys(req.body);
    let finalObject = {}
    for(let prop of k){
        if(req.body[prop] != ""){
            finalObject[prop] = req.body[prop];
        };
    }
    if(Object.keys(finalObject).length > 0){
        Note.findByIdAndUpdate(req.query.id, finalObject, {new: true}, function(err){
            if(err){
                console.log('error in updating an object in database');
                return res.redirect('/');;
            }
            return res.redirect('/');
        })
    }
    return res.redirect('/');
};