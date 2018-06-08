var sha1 = require("./sha1.js");

var data = {
  kAppid: "1510001",
  versionsNum: "76",
  fNum: "2",
  
}

function get_request(url, dt, callback, err){
  wx.request({
    url: url,
    data: dt,
    header: {},
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: function (res) {
      callback(res);
      err(null);
    },
    fail: function (res) {
      callback(null);
      err(res)
    },
  })
}

function post_request(url, data, callback, err){
  wx.request({
    url: url,
    data: dt,
    header: {},
    method: 'POST',
    dataType: 'json',
    success: function(res) {
      callback(res);
      err(null);
    },
    fail: function(res) {
      callback(null);
      err(res)
    },
  })
}

module.exports = {

}
