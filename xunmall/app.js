//app.js
App({
  // onLaunch:function(){
  //   var timestamp = Date.parse(new Date());
  //   wx.request({
  //     url: 'http://test.app.xunmallapi.com/api',
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     data: {
  //       'api': 'user/login',
  //       'token': "",
  //       'uid': "",
  //       'username': 'xunmall',
  //       'f': 5,
  //       'password': '123456',
  //       't': timestamp,
  //       'v': 76
  //     },
  //     success: function (res) {
  //       getApp().globalData.uid = res.data.uid;
  //       getApp().globalData.token = res.data.token;
  //       console.log(res.data);
  //     },
  //     fail: function (res) { console.log(res) },
  //     complete: function (res) { },
  //   })
  // },
  globalData:{
    uid:"123",
    token:"123",
  },
})