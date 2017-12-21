Page({
  robbitQuit: function (event) {
    wx.redirectTo({
      url: '../post/post',
    })
  },
  robbitChoose: function (event) {
    wx.redirectTo({
      url: '../robbitcare/robbitcare',
    })
  }
})