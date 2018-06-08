// pages/home/home.js
var urls = require('../../utils/urls.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: urls.bannerurl,
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        'api': 'banner/list',
        'token': "3e77da71f2b613251a032b8741b116ad",
        'uid': "1440",
        'username': 'xunmall',
        'f': 5,
        'password': '123456',
        'v': 76,
        't': Date.parse(new Date()),
      },
      success: function (res) {
        var a = JSON.stringify(res.data.ret);
        console.log(a.ret);
      },
      fail: function (res) {
        console.log(res);
      },
    })
  },

})