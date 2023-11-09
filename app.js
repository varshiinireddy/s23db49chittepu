var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);
var resourceRouter = require("./routes/resource");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var instrumentRouter = require('./routes/instrument');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');
var instrumentRouter = require('./controllers/instrument');
var instrument = require('./models/instrument');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/resource', resourceRouter);
app.use('/instrument', instrumentRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/instrument', instrumentRouter);
//app.use('/resource', resourceRouter);

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

// We can seed the collection if needed onserver start
async function recreateDB(){
  // Delete everything
    await instrument.deleteMany()
  let instance1 = new instrument({ name: "Instrument 1", product_type: "piano", price: 399.99 });
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });
  
  let instance2 = new instrument({name: "Instrument 2", product_type: "guitar", price: 949.99});
  instance2.save().then(doc=>{
  console.log("secound object saved")}
  ).catch(err=>{
  console.error(err)
  });

  let instance3 = new instrument({name: "Instrument 3", product_type: "harp", price: 699.99});
  instance3.save().then(doc=>{
  console.log("Thired object saved")}
  ).catch(err=>{
  console.error(err)
  });
  }
  let reseed = true;
  if (reseed) {recreateDB();}
  
  module.exports = app;