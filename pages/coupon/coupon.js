// pages/coupon/coupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 'ksy',
    couponList: [
      {
        num: 900,
        name: '代金券',
        status: '可使用',
        txt: '白金会员特享优惠',
        time: '2019.01.31-2019.03.31',
        ctype: 'djq'
      },
      {
        num: 9.5,
        name: '折扣券',
        status: '可使用',
        txt: '白金会员特享优惠',
        time: '2019.01.31-2019.03.31',
        ctype: 'zkq'
      }
    ],
    couponList2: [
      {
        num: 20,
        name: '代金券',
        status: '已使用',
        txt: '白金会员特享优惠',
        time: '2019.01.31-2019.03.31',
        ctype: 'djq'
      }
    ],
    couponList3: [
      {
        num: 20,
        name: '代金券',
        status: '已过期',
        txt: '白金会员特享优惠',
        time: '2019.01.31-2019.03.31',
        ctype: 'djq'
      }
    ]
  },

  tabChange: function (e) {
    let current = e.currentTarget.dataset.current;
    this.setData({
      currentTab: current
    })
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