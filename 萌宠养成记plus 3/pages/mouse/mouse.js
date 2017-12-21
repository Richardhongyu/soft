Page({
  mouseQuit: function (event) {
    wx.redirectTo({
      url: '../post/post',
    })
  },
  mouseChoose: function (event) {
    wx.redirectTo({
      url: '../mousecare/mousecare',
    })
  }
})