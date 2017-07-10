var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var bodyParser = require('body-parser');
var session = require('express-session')

//  将session存文件
var FileStore = require('session-file-store')(session);

var index = require('./routes/index');
var users = require('./routes/users');


var saveData=require('./mongo/connect.js')


var userLogin = require('./user').items;


var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('views', __dirname + '/views');

app.set('view engine', 'jade');




//  方法
var findUser = function(name, password){
    return userLogin.find(function(item){
        return item.name === name && item.password === password;
    });
};





// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
	name: "ljd",
	store: new FileStore(),
	secret:'I am a secret oooooo',  //用来签名
	saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
	resave: false,  // 是否每次都重新保存会话，建议false
	cookie: { maxAge: 60 * 1000 }

}))

app.use('/save',saveData)

app.use('/cookie',function(req,res){
	if(req.cookies.isVisited){
		console.log(req.cookies)
		res.send("欢迎再次访问")
	}
	else{
		res.cookie("isVisited",1,{
			maxAge:60*1000
		})
		res.send("欢迎第一次访问")
	}
})



app.use('/session',function(req,res){
	if(req.session.isVisit) {
    req.session.isVisit++;
    res.send('<p>第 ' + req.session.isVisit + '次来到此页面</p>');
  } else {
    req.session.isVisit = 1;
    res.send('欢迎第一次来这里');
  }
})




app.post('/login', function(req, res, next){
    
    var sess = req.session;
    var user = findUser(req.body.name, req.body.password);

    if(user){
        req.session.regenerate(function(err) {
            if(err){
                return res.json({ret_code: 2, ret_msg: '登录失败'});                
            }
            
            req.session.loginUser = user.name; //session 中写入loginUser
            res.json({ret_code: 0, ret_msg: '登录成功'});                           
        });
    }else{
        res.json({ret_code: 1, ret_msg: '账号或密码错误'});
    }   
});

// Session.regenerate(callback)

// To regenerate the session simply invoke the method. Once complete, a new SID and Session instance will be initialized at req.session and the callback will be invoked.

// req.session.regenerate(function(err) {
//   // will have a new session here
// })


// 退出登录
app.get('/logout', function(req, res, next){
    // 备注：这里用的 session-file-store 在destroy 方法里，并没有销毁cookie
    // 所以客户端的 cookie 还是存在，导致的问题 --> 退出登陆后，服务端检测到cookie
    // 然后去查找对应的 session 文件，报错
    // session-file-store 本身的bug    

    req.session.destroy(function(err) {
        if(err){
            res.json({ret_code: 2, ret_msg: '退出登录失败'});
            return;
        }
        
        // req.session.loginUser = null;
        res.clearCookie(identityKey);
        res.redirect('/');
    });
});


app.get('/login', function(req, res, next){
    var sess = req.session;
    var loginUser = sess.loginUser;
    var isLogined = !!loginUser;

    // res.render('login')
    res.render('login', {
        isLogined: isLogined,
        name: loginUser || ''
    });
});


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
