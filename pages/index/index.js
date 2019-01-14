Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://47.105.139.205/1.png',
      'http://47.105.139.205/2.png',
      'http://47.105.139.205/3.png',
      'http://47.105.139.205/4.gif',
      'http://47.105.139.205/5.jpg'
    ],
    menuList:[
      {
        id:'m1',
        name:'新品',
        icon:'http://47.105.139.205/icon1.png',
        update:1
      },
      {
        id: 'm2',
        name:'粥/面',
        icon:'',
        update: 1
      },
      {
        id: 'm3',
        name: '饼干',
        icon: '',
        update:0
      },
      {
        id: 'm4',
        name: '水饮',
        icon: '',
        update:0
      },
      {
        id: 'm5',
        name: '零食',
        icon: '',
        update:0
      },
      {
        id: 'm6',
        name: '其他',
        icon: '',
        update:0
      }
    ],
    menu:[
      {
        commodityList:[
          {
            menuid:'m1',
            url:'http://47.105.139.205/s1.jpg',
            name:'可乐500ml瓶',
            price:2.99,
            count:0,
            newCommodity:true
          },
          {
            menuid: 'm1',
            url: 'http://47.105.139.205/s14.jpg',
            name: '无穷酱鸭腿孜然味',
            price: 3.50,
            count: 0,
            newCommodity: true
          },
          {
            menuid: 'm2',
            url: 'http://47.105.139.205/s9.jpg',
            name: '银鹭【桂圆莲子】',
            price: 4.49,
            count: 0
          },
          {
            menuid: 'm2',
            url: 'http://47.105.139.205/s10.jpg',
            name: '康师傅香辣牛肉面',
            price: 5.12,
            count: 0
          },
          {
            menuid: 'm2',
            url: 'http://47.105.139.205/s10.jpg',
            name: '康师傅香辣牛肉面',
            price: 5.12,
            count: 0
          }
          ,
          {
            menuid: 'm2',
            url: 'http://47.105.139.205/s10.jpg',
            name: '康师傅香辣牛肉面',
            price: 5.12,
            count: 0
          }
          ,
          {
            menuid: 'm2',
            url: 'http://47.105.139.205/s10.jpg',
            name: '康师傅香辣牛肉面',
            price: 5.12,
            count: 0
          }
          ,
          {
            menuid: 'm2',
            url: 'http://47.105.139.205/s10.jpg',
            name: '康师傅香辣牛肉面',
            price: 5.12,
            count: 0
          }
        ]
      }
    ],
    currentSwiper : 0,
    menuActive:0 
  },
  swiperChange:function(event){      
    this.setData({
      currentSwiper: event.detail.current
    });
  }, 
  menuClick:function(e){
    this.setData({
      menuActive: e.currentTarget.dataset.index
    });
  },
  addToTrolley:function(e){
    var info=this.data.menu;
    info[this.data.menuActive].commodityList[e.currentTarget.dataset.index].count++;
    this.setData({
      menu:info
    })
  },
  removeFromTrolley:function(e){
    var info = this.data.menu;
    info[this.data.menuActive].commodityList[e.currentTarget.dataset.index].count--;
    this.setData({
      menu: info
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})