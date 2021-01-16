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
    let  finalObj = {};
    let keys = Object.keys(req.body);
    for(key of keys){
        if(req.body[key] != ""){
            finalObj[key] = req.body[key];
        };
    };
    if(Object.keys(finalObj).length > 0 ){
        Note.findOneAndUpdate({_id: req.query.id}, finalObj ,function(err, data){
            if(err){
                console.log("Something wrong when updating data!");
                return;
            }
        });
        return res.redirect('/');
    }
    return res.send("<h1>No data send</h1>");
}

module.exports.goBack = function(req, res){
    return res.redirect('/');
}