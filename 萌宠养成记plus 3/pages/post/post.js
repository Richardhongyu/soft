Page({
  onTapJumpCat: function (event) {
    wx.redirectTo({
      url: '../cat/cat',
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
  onTapJumpDog: function (event) {
    wx.redirectTo({
      url: '../dog/dog',
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
  onTapJumpMouse: function (event) {
    wx.redirectTo({
      url: '../mouse/mouse',
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
  onTapJumpRobbit: function (event) {
    wx.redirectTo({
      url: '../robbit/robbit',
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
  }
})
/*Page({
  onTapJumpDog: function (event) {
    wx.redirectTo({
      url: '../dog/dog',
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
  }
})*/
/*Page({
  onTapJumpMouse: function (event) {
    wx.redirectTo({
      url: '../mouse/mouse',
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
  }
})*/
/*Page({
  onTapJumpRobbit: function (event) {
    wx.redirectTo({
      url: '../robbit/robbit',
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
  }
})*/