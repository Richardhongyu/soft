Page({
  right: function (event) {
    wx.redirectTo({
      url: "../robbitexperience/robbitexperience",
      success: function () {
        console.log("jump success")
      },
      fail: function () {
        console.log("jump failed")
      },
      complete: function () {
        console.log("jump complete")
      }
    });
  },
  wrong: function (event) {
    wx.redirectTo({
      url: '../post/post',
    })
  }
})