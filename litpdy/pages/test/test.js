// test.js
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

    const canvas = wx.createCanvasContext('myCanvas')
    // ctx.setFillStyle('red')
    // ctx.fillRect(10, 10, 150, 75)
    // ctx.draw()


    // let canvas = $("canvas");
    let ctx = canvas[0].getContext('2d');
    let radians = (Math.PI / 180) * 180;
    let startTime = Date.now();
    let time = 2000;
    let clockwise = 1;
    let cp1x, cp1y, cp2x, cp2y;

    // 初始状态
    // ctx.bezierCurveTo(90, 28, 92, 179, 200, 100);
    // 末尾状态
    // ctx.bezierCurveTo(145, 100, 41, 100, 200, 100);

    requestAnimationFrame(function waveDraw() {
      let t = Math.min(1.0, (Date.now() - startTime) / time);

      if (clockwise) {
        cp1x = 90 + (55 * t);
        cp1y = 28 + (72 * t);
        cp2x = 92 - (51 * t);
        cp2y = 179 - (79 * t);
      } else {
        cp1x = 145 - (55 * t);
        cp1y = 100 - (72 * t);
        cp2x = 41 + (51 * t);
        cp2y = 100 + (79 * t);
      }

      ctx.clearRect(0, 0, 200, 200);
      ctx.beginPath();
      ctx.moveTo(0, 100);
      // 绘制三次贝塞尔曲线
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, 200, 100);
      // 绘制圆弧
      ctx.arc(100, 100, 100, 0, radians, 0);
      ctx.fillStyle = "rgba(154, 205, 50, .8)";
      ctx.fill();
      ctx.save();

      if (t == 1) {
        startTime = Date.now();
        clockwise = !clockwise;
      }

      requestAnimationFrame(waveDraw);
    });
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
  
  }
})