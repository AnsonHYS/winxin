// pages/myBlog/myBlog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    blogList: [
      { date: "2017-01-01", hit:"12",scan:"520", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536240683&di=5b0040282cc56a019e956168f82d8d5d&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.banq.cn%2FUserFiles%2Fimage%2F20170316%2F20170316164614_0590.jpg", position: "深圳欢乐谷", label: ['夜', '日系']},
      { date: "2017-05-11", hit: "110", scan: "5220", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535645413457&di=648bc9553ebc60b3f4ca47458b28058b&imgtype=0&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F160722%2F9-160H2092Q0.jpg", position: "日本.京都", label: ['美女', '日系'] },
      { date: "2017-10-01", hit: "1", scan: "520", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536240304&di=24ceb8fdeb6c7d00839b9d4bd655f489&imgtype=jpg&er=1&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180102%2F761d808e02ad47a591e20ec0f4ccc267.jpeg", position: "法国.巴黎", label: ['晴天','浪漫', '日系'] },
      { date: "2018-01-21", hit: "41", scan: "1520",img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535645681497&di=1cee9d213f90a1e02f610e78dc6d9874&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3688421145%2C3018911299%26fm%3D214%26gp%3D0.jpg", position: "北京故宫", label: ['少女','历史博物馆', '日系'] },
      { date: "2017-03-12", hit: "19", scan: "20", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535645760910&di=9fb8af83f1b566be02c5b77aaf6bd9bc&imgtype=0&src=http%3A%2F%2Fimg19.3lian.com%2Fd%2Ffile%2F201801%2F09%2Fd1a6b95ffad9e480309d175f67f28cae.png", position: "深圳大学", label: ['学生','大学', '日系'] },
      { date: "2018-08-09", hit: "10", scan: "5230", img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536240551&di=cfcc099ef8129f8b48048c00e250198d&imgtype=jpg&er=1&src=http%3A%2F%2Fp.chanyouji.cn%2F173375%2F1413814113941p194mu69ogork2pml9h1odg1cmh5.jpg", position: "土耳其", label: ['情侣', '日系'] },
      ]
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