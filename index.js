const express = require('express');
const app = express();
const port = 8000;
const multer = require('multer');
const upload = multer();

// for parsing application/json
app.use(express.json()); 

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 

// for parsing multipart/form-data
app.use(upload.array());

//use express router
app.use('/', require('./routes/index'));

//setting the view engine
app.set('view engine','ejs');
app.set('views', './views')

// setting the static files
app.use(express.static('assets'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`server is running on port : ${port}`);
})

