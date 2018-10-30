// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currnum:0,
    imgheights: [],
    //图片宽度
    imgwidth: 750,
    like: [],
    blogList: [
      { id: "0", icon: "http://img2.imgtn.bdimg.com/it/u=2688546271,1508054677&fm=26&gp=0.jpg", acc: "离歌笑", date: "2017-01-01", hit: "12", scan: "520", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536240683&di=5b0040282cc56a019e956168f82d8d5d&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.banq.cn%2FUserFiles%2Fimage%2F20170316%2F20170316164614_0590.jpg", position: "深圳欢乐谷", label: ['夜', '日系'], like: false },
      { id: "1", icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535993115772&di=00dc3add55b42c34eaf22cbd5c09e850&imgtype=0&src=http%3A%2F%2Fdiy.qqjay.com%2Fu2%2F2014%2F1110%2Fa40d799f35de03f1ed007d2918772594.jpg", acc: "叶修", date: "2017-05-11", hit: "110", scan: "5220", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535645413457&di=648bc9553ebc60b3f4ca47458b28058b&imgtype=0&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F160722%2F9-160H2092Q0.jpg", position: "日本.京都", label: ['美女', '日系'], like: false },
      { id: "2", icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536587801&di=f6bbfa3e29ea8cfdc6857af6bc4109a5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170403%2F4f060ecab4354f9ea3700e9cd103a04d_th.jpeg", acc: "", date: "2017-10-01", hit: "1", scan: "520", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536240304&di=24ceb8fdeb6c7d00839b9d4bd655f489&imgtype=jpg&er=1&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180102%2F761d808e02ad47a591e20ec0f4ccc267.jpeg", position: "法国.巴黎", label: ['晴天', '浪漫', '日系'], like: false },
      { id: "3", icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536587765&di=65130a71c47a644e5cdc069be518fe48&imgtype=jpg&er=1&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201611%2F13%2F20161113110506_ScT45.thumb.700_0.jpeg", acc: "李燕燕", date: "2018-01-21", hit: "41", scan: "1520", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535645681497&di=1cee9d213f90a1e02f610e78dc6d9874&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3688421145%2C3018911299%26fm%3D214%26gp%3D0.jpg", position: "北京故宫", label: ['少女', '历史博物馆', '日系'], like: false },
      { id: "4", icon: "http://puui.qpic.cn/vstar_pic/0/name_77904_688t1467970955.jpg/0", acc: "胡歌", date: "2017-03-12", hit: "19", scan: "20", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535645760910&di=9fb8af83f1b566be02c5b77aaf6bd9bc&imgtype=0&src=http%3A%2F%2Fimg19.3lian.com%2Fd%2Ffile%2F201801%2F09%2Fd1a6b95ffad9e480309d175f67f28cae.png", position: "深圳大学", label: ['学生', '大学', '日系'], like: false },
      { id: "5", icon: "http://img4.imgtn.bdimg.com/it/u=3954955335,3347962145&fm=26&gp=0.jpg", acc: "刘亦菲", date: "2018-08-09", hit: "10", scan: "5230", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536240551&di=cfcc099ef8129f8b48048c00e250198d&imgtype=jpg&er=1&src=http%3A%2F%2Fp.chanyouji.cn%2F173375%2F1413814113941p194mu69ogork2pml9h1odg1cmh5.jpg", position: "土耳其", label: ['情侣', '日系'], like: false },
    ],

    swiperList: ['https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/swiper5.jpg',
     'https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/swiper2.jpg', 
     'https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/swiper3.jpg',
      'https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/swiper4.jpg',
    'https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/swiper1.jpg'
    ],
    imgGroup:[
      { author: "随风@V@", text: "今日早餐，蘑菇酱什锦拌面。给自己做了面，加了不少材料，好吃。她也知道自己未来的方向，老公总说我太宠孩子，但我看到她的努力，总是在进步的，这样就是向好的方向发展。", img: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/blog1.jpg" },
      { author: "会笑的猫", text: "猫毛过敏患者精神和肉体的痛楚，只有自己知道，^_^||（2014）", img: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/blog2.png" },
      { author: "张娇", text: "你好，我再等着未知的你.....", img: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/blog3.jpg" },
      { author: "武藤兰", text: "NIPPON関西游记 — 古“京”掠影「九番」", img: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/blog4.jpg" },
      { author: "陈静", text: "看到海就迫不及待脱下鞋，一路小跑到海边，脚丫被沙子烫得嗷嗷叫。", img: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/blog5.jpg" },
      {
        author: "关顾", text: "恵比寿コンテナ \n地址: 東京都渋谷区恵比寿西1 - 4 - 5 \n最近车站: JR / 地铁 恵比寿", img: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/blog6.jpg" },
    ],
    foodList: [
      { id: "0", icon: "http://puui.qpic.cn/vstar_pic/0/name_77904_688t1467970955.jpg/0", acc: "小溪", date: "2017-01-01", hit: "0", scan: "1", img: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/food1.jpg", position: "家", label: ['Q', '可爱'], like: false },
      { id: "1", icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535993115772&di=00dc3add55b42c34eaf22cbd5c09e850&imgtype=0&src=http%3A%2F%2Fdiy.qqjay.com%2Fu2%2F2014%2F1110%2Fa40d799f35de03f1ed007d2918772594.jpg", acc: "小可爱", date: "2017-05-11", hit: "110", scan: "5220", img: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/food2.jpg", position: "日本.京都", label: ['美食', '日系'], like: false },
      { id: "2", icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536587801&di=f6bbfa3e29ea8cfdc6857af6bc4109a5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170403%2F4f060ecab4354f9ea3700e9cd103a04d_th.jpeg", acc: "啦啦啦鸡", date: "2017-10-01", hit: "1", scan: "520", img: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/food3.jpg", position: "中国四川", label: ['麻婆豆腐', '传统'], like: false },
      { id: "3", icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536587765&di=65130a71c47a644e5cdc069be518fe48&imgtype=jpg&er=1&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201611%2F13%2F20161113110506_ScT45.thumb.700_0.jpeg", acc: "李燕燕", date: "2018-01-21", hit: "41", scan: "1520", img: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/food4.jpg", position: "北京", label: ['汤品', '营养味道', '家常小菜'], like: false },
      { id: "4", icon: "http://img2.imgtn.bdimg.com/it/u=2688546271,1508054677&fm=26&gp=0.jpg", acc: "黄晓明", date: "2017-03-12", hit: "19", scan: "20", img: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/food5.jpg", position: "酒店", label: ['早点'], like: false },
      
    ],
    animalList: [
      { id: "0", icon: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/blog3.jpg", acc: "小溪", date: "2017-01-01", hit: "0", scan: "1", img: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/animal5.jpg", position: "日本奈良", label: ['Q', '可爱'], like: false },
      { id: "1", icon: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/blog5.jpg", acc: "anson", date: "2017-05-11", hit: "110", scan: "5220", img: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/animal1.jpg", position: "澳大利亚", label: ['树熊'], like: false },
      { id: "2", icon: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/blog2.png", acc: "一道青烟", date: "2017-10-01", hit: "1", scan: "520", img: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/animal2.jpg", position: "日本猫岛", label: ['猫咪', '萌宠'], like: false },
      { id: "3", icon: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/swiper1.jpg", acc: "李燕", date: "2018-01-21", hit: "41", scan: "1520", img: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/animal3.jpg", position: "草原", label: ['麋鹿', '王者风范', '黄昏'], like: false },
      { id: "4", icon: "http://img2.imgtn.bdimg.com/it/u=2688546271,1508054677&fm=26&gp=0.jpg", acc: "黄明", date: "2017-03-12", hit: "19", scan: "20", img: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/animal4.jpg", position: "酒店", label: ['旅行'], like: false },

    ],
    videoGroup: [
      { isPlaying: false, type: 1, author: "随风@V@", text: "《一次就好》在夏天遮挡出一片绿荫", src: "http://video.pearvideo.com/mp4/third/20180620/cont-1371403-11549784-192637-hd.mp4", minsrc:"https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/v1.jpg" },
      { isPlaying: false, type: 1, author: "会笑的猫", text: "纸短情长翻唱版！", src: "http://video.pearvideo.com/mp4/third/20180829/cont-1423415-10874981-185515-hd.mp4", minsrc: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/v2.jpg"  },
      { isPlaying: false, type: 1, author: "张娇", text: "《秘密花园》GNZ48版", src: "http://video.pearvideo.com/mp4/third/20180906/cont-1429311-10428087-162143-hd.mp4", minsrc: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/v3.png"  },
      { isPlaying: false, type: 1, author: "武藤兰", text: "SNH48 GROUP《READY！GO！》", src: "http://video.pearvideo.com/mp4/third/20180815/cont-1412327-10240000-105905-hd.mp4", minsrc: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/v4.png"  },
      { isPlaying: false, type: 1, author: "陈静", text: "MV《心事》", src: "http://video.pearvideo.com/mp4/third/20180807/cont-1406267-11278322-142603-hd.mp4", minsrc: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/v5.jpg"  },
      {
        isPlaying: false, type: 1, author: "关顾", text: "《慢慢喜欢你》习谱予cover", src: "http://video.pearvideo.com/mp4/third/20180731/cont-1400782-11304750-123251-hd.mp4", minsrc: "https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/v6.png" 
      },
    ],
    videoH:[],
    swiperList: ['https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/swiper5.jpg',
      'https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/swiper2.jpg',
      'https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/swiper3.jpg',
      'https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/swiper4.jpg',
      'https://lg-0xborurq-1251997706.cos.ap-shanghai.myqcloud.com/swiper1.jpg'
    ],
  },
  menuClick:function(e){
    var  no = e.currentTarget.dataset.num;
    no = parseInt(no);
    this.setData({currnum:no});
    this.checkCor();
  },
  checkCor: function () {
    
    if (this.data.currnum > 2) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  tolike: function (e) {
    var types = e.target.dataset.type;
    var id = e.target.dataset.id;
    var state = e.target.dataset.obj.like;
    var array, str;
    switch (types) {
      case "left":
        array = this.data.blogList;
        str = "blogList";
        break;
      case "right":
        array = this.data.likeList;
        str = "likeList";
        break;
    }
  array.forEach((item, index, arr) => {
      if (item.id == id) {
        var cur = str + "[" + index + "].like"//这里需要将设置的属性用字符串进行拼接
        if (state) {
          this.setData({ [cur]: false });
        } else {
          this.setData({ [cur]: true });
        }
      }
    })


  },
  imageLoad: function (e) {
    //获取图片真实宽度
     
    var imgwidth = e.detail.width,
        imgheight = e.detail.height,
      //宽高比
      ratio = imgwidth / imgheight;
    console.log(imgwidth, imgheight)
    //计算的高度值
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight
    var imgheights = this.data.imgheights;
    console.log(750, imgheight,"new")
    //把每一张图片的高度记录到数组里
    imgheights.push(imgheight)
    this.setData({
      imgheights: imgheights,
    })
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:' + e.detail.errMsg);
  },
  playVideo:function(e) {
   
    var i = e.currentTarget.dataset.index;
    var item = e.currentTarget.dataset.item
     
     var arr = this.data.videoGroup;
    for(var j=0;j<arr.length;j++){
      var Str = 'videoGroup[' + j + '].isPlaying';
      if(i==j){
        this.setData({
          [Str]: true,
        })
      }else{
        this.setData({
          [Str]: false,
        })
      }
       
    }
     
    let videoContext = wx.createVideoContext(`video-${i}`)
    videoContext.play() 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  /**
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
  
  }
})