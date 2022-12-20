var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var MongoClient = require('mongodb').MongoClient;

var webRouter = require('./routes/web');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
var exphbs = require('express-handlebars');
var handlebars = exphbs.create({ extname: '.hbs',});

app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const MONGODB_URI = 'mongodb+srv://DinStoreFest:3NzTWdILKT3E6bHk@cluster0.2nzwv.mongodb.net/?retryWrites=true&w=majority';

// Connect to the db
MongoClient.connect(MONGODB_URI, function (err, db) {

  if(err) throw err;

  //Write databse Insert/Update/Query code here..

});

app.use('/', webRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
