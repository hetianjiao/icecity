// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected:0,
    cost:0,
    menu: [
      { 
        id: '1', 
        typeName: '饮料' ,
        menuContent:[
          { name: '炸鸡', sales: 22, rating: 3, price: 15, src: "../../pages/images/my-selected.png", numb:0}
        ]
        
      }, 
      { id: '2', typeName: '小食品' }, 
      { id: '3', typeName: '面包' }],
  },
  addToTrolley:function(e){
    var info=this.data.menu;
    var content=info[this.data.selected].menuContent[e.currentTarget.dataset.index];
    content.numb++;
    this.setData({
      cost: this.data.cost + content.price,
      menu:info
    });
  },
  removeFromTrolley:function(e){
    var info = this.data.menu;
    var content = info[this.data.selected].menuContent[e.currentTarget.dataset.index];
    content.numb--;
    this.setData({
      cost: this.data.cost - content.price,
      menu: info
    });
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

  },
  turnMenu: function (e) {
    this.setData({
      selected: e.currentTarget.dataset.index
    })    
  }
})