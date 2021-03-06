var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');

var errorController = require('./controllers/error.controller');
var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper("inc", function (value, number) {
  value = parseInt(value);
  if (typeof number === "string") {
    return value + 2;
  } else {
    return value + 1;
  }

});

hbs.registerHelper("get_index", function (element, list) {
  let result = "menas";
  list.questionarioList.forEach((el, i) => {
    if (el.titulo == element.titulo) {
      result = i;
    }
  })
  return result;
});


//logs
app.use(logger('dev'));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//static files 
app.use('/static', express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(errorController);

module.exports = app;
