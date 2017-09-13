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
	// res.send("test")
	request('https://cd.lianjia.com/chengjiao/',function(err,response,body){
			// console.log(body)
			var $ = cheerio.load(body);
			var arr=[]
			// console.log($(".listContent>li"))
			$(".listContent>li").each(function(i,item){
				let title=$(item).find(".title").text()
				let price=$(item).find(".totalPrice").find(".number").text()
				let unitPrice=$(item).find(".unitPrice").find(".number").text()
				let dealCycleTxt=$(item).find(".dealCycleTxt").find("span").eq(1).text()

				// console.log(dealCycleTxt)

				arr.push({
					title,
					price,
					unitPrice,
					dealCycleTxt
				})

		})
			res.send(arr)
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
