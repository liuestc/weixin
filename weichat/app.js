var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var config=require('./config/config.json')
var utils=require('./common/utils.js')

var signTicket=require('./common/signTicket.js')

var index = require('./routes/index');
var users = require('./routes/users');


const request = require("request")

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



app.use("/getTicket",function(req,res,next){
    console.log("query参数",req.query.url)
   
/*分割线拿到token*/
    let appid = "wxb3822d4013efc31f";
    let appsecret = "9ca3b2d7273db523fa106144b7bc6529";
    let tokenUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + appid + "&secret=" + appsecret;
    request(tokenUrl,(err,response,body)=>{
        let json = JSON.parse(body);
        console.log(json.access_token);
        let jsapiUrl='https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+json.access_token+'&type=jsapi'
        request(jsapiUrl,(err,response,body)=>{
            let jsapiResult = JSON.parse(body);
            console.log(jsapiResult.ticket)
            // res.send(jsapiResult)
            var test=signTicket(jsapiResult.ticket, req.query.url);
            res.set({
                "Access-Control-Allow-Origin": "*"
                ,"Access-Control-Allow-Methods": "POST,GET"
                ,"Access-Control-Allow-Credentials": "true"
            });
            res.json(test)
            
        })
    })
})


// app.use("/",function(req,res,next){
//     res.sendfile("./public/index2.html");
//     next()
// })
app.use(utils.sign(config))


/*-菜单--*/
app.use("/", (req, res, next) => {
    //1 获取access_token

    let appid = "wxb3822d4013efc31f";
    let appsecret = "9ca3b2d7273db523fa106144b7bc6529";

    let tokenUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + appid + "&secret=" + appsecret;

    request(tokenUrl, (err, response, body) => {

        //body是字符串
        let json = JSON.parse(body);

        console.log("我请求token成功")
        console.log("token!!!",json.access_token);


        let data = {
            "button": [
                {
                    "type": "click",
                    "name": "今日歌曲",
                    "key": "V1001_TODAY_MUSIC"
                },
                {
                    "type": "scancode_push",
                    "name": "扫码",
                    "key": "rselfmenu_0_1"
                },
                {
                    "name": "菜单",
                    "sub_button": [
                        {
                            "type": "view",
                            "name": "搜索111",
                            "url": "http://7e55b0d2.ngrok.io"
                        },
                        {
                            "type": "view",
                            "name": "视频正确",
                            "url": "http://7e55b0d2.ngrok.io/html/questionnaire_result.html"
                        },

                        {
                            "type": "click",
                            "name": "赞一下我们",
                            "key": "V1001_GOOD"
                        }]
                }
            ]
        }

        request({
            method: "post",
            url: "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=" + json.access_token,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }, (err, response, body) => {
            if(err){
            	console.log("我不会发送菜单")
                res.send(err)
            }else{
            	console.log("我是那个菜单",body)
                res.send(body)
            }
        })

    })
})




/*分割线*/
app.use('/', index);
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


// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');

// var config=require('./config/config.json')
// var utils=require('./common/utils.js')

// var index = require('./routes/index');
// var users = require('./routes/users');


// const request = require("request")

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));



// app.use(utils.sign(config))

// /*---*/
// app.use("/", (req, res, next) => {
//     //1 获取access_token
//     let appid = "wxb3822d4013efc31f";
//     let appsecret = "9ca3b2d7273db523fa106144b7bc6529";

//     let tokenUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + appid + "&secret=" + appsecret;

//     request(tokenUrl, (err, response, body) => {

//         //body是字符串
//         let json = JSON.parse(body);

//         console.log("我请求token成功")
//         console.log("token!!!",json.access_token);


//         let data = {
//             "button": [
//                 {
//                     "type": "click",
//                     "name": "今日歌曲",
//                     "key": "V1001_TODAY_MUSIC"
//                 },
//                 {
//                     "type": "scancode_push",
//                     "name": "扫码",
//                     "key": "rselfmenu_0_1"
//                 },
//                 {
//                     "name": "菜单",
//                     "sub_button": [
//                         {
//                             "type": "view",
//                             "name": "搜索",
//                             "url": "http://www.soso.com/"
//                         },
//                         {
//                             "type": "view",
//                             "name": "视频222",
//                             "url": "http://v.qq.com/"
//                         },
//                         {
//                             "type": "click",
//                             "name": "赞一下我们",
//                             "key": "V1001_GOOD"
//                         }]
//                 }
//             ]
//         }

//         request({
//             method: "post",
//             url: "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=" + json.access_token,
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }, (err, response, body) => {
//             if(err){
//                 console.log("我不会发送菜单")
//                 res.send(err)
//             }else{
//                 console.log("我是那个菜单",body)
//                 res.send(body)
//             }
//         })

//     })
// })



// /*分割线*/
// app.use('/', index);
// app.use('/users', users);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });



// module.exports = app;
