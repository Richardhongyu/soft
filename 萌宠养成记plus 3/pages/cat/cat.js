Page({
  catQuit: function (event) {
    wx.redirectTo({
      url: '../post/post',
    })
  },
  catChoose: function (event) {
    wx.redirectTo({
      url: '../catcare/catcare',
    })
  }
})