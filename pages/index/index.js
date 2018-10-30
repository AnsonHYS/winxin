// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    winWidth: 0,
    winHeight: 0,
    like:[],
    blogList: [
      { id: "0", icon: "http://img2.imgtn.bdimg.com/it/u=2688546271,1508054677&fm=26&gp=0.jpg", acc: "离歌笑", date: "2017-01-01", hit: "12", scan: "520", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536240683&di=5b0040282cc56a019e956168f82d8d5d&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.banq.cn%2FUserFiles%2Fimage%2F20170316%2F20170316164614_0590.jpg", position: "深圳欢乐谷", label: ['夜', '日系'], like:false},
      { id: "1", icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535993115772&di=00dc3add55b42c34eaf22cbd5c09e850&imgtype=0&src=http%3A%2F%2Fdiy.qqjay.com%2Fu2%2F2014%2F1110%2Fa40d799f35de03f1ed007d2918772594.jpg", acc: "叶修", date: "2017-05-11", hit: "110", scan: "5220", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535645413457&di=648bc9553ebc60b3f4ca47458b28058b&imgtype=0&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F160722%2F9-160H2092Q0.jpg", position: "日本.京都", label: ['美女', '日系'] ,like: false},
      { id: "2", icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536587801&di=f6bbfa3e29ea8cfdc6857af6bc4109a5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170403%2F4f060ecab4354f9ea3700e9cd103a04d_th.jpeg", acc: "", date: "2017-10-01", hit: "1", scan: "520", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536240304&di=24ceb8fdeb6c7d00839b9d4bd655f489&imgtype=jpg&er=1&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180102%2F761d808e02ad47a591e20ec0f4ccc267.jpeg", position: "法国.巴黎", label: ['晴天', '浪漫', '日系'], like: false },
      { id: "3", icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536587765&di=65130a71c47a644e5cdc069be518fe48&imgtype=jpg&er=1&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201611%2F13%2F20161113110506_ScT45.thumb.700_0.jpeg", acc: "李燕燕", date: "2018-01-21", hit: "41", scan: "1520", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535645681497&di=1cee9d213f90a1e02f610e78dc6d9874&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3688421145%2C3018911299%26fm%3D214%26gp%3D0.jpg", position: "北京故宫", label: ['少女', '历史博物馆', '日系'],like: false },
      { id: "4", icon: "http://puui.qpic.cn/vstar_pic/0/name_77904_688t1467970955.jpg/0", acc: "胡歌", date: "2017-03-12", hit: "19", scan: "20", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535645760910&di=9fb8af83f1b566be02c5b77aaf6bd9bc&imgtype=0&src=http%3A%2F%2Fimg19.3lian.com%2Fd%2Ffile%2F201801%2F09%2Fd1a6b95ffad9e480309d175f67f28cae.png", position: "深圳大学", label: ['学生', '大学', '日系'], like: false },
      { id: "5", icon: "http://img4.imgtn.bdimg.com/it/u=3954955335,3347962145&fm=26&gp=0.jpg", acc: "刘亦菲", date: "2018-08-09", hit: "10", scan: "5230", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536240551&di=cfcc099ef8129f8b48048c00e250198d&imgtype=jpg&er=1&src=http%3A%2F%2Fp.chanyouji.cn%2F173375%2F1413814113941p194mu69ogork2pml9h1odg1cmh5.jpg", position: "土耳其", label: ['情侣', '日系'], like: false  },
    ],
    likeList: [
      { id: "0", icon: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535993060170&di=1f900228b51c8510d14239c6353cd507&imgtype=0&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F170510%2F011951J94-6.jpg", acc: "北野武", date: "2017-01-01", hit: "12", scan: "520", img: "http://photos.tuchong.com/518394/f/26555526.jpg", position: "北海道", label: ['夜', '日系'], like: false  },
      { id: "1", icon: "http://img2.ph.126.net/DIs2CQ66HrQN5nQ77uiKpg==/3239495507063301956.jpg", acc: "陈静", date: "2017-05-11", hit: "110", scan: "5220", img: "http://img0.imgtn.bdimg.com/it/u=3539140565,2137352783&fm=26&gp=0.jpg", position: "日本.京都", label: ['爱心', '日系'], like: false  },
      { id: "2", icon: "http://img5.imgtn.bdimg.com/it/u=3746078799,1151077104&fm=11&gp=0.jpg", acc: "新桓结衣", date: "2017-10-01", hit: "1", scan: "520", img: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180712/18edd885b4cd4c7aa7092131e2e13b23.jpeg", position: "东京", label: ['晴天', '浪漫', '日系'], like: false },
  
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     
    var page = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
       
        page.getHeights();
        page.setData({ winWidth: res.windowWidth });
        
      },
    })
  },
  tab: function (e) {
    if (this.data.currentTab == e.target.dataset.current) {
      return false;
    } else {
      this.setData({ currentTab: e.target.dataset.current });
    }
  },
 getHeights:function(){
   var len = this.data.blogList.length;
   this.setData({ winHeight: len*365 });
 },
  tolike:function(e){
    var types = e.target.dataset.type;
    var id = e.target.dataset.id;
    var state = e.target.dataset.obj.like;
    var array,str;
    switch (types){
      case"left":
        array = this.data.blogList;
        str = "blogList";
      break;
      case "right":
        array = this.data.likeList;
        str = "likeList";
        break;
    }
     
  
    array.forEach((item, index, arr) => {
      if (item.id==id){
       var cur = str+"[" + index + "].like"//这里需要将设置的属性用字符串进行拼接
        if(state){
          this.setData({ [cur]: false});
        }else{
          this.setData({ [cur]: true });
        }
      }
      })


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