// pages/jifen/jifen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 'sr',
    jfList: [
      {
        tle: '五月花海鲜酒楼消费20积分',
        time: '2018-01-20  12:30:20',
        num: 20
      },
      {
        tle: '五月花海鲜酒楼消费20积分',
        time: '2018-01-20  12:30:20',
        num: 20
      },
      {
        tle: '五月花海鲜酒楼消费20积分',
        time: '2018-01-20  12:30:20',
        num: 20
      }
    ],
    jfList2: [
      {
        tle: '五月花海鲜酒楼消费20积分',
        time: '2018-01-20  12:30:20',
        num: 20
      },
      {
        tle: '五月花海鲜酒楼消费20积分',
        time: '2018-01-20  12:30:20',
        num: 20
      },
      {
        tle: '五月花海鲜酒楼消费20积分',
        time: '2018-01-20  12:30:20',
        num: 20
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