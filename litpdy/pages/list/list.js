// pages/list/list.js
Page({

  data: {
    imgUrls: [
      'https://ltlapp.gluxen.com/image/20170928142155.png'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this

    that.setData({
      activeColor: "#33B95D"
    })
    // let myName = wx.getStorageSync("nickName")
    let myName = wx.getStorageSync("nickName")
    let myData = wx.getStorageSync("myRunData")
    let rank=1

    
    wx.request({
      url:"https://ltlapp.gluxen.com/wx_getSortRundata.json",
      // data:{
      //   steps:0
      // },
      success:function(res){
        console.log(res.data)
        // data:{},
        that.setData({
          list:res.data.list
        })
        that.data.list.forEach(function(item,index){
          // console.log("NICKNAME",item.NICKNAME)
          // console.log("myName", myName)
          if (item.NICKNAME == myName){

            // return item
            rank=item.rank

            // console.log("rankItem",rank)
            that.setData({
              myRank: item
            })

            console.log("myRankDATA",that.data.myRank)
          }
        })

  

        // console.log("rank",rank)
      }
    })


  console.log("myData2",myData)
  that.setData({
    myData: myData
  })
  that.setData({
    myName: myName
  })

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
  goRun(){
    wx.redirectTo({
      url: '../run/run',
    })
  }
})