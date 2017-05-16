 function wechatShareSetup() {
        $.ajax({
            url: "./weixin_signature.json",
            type: 'POST',
            data: {
                url: location.href.split('#')[0] // 将当前URL地址上传至服务器用于产生数字签名
            }
        }).done(function (r) {

            // 开始配置微信JS-SDK
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: r.appId, // 必填，公众号的唯一标识
                timestamp: r.timestamp, // 必填，生成签名的时间戳
                nonceStr: r.nonceStr, // 必填，生成签名的随机串
                signature: r.signature, // 必填，签名，见附录1
                jsApiList: [
                    'checkJsApi',
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'hideMenuItems'//,
                    // 'chooseImage'
                ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });

            resetWechatShare();

        });
    }


    function resetWechatShare() {
        wx.ready(function () {       

            // alert(JSON.stringify(wechatShareObj));

            function initTimelineShare() {
                wx.onMenuShareTimeline({
                    // title: '这是一个测试',
                    title: "测试", // 分享标题
                    link: 'http://jrd-express.com/questionnaire/html/questionnaire.html',
                    imgUrl: 'http://jrd-express.com/questionnaire/image/title.jpg', // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        // alert('分享成功');
                        
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
            }

            function initFriendShare() {
                wx.onMenuShareAppMessage({
                    title: "发送给朋友", // 分享标题
                    desc: "描述", // 分享描述
                    link: "http://jrd-express.com/questionnaire/html/questionnaire.html", // 分享链接
                    imgUrl: 'http://jrd-express.com/questionnaire/image/title.jpg', // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        //campaignTools.pushGaEvent('spring2015', 'newShare', 'wechatFriend');
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
            }

            initTimelineShare();
            initFriendShare();
        });
    }