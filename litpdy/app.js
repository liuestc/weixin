//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据

    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log(123)

    wx.login({
      success: function (res) {
        console.log(res)
        if (res.code) {
          //发起网络请求
          wx.request({
            // url: 'http://127.0.0.1:8080/onLogin',
            url:"http://abchinajn.com/xcx_login.json",
            data: {
              code: res.code
              // token: wx.getStorageSync('token')
            },
            success:function(response){
              console.log(response.data)
              var token = response.data.token
              // console.log("openid",openid)
              var sessionKey= response.data.sessionKey
              var openid = response.data.openid
              wx.setStorage({
                key: 'openid',
                data: openid
              })
              wx.setStorage({
                key: 'sessionKey',
                data: sessionKey
              })
              wx.setStorage({
                key: 'token',
                data: token
              })
              wx.getStorage({
                key: 'openid',
                success: function(res) {
                  console.log(res.data)
                }
              })
              
              wx.getWeRunData({
                success:(res)=>{
                  console.log(res)
                  const wRunEncryptedData = res.encryptedData
                  const iv=res.iv
                  // this.setData({ encryptedData: wRunEncryptedData })
                  // this.setData({ iv: res.iv })

                  wx.request({
                    url:"http://127.0.0.1:8080/decryptData",
                    data:{
                      encryptedData: wRunEncryptedData,
                      iv: iv,
                      session: sessionKey,
                      openid:openid
                    },
                    success:function(response){
                      console.log(response.data)
                    }
                  })
                }
              })
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      },
      fail:function(err){
        console.log(err)
      }
    });


  },

  getUserInfo:function(cb) {
    // var that = this
    // if (this.globalData.userInfo) {
    //   typeof cb == "function" && cb(this.globalData.userInfo)
    // } else {
    //   //调用登录接口
    //   wx.getUserInfo({
    //     withCredentials: false,
    //     success: function(res) {
    //       console.log(res)
    //       that.globalData.userInfo = res.userInfo
    //       typeof cb == "function" && cb(that.globalData.userInfo)
    //     }
    //   })
    // }
  },

  globalData: {
    userInfo: null,
    url:'https://84533212.ngrok.io'
  }
})
