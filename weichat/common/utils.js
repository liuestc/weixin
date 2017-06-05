var utils = {};  
var sha1 = require('sha1');
const request = require("request")
// var config=require('../token.json')
  
//检查微信签名认证中间件  
utils.sign = function (config){  
    return function(req, res, next){  
        config = config || {};  
        var q = req.query;  
        var token = config.wechat.token;  
        var signature = q.signature; //微信加密签名  
        var nonce = q.nonce; //随机数  
        var timestamp = q.timestamp; //时间戳  
        var echostr = q.echostr; //随机字符串  
         
/*            1）将token、timestamp、nonce三个参数进行字典序排序 
            2）将三个参数字符串拼接成一个字符串进行sha1加密 
            3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信 */
          
        var str = [token, timestamp, nonce].sort().join('');  
        var sha = sha1(str);  
        if (req.method == 'GET') {  
  
            if (sha == signature) {  
                console.log("我是echostr")
                res.send(echostr+'')  
            }else{  
                res.send('err');  
            }  
        }  
        else if(req.method == 'POST'){  
            if (sha != signature) {  
                return;  
            } 
            console.log("关注发请求？") 
            next();  
        }  
    }  
};  

utils.getToken=function(appid,appsecret,callback){
    console.log("我是utils里面的")
    let tokenUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + appid + "&secret=" + appsecret;

    console.log("URL",tokenUrl)

    request(tokenUrl,(err,response,body)=>{
        let jsonResult = JSON.parse(body);
        callback(jsonResult);
    })

}

utils.Test=function(callback){
    request("http://localhost:3000/test/1.json",(err,res,body)=>{
        let result=JSON.parse(body)
        console.log("result",result)
        // console.log(typeof result)
        callback(result)
    })
}
  
module.exports = utils; 


