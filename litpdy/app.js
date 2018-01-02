//app.js
App({
  // stepAmount:"",
  data:{
    stepAmount:"",
    test:""
  },

  onLaunch: function() {
    //调用API从本地缓存中获取数据
    let that = this
    // console.log("that1",that)
    // that.setData({
    //   test:"test"
    // })

    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // wx.login({
    //   success: function (res) {
    //     console.log(res)
    //     if (res.code) {
    //     // get UserInfo
    //     wx.getUserInfo({
    //       success:function(res){
    //         console.log("userInfo", res.userInfo.nickName)
    //         wx.setStorage({
    //           key: 'nickName',
    //           data: res.userInfo.nickName
    //         })
    //       }
    //     })



    //       //发起网络请求
    //       wx.request({
    //         // url: 'http://127.0.0.1:8080/onLogin',
    //         url:"http://abchinajn.com/xcx_login.json",
    //         data: {
    //           code: res.code
    //           // token: wx.getStorageSync('token')
    //         },
    //         success:function(response){
              
    //           console.log("返回的openid和sessionKey",response.data)
    //           var token = response.data.token
    //           // console.log("openid",openid)
    //           var sessionKey= response.data.sessionKey
    //           var openid = response.data.openid
    //           var nickName=wx.getStorageSync("nickName")
    //           wx.setStorage({
    //             key: 'openid',
    //             data: openid
    //           })
    //           wx.setStorage({
    //             key: 'sessionKey',
    //             data: sessionKey
    //           })
    //           wx.setStorage({
    //             key: 'token',
    //             data: token
    //           })

              
    //           wx.getWeRunData({
    //             success:function(res){
    //               console.log(res)
    //               const wRunEncryptedData = res.encryptedData
    //               const iv=res.iv
    //               // this.setData({ encryptedData: wRunEncryptedData })
    //               // this.setData({ iv: res.iv })

    //               wx.request({
    //                 // url:"http://127.0.0.1:8080/decryptData",
    //                 url:'http://abchinajn.com/wx_updateRunData.json',
    //                 data:{
    //                   encryptedData: wRunEncryptedData,
    //                   iv: iv,
    //                   sessionKey: sessionKey,
    //                   openid:openid,
    //                   nickName:nickName
    //                 },
    //                 success:function(response){
    //                   console.log(response.data)
    //                   if (response.data.success){
    //                     wx.request({
    //                       url:"http://abchinajn.com/wx_getRundataAmount.json",
    //                       data:{
    //                         openid:openid
    //                       },
    //                       success:function(responseRundata){
    //                         console.log("responseRundata",responseRundata.data)
    //                         let runData = responseRundata.data
    //                         // console.log("that",that)

    //                         // that.data.stepAmount = runData.stepAmount
    //                         // console.log("setAmount", that.data.stepAmount )
    //                         wx.setStorage({
    //                           key: 'stepAmount',
    //                           data: runData.stepAmount,
    //                         })
    //                       }
    //                     })
    //                   }
    //                 }
    //               })
    //             },
    //             fail:function(err){
    //               console.log(err)
    //             }
    //           })
    //         }
    //       })
    //     } else {
    //       console.log('获取用户登录态失败！' + res.errMsg)
    //     }
    //   },
    //   fail:function(err){
    //     console.log(err)
    //   }
    // });



    // wx.login({
    //   success: function (res) {
    //     console.log(res)
    //     if (res.code) {
    //       // get UserInfo
    //       wx.getUserInfo({
    //         success: function (res) {
    //           console.log("userInfo", res.userInfo.avatarUrl)
    //           wx.setStorage({
    //             key: 'nickName',
    //             data: res.userInfo.nickName
    //           })
    //           wx.setStorage({
    //             key: 'avatar',
    //             data: res.userInfo.avatarUrl
    //           })
    //         }
    //       })

    //       // console.log("avatar",wx.getStorageSync("avatar"))

    //       //登录获取sessionKey和openid
    //       wx.request({
    //         url: "https://ltlapp.gluxen.com/xcx_login.json",
    //         data: {
    //           code: res.code
    //         },
    //         success: function (response) {
    //           console.log("登录接口调用成功")
    //           console.log("返回的openid和sessionKey", response.data)
    //           var token = response.data.token
    //           // console.log("openid",openid)
    //           var sessionKey = response.data.sessionKey
    //           var openid = response.data.openid
    //           var nickName = wx.getStorageSync("nickName")
    //           wx.setStorage({
    //             key: 'openid',
    //             data: openid
    //           })
    //           wx.setStorage({
    //             key: 'sessionKey',
    //             data: sessionKey
    //           })
    //           // wx.setStorage({
    //           //   key: 'token',
    //           //   data: token
    //           // })



    //         },
    //         fail: function (err1) {
    //           console.log(err1)
    //           console.log("登录接口调用失败")
    //         }

    //       })
    //     } else {
    //       console.log('获取用户登录态失败！' + res.errMsg)
    //     }
    //   },
    //   fail: function (err) {
    //     console.log(err)
    //   }
    // });

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
