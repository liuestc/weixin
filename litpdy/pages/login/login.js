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
  loginTest:function(){
    // alert(1111)
    // console.log(222)
    let userName=this.data.userVal
    let psw=this.data.pswVal
    console.log(app.globalData.url)
    wx.request({
      url:"http://127.0.0.1:8080/wechat/login",
      data:{
        userName,
        psw
      },
      success:function(res){
        console.log(res.data.status)
        if(!res.data.status){
          console.log("该用户名已经被注册");
          // this.msg = res.data.msg
          this.setData({
            msg:res.data.msg,
            alert:"alert"
          })
          setTimeout(function(){
            this.setData({
              msg: "",
              alert: ""
            })
          }.bind(this),1000)
          console.log(this.msg);
        }
      }.bind(this),
      fail:function(err){
        console.log("请求错误，网络原因")
        console.log(err)
      }

    })
  }
})