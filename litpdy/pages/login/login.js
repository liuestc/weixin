// test.js
let app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userVal:"",
    alert:'',
    msg:""
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  userVal:function(e){
    this.setData({
      userVal: e.detail.value
    })
  },
  pswVal: function (e) {
    this.setData({
      pswVal: e.detail.value
    })
  },
  getOpenId:function(){
    return new Promise((resolve)=>{
      wx.getStorage({
        key: 'openid',
        success: function(res) {
          console.log("发送给后台的openid",res.data)
          resolve(res.data)
        },
      })
    })
  },
  loginTest:function(){
    // alert(1111)
    // console.log(222)
   
    console.log("promise对象",this.getOpenId())

    wx.getStorage({
      key: 'openid',
      success:  (res)=> {
        console.log("发送给后台的openid", res.data)
        let openid=res.data
        let userName = this.data.userVal
        let psw = this.data.pswVal
        wx.request({
          url: "http://127.0.0.1:8080/wechat/login",
          data: {
            userName,
            psw,
            openid

          },
          success: function (res) {
            console.log(res.data)
            if (!res.data.status) {
              console.log("该用户已经被注册");
              // this.msg = res.data.msg
              this.setData({
                msg: res.data.msg,
                alert: "alert"
              })
              setTimeout(function () {
                this.setData({
                  msg: "",
                  alert: ""
                })
              }.bind(this), 1000)
              console.log(this.msg);
            }
            else{
              this.setData({
                msg: res.data.msg,
                alert: "alert"
              })
              wx.redirectTo({
                url: "../blog/blog"
              })
              
            }
          }.bind(this),
          fail: function (err) {
            console.log("请求错误，网络原因")
            console.log(err)
          }

        })

      },
    })


  }
})