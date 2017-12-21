Page({
  dogQuit:function(event){
    wx.redirectTo({
      url: '../post/post',
    })
  },
  dogChoose: function (event) {
    wx.redirectTo({
      url: '../dogcare/dogcare',
    })
  }
})