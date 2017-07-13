var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var bodyParser = require('body-parser');
var session = require('express-session')


const request = require("request")

//  将session存文件
var FileStore = require('session-file-store')(session);

var index = require('./routes/index');
// var users = require('./routes/users');


// var saveData=require('./mongo/user.js')



var userLogin = require('./user').items;

/*微信部分*/

var insert=require('./model/insert.js')
var findName=require("./model/find.js")



/*微信部分结束*/

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

// app.use('/save',saveData)

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


app.get('/onLogin',function(req,res,next){
  console.log("onLogin 接口访问成功")
  // console.log("req code",req)
  let JSCODE=req.query.code
  let appid='wxbc2c393716c2732b'
  let secret='afbf41eff4904c53875e351eb33f067c'
  let wechatUrl="https://api.weixin.qq.com/sns/jscode2session?appid="+appid+"&secret="+secret+"&js_code="+JSCODE+"&grant_type=authorization_code"
  let grant_type='authorization_code'
  console.log(JSCODE)
  request(wechatUrl,(err,response,body)=>{
    // console.log(response)
    let data=JSON.parse(body)
    console.log(data)
    res.set({
      "Access-Control-Allow-Origin": "*"
      ,"Access-Control-Allow-Methods": "POST,GET"
      ,"Access-Control-Allow-Credentials": "true"
    });
    res.json(data)
  })
  // res.send("hahhah")
})



app.get('/test',function(req,res,next){
  res.json({
    msg:"1"
  })
})



/*微信小程序测试逻辑*/

/*登录逻辑
1. 数据库查重
2. 如果没有重复则插入，有重复返回已经注册

*/

app.get("/wechat/login",function(req,res,next){
  console.log(123)
  let user=req.query
  console.log("带过来的参数",user)
  // console.log(insert.toString())
  if(user){
    res.set({
      "Access-Control-Allow-Origin": "*"
      ,"Access-Control-Allow-Methods": "POST,GET"
      ,"Access-Control-Allow-Credentials": "true"
    });

    findName(req.query.userName).then((response)=>{
      console.log("find结果",response.length)
      if(!response.length){
        //可以插入
        insert({
            username:user.userName,
            psw:user.psw
         }).then((response)=>{
            console.log("promise对象",response)
            res.json({
              msg:"插入成功",
              status:1
            })
        })
      }
      else{
        res.json({
          msg:"该用户已被注册",
          status:0
        })
      }
    })


    // let findResult=find(user.username)
    // console.log("上面是find结果",findResult)

   // let insertResult=insert({
   //        username:user.userName,
   //        psw:user.psw
   //  },(err,data)=>{
   //    if(err){
   //      console.log(err)
   //    }
   //    else{
   //      console.log("我是data",data)
   //    res.json({
   //      status:data
   //    })

   //    }
   //  })

   /*分割线*/

   // insert({
   //    username:user.userName,
   //    psw:user.psw
   // }).then((response)=>{
   //    console.log("promise对象",response)
   //    res.json(response)
   // })

  }
})


/*小程序测试逻辑end*/




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
