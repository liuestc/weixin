onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    wx.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://jingangxiu.com.cn/user_developUserAutoLogin.json',
            data: {
              code: res.code
            },
            success: function (e) {
              app.sessionId = e.data.sessionId;
              if (e.data.success) {
                wx.reLaunch({
                  url: '../management/management'
                })
              }
              else{
                return;
              }
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  }, 