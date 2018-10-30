Page({
  data: {
    disabled: true,
    isShow:true,
    date:"2000-01-01",
    btnstate: "default",
    items: [
       { name: 'male', value: '男', checked: 'true' },
       { name: 'female', value: '女' },
      
    ]
  },
  accountblur: function (e) {
    var content = e.detail.value;
    if (content != "") {
      this.setData({ disabled: false, btnstate: "primary" });
    } else {
      this.setData({ disabled: true, btnstate: "default" });
    }
  },
  switchChange: function (e) {
    this.setData({ isShow: !e.detail.value}); 
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  radioChange: function (e) {
 
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  formSubmit: function (e) {
    console.log(e);
    var user = new Object();
    user.account = e.detail.value.loginName;
    user.password = e.detail.value.password;
    user.company = e.detail.value.company;
    user.userName = e.detail.value.userName;
    user.code = e.detail.value.code;
    user.mobile = e.detail.value.mobile;
    user.switch = e.detail.value.switch;
    wx.setStorageSync('user', user);
    wx.showToast({
      title: "保存",
      icon: "success",
      duration: 1000,
      success: function () {
        wx.navigateTo({
          url: '../login/login'
        })
      }
    });
  }
})