var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 라우터
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 디비 관련
const Sequelize = require('sequelize');
displayRoutes = require('express-routemap');

// 익스프레스 설정
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

app.listen(3001, () => {
	console.log('Web server started at port 3000!');
	//HERE is the fun part;
	displayRoutes(app);

	// or use like this;
	displayRoutes(app, 'route-table.log');
});

module.exports = app;
