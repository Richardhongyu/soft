
//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    if (!wx.getStorageSync('exper')) {
      wx.setStorageSync('exper', 0)
    }
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null,
    ligh: {},
    tempe: '',
    huml: '',
    light: 100,
    touc: '',
    expe: '100',
    level: '1'
  },
  // Request function
  req: function (method, url, arg) {
    let domian = 'https://www.tuling123.com/openapi/api/', data = { 'key': '9d2ff29d44b54e55acadbf5643569584' }, dataType = 'json';
    showRequestInfo()
    let header = { 'content-type': 'application/x-www-form-urlencoded' };

    if (arg.data) {
      data = Object.assign(data, arg.data);
    }
    if (arg.header) {
      header = Object.assign(header, arg.header);
    }
    if (arg.dataType) {
      dataType = arg.dataType;
    }

    let request = {
      method: method.toUpperCase(),
      url: domian + url,
      data: data,
      dataType: dataType,
      header: header,
      success: function (resp) {
        console.log('response content:', resp.data);

        let data = resp.data;

        typeof arg.success == "function" && arg.success(data);
      },
      fail: function () {
        wx.showToast({
          title: '请求失败',
          icon: 'success',
          duration: 2000
        });

        typeof arg.fail == "function" && arg.fail();
      },
      complete: function () {
        typeof arg.complete == "function" && arg.complete();
      }
    };
    wx.request(request);
  },
  globalData:{
    userInfo:null,
    "tabbar":{
      "selectedColor": "#4A6141",
      "color": "#333",
      "borderStyle": "white",
      "backgroundColor": "#9e9e9b",
      "list": [
        {
          "pagePath": "pages/catexperience/catexperience",
          "text": "照顾",
          "iconPath": "image/icon/dog.png",
          "selectedIconPath": "/image/icon/dog.png"
        },
        {
          "pagePath": "pages/catdialogue/catdialogue",
          "text": "聊天",
          "iconPath": "image/icon/full.png",
          "selectedIconPath": "image/icon/empty.png"
        }
      ]
    }
  }
})