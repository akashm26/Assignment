var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var validation = require('./routes/Validation');
var Products = require('./routes/product');
var Signin = require('./routes/newSignin');
var checkuserRouter = require('./routes/checkuser');
var logoutRouter = require('./routes/logout');
var InsertRouter = require('./routes/insertpro');
var uploadimg = require('./routes/uploadimg');



var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: 'my secret code',
  resave: false,
  
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/validation/info' ,validation);
app.use('/product/info' ,Products);
app.use('/Signin/info' , Signin)
app.use('/check/login', checkuserRouter);
app.use('/logout/info' , logoutRouter)
app.use('/insert/info' , InsertRouter)
app.use('/upload/img', uploadimg );





app.listen(8081,()=>{
  console.log("server is lisening at 8081")
})

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
