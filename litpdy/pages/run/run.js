// pages/run/run.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // wx.login({
    //   success:function(res){
    //     console.log("登录",res)
    //     let code=res.code
    //     wx.request({
    //       url:'https://starcraft4.tunnel.echomod.cn/YHXM1.0/xcx_login.json',
    //       data:{
    //         code:code
    //       },
    //       success:function(response){
    //         console.log(response)
    //       }
    //     })
    //   },
    //   fail:function(err){
    //     console.log(err)
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
  }
})