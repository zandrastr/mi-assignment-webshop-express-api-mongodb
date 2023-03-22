var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const mongoose = require("mongoose");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

function init() {

    const options = {useNewUrlParser: true, useUnifiedTopology: true};
    
    mongoose.connect("mongodb://localhost:27017/sandra-stridsman", options)

    .then(() => {
        console.log ("Connection to database OK!");
    })

    .catch((error) => {
        console.log(error + ". Connection to database failed.");
    })
}

init();

module.exports = app;
