const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const books = require('./books');

const app = express();

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/',books);

app.use((req,res,next)=>{
    next(createError(404));
});

app.use((err,req,res,next)=>{
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.send(`$(\{err.message} ${err.status}<br>${err.stack}`);
})

module.exports = app;