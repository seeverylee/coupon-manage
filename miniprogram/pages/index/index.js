// miniprogram/pages/index/index.js
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      return
    }
    wx.getUserInfo({
      success: (res) => {
        this.bindGetUserInfo(res)
      },
      fail: (e) => {
        // 
      }
    })
  },
  bindGetUserInfo: function (res) {
    console.log(res);
    app.globalData.userInfo = res.userInfo
    this.setData({
      userInfo: res.userInfo,
      hasUserInfo: true
    }, () => {
      // wx.switchTab({
      //   url: e.currentTarget.dataset.path,
      // })
    })
  }
})