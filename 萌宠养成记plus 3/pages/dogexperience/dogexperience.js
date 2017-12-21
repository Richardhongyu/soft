//写在前面：规则自己探索（可以读一下程序，顺便锻炼一下，不过你想要一个一个试，我也没意见......），语句的解释请参见cateperience的js里面的注释
//如果你有兴趣看到这里，那不妨告诉你一个秘密cateperience里面的语句是规范的，所以不要看这个里面的语句，实在是，改不动了。。。啊啊啊！！!


// start.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tempe: '',
    // huml: '',
    // ligh:'',
    // touc: '',
    // expe: '100',
    // level: '1',
    // light:'',
    opacity: 0.4,
    disabled: true,
    threshold: 0,
    rule: 'up',
    message: 'Hello MINA!',
    num: "/2350",
    exper: ''
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var expernum = parseInt(wx.getStorageSync('exper'));
    that.getDataFromOneNet();
    setInterval(function () {
      that.getDataFromOneNet();
    }, 5000);

    // this.setData ();
    // this.touch_h(this.touc,this. expe),
    // this.humlity_l(this.huml, this. expe),
    // this.tempeture_n(this.data.temp, this.data.expe),
    this.light_n(app.globalData.ligh, app.globalData.expe),

      //app.globalData.expe = 100,
      this.level_(app.globalData.level, app.globalData.expe)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },
  /*
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  },
  tempeture_n: function (temp, expe) {
    if (temp >= 20 && temp <= 30) {
      app.globalData.expe = app.globalData.expe + 1;
    }
    else if (temp >= 30 && temp <= 35) {
      this.data.expe = expe;
    }
    else if (temp >= 35 && temp <= 40) {
      this.data.expe = expe - 3;
    }
    else if (temp >= 15 && temp <= 20) {
      expe = expe;
    }
    else if (temp >= 10 && temp <= 15) {
      expe = expe - 1;
    }
    return expe;
  },
  /*tempeture_h: function (temp, expe) {
    if (temp >= 20 && temp <= 30) {
      expe = expe + 2;
    }
    else if (temp >= 30 && temp <= 35) {
      expe = expe + 1;
    }
    else if (temp >= 35 && temp <= 40) {
      expe = expe - 2;
    }
    else if (temp >= 15 && temp <= 20) {
      expe = expe + 1;
    }
    else if (temp >= 10 && temp <= 15) {
      expe = expe ;
    }
    return expe;
  },*/
  /*tempeture_l: function (temp, expe) {
    if (temp >= 20 && temp <= 30) {
      expe = expe ;
    }
    else if (temp >= 30 && temp <= 35) {
      expe = expe - 1;
    }
    else if (temp >= 15 && temp <= 20) {
      expe = expe - 1;
    }
    return expe;
  },*/
  humlity_n: function (huml, expe) {
    if (huml >= 20 && huml <= 30) {
      expe = expe + 1;
    }
    else if (huml >= 30 && huml <= 35) {
      expe = expe - 1;
    }
    else if (huml >= 35 && huml <= 40) {
      expe = expe - 3;
    }
    else if (huml >= 15 && huml <= 20) {
      expe = expe + 1;
    }
    else if (huml >= 10 && huml <= 15) {
      expe = expe + 2;
    }
    return expe;
  },
  /*humlity_h: function (huml, expe) {
    if (huml >= 20 && huml <= 30) {
      expe = expe + 2;
    }
    else if (huml >= 30 && huml <= 35) {
      expe = expe ;
    }
    else if (huml >= 35 && huml <= 40) {
      expe = expe + 2;
    }
    else if (huml >= 15 && huml <= 20) {
      expe = expe + 3;
    }
    else if (huml >= 10 && huml <= 15) {
      expe = expe + 2;
    }
    return expe;
  },*/
  /*humlity_l: function (huml, expe) {
    if (huml >= 20 && huml <= 30) {
      expe = expe - 1;
    }
    else if (huml >= 30 && huml <= 35) {
      expe = expe - 5;
    }
    else if (huml >= 15 && huml <= 20) {
      expe = expe + 1;
    }
    return expe;
  },*/
  //light_n: function (ligh, expe) {
  // var caoa = app.globalData.ligh;
  // var page = this;
  // var page=this;
  // var x=page.rnd(1,7);
  // console.log(x);
  // app.globalData.expe =1000
  // if (cao <= 10000) {
  //   app.globalData.expe = 10;
  // }
  //app.globalData.expe=100
  // var caoa = cao;
  // page.setData({ caoa: caoa });
  //app.globalData.ligh = 600
  //app.globalData.expe = app.globalData.light;
  // app.globalData.expe += 3;
  // var a=0
  // if (app.globalData.expe == 400 ) {
  //   app.globalData.expe = 500
  // }
  // if (app.globalData.ligh > a ) {
  //     app.globalData.expe = 3;
  // };
  // else if (app.globalData.ligh >= 200 && app.globalData.ligh <= 300) {
  //   app.globalData.expe = app.globalData.expe + 2;
  // }
  // else if (app.globalData.ligh >= 100 && app.globalData.ligh <= 200) {
  //   app.globalData.expe = app.globalData.expe + 1;
  // }
  // else if (app.globalData.ligh >= 600 && app.globalData.ligh <= 700) {
  //   app.globalData.expe = app.globalData.expe + 2;
  // }
  // else if (app.globalData.ligh >= 700 && app.globalData.ligh <= 800) {
  //   app.globalData.expe = app.globalData.expe + 1;
  // }
  // return app.globalData.expe;
  //},
  light_h: function (ligh, expe) {
    if (ligh >= 300 && ligh <= 600) {
      expe = expe;
    }
    else if (ligh >= 200 && ligh <= 300) {
      expe = expe + 1;
    }
    else if (ligh >= 100 && ligh <= 200) {
      expe = expe - 1;
    }
    else if (ligh >= 600 && ligh <= 700) {
      expe = expe + 1;
    }
    else if (ligh >= 700 && ligh <= 800) {
      expe = expe + 1;
    }
    return expe;
  },
  /*light_l: function (ligh, expe) {
    if (ligh >= 300 && ligh <= 600) {
      expe = expe ;
    }
    else if (ligh >= 200 && ligh <= 300) {
      expe = expe ;
    }
    else if (ligh >= 600 && ligh <= 700) {
      expe = expe + 1;
    }
    return expe;
  },*/
  touch_n: function (touc, expe) {
    if (touc = 0) {
      expe = expe + 2;
    }
    return expe;
  },
  /*touch_h: function (touc, expe) {
    if (touc = 0) {
      expe = expe + 3;
    }
    return expe;
  },*/
  /*touch_l: function (touc, expe) {
    if (touc = 0) {
      expe = expe + 1;
    }
    return expe;
  },*/








  getDataFromOneNet: function () {


    var page = this;

    //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({

      url: 'http://api.heclouds.com/devices/20470730/datapoints?datastream_id=Light,Temperature,Humidity,button&limit=2',
      header: {
        'content-type': 'application/json',
        'api-key': 'JTmypYgjhw2B=GcuqZhlmxjlpZc='
      },

      success: function (res) {
        console.log(res)
        var app = getApp()
        app.globalData.expe = wx.getStorageSync('exper');//初始值
        var button = res.data.data.datastreams[0]['datapoints'][0]['value'];
        page.buttonSet(button);
        var temp = res.data.data.datastreams[1]['datapoints'][0]['value'];
        page.tempSet(temp);
        var light = res.data.data.datastreams[2]['datapoints'][0]['value'];
        page.lightSet(light);
        var huml = res.data.data.datastreams[3]['datapoints'][0]['value'];
        page.humlSet(huml);
        page.setData({ temp: temp, light: light, huml: huml, button: button })
        page.level(page.data.exper);
        // res.data.data.datastreams[3].value
        // app.globalData.huml = huml
        //app.globalData.light =1000
        // app.globalData.light.datapoints[i].value
        //light.datapoints[0].value
        //light.datapoints[0].value
        //app.globalData.button = res.data.data.datastreams[3]
        // app.globalData.tempe = temp
        // app.globalData.touc = button
        // var that = this;
        // this.setData({
        //   tempe : '20'
        // })
        // this.data.touc = button = 1000

      },
      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")


      }
    })

  },
  //设置温度
  tempSet: function (temp) {
    var expernum = parseInt(wx.getStorageSync('exper'));
    if (temp >= 20 && temp <= 30) {
      wx.setStorageSync('exper', expernum + 1);
    }
    else if (temp >= 30 && temp <= 35) {
      wx.setStorageSync('exper', expernum + 2);
    }
    else {
      wx.setStorageSync('exper', expernum);
    };
    this.setData({
      exper: app.globalData.expe
    })
  },
  //设置光强
  lightSet: function (light) {
    var expernum = parseInt(wx.getStorageSync('exper'));
    if (light >= 300 && light <= 600) {
      wx.setStorageSync('exper', expernum + 1);
    }
    else if (light >= 200 && light <= 300) {
      wx.setStorageSync('exper', expernum);
    }
    else {
      wx.setStorageSync('exper', expernum );
    };
    this.setData({
      exper: app.globalData.expe
    })
  },
  //设置湿度
  humlSet: function (huml) {
    var expernum = parseInt(wx.getStorageSync('exper'));
    if (huml >= 20 && huml <= 30) {
      wx.setStorageSync('exper', expernum + 2);
    }
    else if (huml >= 30 && huml <= 35) {
      wx.setStorageSync('exper', expernum + 5);
    }
    else {
      wx.setStorageSync('exper', expernum +1);
    };
    this.setData({
      exper: app.globalData.expe
    })
  },
  //设置安抚值
  buttonSet: function (button) {
    var expernum = wx.getStorageSync('exper');
    if (button == 1) {
      wx.setStorageSync('exper', expernum - 10);
    }
    else {
      wx.setStorageSync('exper', expernum);
    }
    // else {
    //   wx.setStorageSync('exper', expernum - 1);
    // };
    this.setData({
      levelq: app.globalData.level
    })

  },
  level: function (expe) {
    if (expe <= 100) {
      app.globalData.level = 1
    } else if (expe > 100 && expe <= 200) {
      app.globalData.level = 2
    } else if (expe > 200 && expe <= 300) {
      app.globalData.level = 3
    } else if (expe > 300 && expe <= 400) {
      app.globalData.level = 4
    } else if (expe > 400 && expe <= 500) {
      app.globalData.level = 5
    } else if (expe > 500 && expe <= 1000) {
      app.globalData.level = 6
    } else if (expe > 1000 && expe <= 2000) {
      app.globalData.level = 7
    } else if (expe > 2000 && expe <= 5000) {
      app.globalData.level = 8
    } else if (expe > 5000 && expe <= 10000) {
      app.globalData.level = 9
    } else if (expe > 10000) {
      app.globalData.level = 10
    }
    this.setData({
      levelq: app.globalData.level
    })
  },
  level_: function (level, expe) {
    switch (level) {
      case 1:
        if (app.globalData.expe >= 10) {
          app.globalData.expe = 0;
          app.globalData.level++;
        }
      case 2:
        if (app.globalData.expe >= 20) {
          app.globalData.expe = 0;
          app.globalData.level = app.globalData.level + 1;
        }
      case 3:
        if (app.globalData.expe >= 50) {
          app.globalData.expe = 0;
          app.globalData.level = app.globalData.level + 1;
        }
      case 4:
        if (app.globalData.expe >= 100) {
          app.globalData.expe = 0;
          app.globalData.level = app.globalData.level + 1;
        }
      case 5:
        if (app.globalData.expe >= 150) {
          app.globalData.expe = 0;
          app.globalData.level = app.globalData.level + 1;
        }
      case 6:
        if (app.globalData.expe >= 200) {
          app.globalData.expe = 0;
          app.globalData.level = app.globalData.level + 1;
        }
      case 7:
        if (app.globalData.expe >= 250) {
          app.globalData.expe = 0;
          app.globalData.level = app.globalData.level + 1;
        }
      case 8:
        if (app.globalData.expe >= 250) {
          app.globalData.expe = 0;
          app.globalData.level = app.globalData.level + 1;
        }
      case 9:
        if (app.globalData.expe >= 500) {
          app.globalData.expe = 0;
          app.globalData.level = app.globalData.level + 1;
        }
      case 10:
        if (app.globalData.expe >= 1000) {
          app.globalData.expe = 0;
          app.globalData.level = app.globalData.level + 1;
        }
    }
    //app.globalData.level = 2
    //console.log(app.globalData.level);
    //console.log(app.globalData.expe);
    var page = this
    // app.globalData.expe =6
    var exper = app.globalData.expe
    var levelq = app.globalData.level
    page.setData({ exper: exper })
    page.setData({ levelq: levelq })
    var percentNum = exper
    page.setData({ percentNum: percentNum })
  },
})

















// var categories = [];

// var humidity = [];

// var light = [];

// var tempe = [];



// var length = app.globalData.light.datapoints.length

// for (var i = 0; i < length; i++) {

//   categories.push(app.globalData.humidity.datapoints[i].at.slice(11, 19));

//   humidity.push(app.globalData.humidity.datapoints[i].value);

//   light.push(app.globalData.light.datapoints[i].value);

//   tempe.push(app.globalData.temperature.datapoints[i].value);

// }

// return {

//   categories: categories,

//   humidity: humidity,

//   light: light,

//   tempe: tempe

// }







  // convert: function () {
  //   var categories = [];
  //   var humidity = [];
  //   var light = [];
  //   var tempe = [];
  //   var button = [];

  //   var length = app.globalData.light.datapoints.length
  //   for (var i = 0; i < length; i++) {
  //     categories.push(app.globalData.humidity.datapoints[i].at.slice(11, 19));
  //     humidity.push(app.globalData.humidity.datapoints[i].value);
  //     light.push(app.globalData.light.datapoints[i].value);
  //     tempe.push(app.globalData.temperature.datapoints[i].value);
  //     button.push(app.globalData.button.datapoints[i].value);
  //   }
  //   return {
  //     categories: categories,
  //     humidity: humidity,
  //     light: light,
  //     tempe: tempe,
  //     button: button,
  //   }
  // },


  //setDate({ app.globalData.light})
        //跳转到天气页面，根据拿到的数据绘图
        /*wx.navigateTo({
          url: '../wifi_station/tianqi/tianqi',
        })*/



      // setData: function(){
      //   var that = this;
      //   that.setData({
      //     message: '新消息'
      //   })
      // },


// cat_final: function cat_final() {
//   touch_h(touc, expe),
//     humlity_l(huml, expe),
//     light_n(ligh, expe),
//     tempeture_n(temp, expe),
//     level_(level, expe)
// },




//   getDataFromOneNet_2: function () {

//     //从oneNET请求我们的Wi-Fi气象站的数据

//     const requestTask = wx.request({

//       url: '/api.heclouds.com/devices/20470730/datapoints?datastream_id=Light,Temperature,Humidity&limit=15',

//       header: {

//         'content-type': 'application/json',

//         'api-key': 'JTmypYgjhw2B=GcuqZhlmxjlpZc='

//       },

//       success: function (res) {

//         //console.log(res.data)

//         //拿到数据后保存到全局数据

//         var app = getApp()

//         // app.globalData.temperature = res.data.data.datastreams[0]

//         app.globalData.expe = res.data.data.datastreams[1].value

//         // app.globalData.humidity = res.data.data.datastreams[2]

//         console.log(app.globalData.light)

//         //跳转到天气页面，根据拿到的数据绘图



//       },



// fail: function (res) {

//   console.log("fail!!!")

// },



// complete: function (res) {

//   console.log("end")

// }

//     })

//   },






// getDataFromOneNet_2: function () {

//   //从oneNET请求我们的Wi-Fi气象站的数据

//   const requestTask = wx.request({

//     url: '/api.heclouds.com/devices/20470730/datapoints?datastream_id=Light,Temperature,Humidity&limit=15',

//     header: {

//       'content-type': 'application/json',

//       'api-key': 'JTmypYgjhw2B=GcuqZhlmxjlpZc='

//     },

//     success: function (res) {

//       //console.log(res.data)

//       //拿到数据后保存到全局数据

//       var app = getApp()

//       // app.globalData.temperature = res.data.data.datastreams[0]

//       app.globalData.expe = 10

//       // app.globalData.humidity = res.data.data.datastreams[2]

//       console.log(app.globalData.light)

//       //跳转到天气页面，根据拿到的数据绘图



//     },



//     fail: function (res) {

//       console.log("fail!!!")

//     },



//     complete: function (res) {

//       console.log("end")

//     }

//   })

// },