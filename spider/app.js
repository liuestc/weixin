var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var request=require("request")
var cheerio=require('cheerio')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', function(req,res,next){
	res.send("test")
	request('https://cd.lianjia.com/chengjiao/',function(err,response,body){
			// console.log(body)
			var $ = cheerio.load(body);
			var item=[]
			let jspn=$(".listContent>li").each(function(item,index){
				let title=$(item).find(".info").find(".title").text()
				console.log(title)
				let totalPrice=$(item).find(".info").find(".number")[0].text()
				item.push({
					title:title,
					totalPrice:totalPrice
				})
			})
			res.send(jspn)
	})
});
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
