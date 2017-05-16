var img=document.getElementById("imgTest").src;

var xhr = new XMLHttpRequest();
xhr.open('GET','https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxbc25b53df66f2c68&secret=01b16e55c7a18f6a608ebc3344d2e5f7',true);
xhr.onload = function () {
    alert(222)
    if(!xhr.responseText.errmsg){
        var res = xhr.responseText;
        var access_token = res.access_token;
        alert(access_token)
        var xhr2 = new XMLHttpRequest();
        xhr2.open('GET','https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+access_token+'&type=jsapi',false);
        xhr2.onload  = function () {
            if(xhr.responseText.errmsg = 'ok'){
                var res = xhr.responseText;
                var ticket = res.ticket;
            }
        }
    }else {
        // console.log(111)
        console.log(xhr.responseText.errmsg);
    }
}
xhr.send(null);
wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: 'wxbc25b53df66f2c68', // 必填，公众号的唯一标识
    timestamp: '2017', // 必填，生成签名的时间戳
    nonceStr: 'wxbc25b53df66f2c68', // 必填，生成签名的随机串
    signature: 'wxbc25b53df66f2c68',// 必填，签名，见附录1
    jsApiList: ['onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});
wx.ready(function(){
    wx.onMenuShareTimeline({
        title: 'test?', // 分享标题
        link: 'http://jrd-express.com/questionnaire/html/questionnaire.html', // 分享链接
        imgUrl: 'http://p1.wmpic.me/article/2016/01/20/1453256805_tWFOoRqq.jpg', // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
            alert(1)
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    });
});
