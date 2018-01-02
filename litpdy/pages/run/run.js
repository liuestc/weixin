// pages/run/run.js
// let app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stepAmount:"",
    hover:"",
    activeColor:"",
    defaultColor:"#c1c1c1"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    // console.log("that1",that)
    that.setData({
      activeColor:"#33B95D"
    })

    wx.login({
      success: function (rescode) {
        console.log(rescode)
        if (rescode.code) {
          // get UserInfo
          wx.getUserInfo({
            success: function (res) {
              console.log("userInfo", res.userInfo.avatarUrl)
              wx.setStorageSync(
                 'nickName',
                 res.userInfo.nickName
              )
              wx.setStorageSync(
                'avatar',
                res.userInfo.avatarUrl
              )


              wx.request({
                url: "https://ltlapp.gluxen.com/xcx_login.json",
                data: {
                  code: rescode.code
                },
                success: function (response) {
                  console.log("登录接口调用成功")
                  console.log("返回的openid和sessionKey", response.data)
                  var token = response.data.token
                  // console.log("openid",openid)
                  var sessionKey = response.data.sessionKey
                  var openid = response.data.openid

                  wx.setStorageSync(
                    'openid',
                    openid
                  )
                  wx.setStorageSync(
                     'sessionKey',
                     sessionKey
                  )


                  wx.getWeRunData({
                    success: function (res) {
                      console.log(res)
                      const wRunEncryptedData = res.encryptedData
                      const iv = res.iv

                      const sessionKey = wx.getStorageSync("sessionKey")
                      const openid = wx.getStorageSync("openid")
                      const nickName = wx.getStorageSync("nickName")
                      const avatar = wx.getStorageSync("avatar")
                      console.log("sessionKey", sessionKey)
                      console.log("openid", openid)
                      console.log("nickName", nickName)
                      console.log("avatar", avatar)


                      wx.request({
                        url: 'https://ltlapp.gluxen.com/wx_updateRunData.json',
                        data: {
                          encryptedData: wRunEncryptedData,
                          iv: iv,
                          sessionKey: wx.getStorageSync("sessionKey"),
                          openid: wx.getStorageSync("openid"),
                          nickName: wx.getStorageSync("nickName"),
                          avatar: wx.getStorageSync("avatar")
                        },
                        success: function (response) {
                          console.log("myData", response.data.todayData.step)
                          // let arr = response.data.list
                          let myData = response.data.todayData.step
                          console.log("myData", myData)
                          wx.setStorage({
                            key: "myRunData",
                            data: myData
                          })
                          that.setData({
                            myData: myData
                          })
                          console.log("mydata", wx.getStorageSync("myRunData"))
                        }
                      })



                      wx.request({
                        url: "https://ltlapp.gluxen.com/wx_getRundataAmount.json",
                        data: {
                          openid: wx.getStorageSync("openid")
                        },
                        success: function (responseRundata) {
                          console.log("responseRundata", responseRundata.data)
                          let runData = responseRundata.data
                          console.log("step_amount")

                          wx.setStorage({
                            key: 'stepAmount',
                            data: runData.stepAmount,
                          })

                          that.setData({
                            stepAmount: runData.step_amount
                          })
                          that.setData({
                            dayAmount: runData.day_amount
                          })
                          console.log("stepAmount3", that)
                        }
                      })
                    },
                    fail: function (err) {
                      console.log(err)
                    }
                  })



                },
                fail: function (err1) {
                  console.log(err1)
                  console.log("登录接口调用失败")
                }

              })


            }
          })

          // console.log("avatar",wx.getStorageSync("avatar"))

          //登录获取sessionKey和openid

        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      },
      fail: function (err) {
        console.log(err)
      }
    });


//  还是得放到login里面
    // wx.login({
    //   success:function(res1){
    //     wx.getWeRunData({
    //       success: function (res) {
    //         console.log(res)
    //         const wRunEncryptedData = res.encryptedData
    //         const iv = res.iv

    //         const sessionKey= wx.getStorageSync("sessionKey")
    //         const  openid=wx.getStorageSync("openid")
    //         const  nickName=wx.getStorageSync("nickName")
    //         const   avatar= wx.getStorageSync("avatar")
    //         console.log("sessionKey", sessionKey)
    //         console.log("openid", openid)
    //         console.log("nickName", nickName)
    //         console.log("avatar", avatar)


    //         wx.request({
    //           url: 'https://ltlapp.gluxen.com/wx_updateRunData.json',
    //           data: {
    //             encryptedData: wRunEncryptedData,
    //             iv: iv,
    //             sessionKey: wx.getStorageSync("sessionKey"),
    //             openid: wx.getStorageSync("openid"),
    //             nickName: wx.getStorageSync("nickName"),
    //             avatar: wx.getStorageSync("avatar")
    //           },
    //           success: function (response) {
    //             console.log("myData", response)
    //             let arr = response.data.list
    //             let myData = arr[0].STEP
    //             console.log("myData", myData)
    //             wx.setStorage({
    //               key: "myRunData",
    //               data: myData
    //             })
    //             that.setData({
    //               myData: myData
    //             })
    //             console.log("mydata", wx.getStorageSync("myRunData"))
    //           }
    //         })



    //         wx.request({
    //           url: "https://ltlapp.gluxen.com/wx_getRundataAmount.json",
    //           data: {
    //             openid: wx.getStorageSync("openid")
    //           },
    //           success: function (responseRundata) {
    //             console.log("responseRundata", responseRundata.data)
    //             let runData = responseRundata.data
    //             console.log("step_amount")

    //             wx.setStorage({
    //               key: 'stepAmount',
    //               data: runData.stepAmount,
    //             })

    //             that.setData({
    //               stepAmount: runData.step_amount
    //             })
    //             that.setData({
    //               dayAmount: runData.day_amount
    //             })
    //             console.log("stepAmount3", that)
    //           }
    //         })
    //       },
    //       fail: function (err) {
    //         console.log(err)
    //       }
    //     })
    //   }
    // })





  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  goList(){
    wx.redirectTo({
      url: '../list/list',
    })
  },
  refresh(){
    let that=this
    wx.getWeRunData({
      success: function (res) {
        console.log(res)
        const wRunEncryptedData = res.encryptedData
        const iv = res.iv

        wx.request({
          // url:"http://127.0.0.1:8080/decryptData",
          url: 'https://ltlapp.gluxen.com/wx_updateRunData.json',
          data: {
            encryptedData: wRunEncryptedData,
            iv: iv,
            sessionKey: wx.getStorageSync("sessionKey"),
            openid: wx.getStorageSync("openid"),
            nickName: wx.getStorageSync("nickName"),
            avatar: wx.getStorageSync("avatar")
          },
          success: function (response) {
            console.log("点击刷新",response.data)

            let mydata = response.data.todayData.step
            that.setData({
              mydata: mydata
            })
            // console.log("mydata", that.data.mydata)
            // setTimeout({})
            wx.showToast({
              title: '刷新成功',
              icon: 'success',
              duration: 1000,
              success:function(){
   

                setTimeout(function(){
                  that.setData({
                    hover: "#33B95D"
                  })
                },500)
              }
            })

          },
          fail:function(err){
            console.log("刷新失败",err)

            wx.showToast({
              title: '刷新失败，请检查网络',
              icon: 'success',
              duration: 1000,
              success: function () {


                setTimeout(function () {
                  that.setData({
                    hover: "#33B95D"
                  })
                }, 500)
              }
            })
            
          }
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  hoverColor(){
    console.log("hover")

    this.setData({
      hover:"#3E9359"
    })

  }
})