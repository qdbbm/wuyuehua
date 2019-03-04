// pages/couponGet/couponGet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couponList: [
      {
        type: 'djq',
        name: '代金券',
        time: '2019.01.31-2019.03.31',
        num: 10,
        txt: '白金会员特享优惠',
        status: 0  // 0 未领取  1 已领取
      },
      {
        type: 'zkq',
        name: '折扣券',
        time: '2019.01.31-2019.03.31',
        num: 9.5,
        txt: '端午节特享优惠',
        status: 1
      }
    ]
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

  }
})