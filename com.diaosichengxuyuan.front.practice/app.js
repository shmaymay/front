var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//新增ejs引擎
var ejs = require('ejs');

//路由
var indexRouter = require('./routes/indexRouter');
var usersRouter = require('./routes/usersRouter');
var testRouter = require('./routes/testRouter');
var _12306Router = require('./routes/12306Router');
var _10086Router = require('./routes/10086Router');

var app = express();

// view engine setup
app.engine('.htm', ejs.__express);
app.set('view engine', 'htm');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//路径和路由映射
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);
app.use('/12306', _12306Router);
app.use('/10086', _10086Router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
