//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World！',
        userInfo: {},
        mode:-1,
        itemList:['病人', '医生'],
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        floor: [{
                id: 0,
                name: "早间数据",
                contain: [{
                        id_sec: 0,
                        name_sec: "2020-12-10 09:34",
                        Active: false
                    }

                ]
            },
            {
                id: 1,
                name: "晚间数据",
                contain: [{
                        id_sec: 0,
                        name_sec: "2020-12-10 19:23",
                        Active: false
                    }

                ]
            }
        ],
        
        tabs: [{
                id: 0,
                name: "蓝牙连接",
                isactive: true
            },
            {
                id: 1,
                name: "数据获取",
                isactive: false
            }
        ]
    },
    to() {
        wx.navigateTo({
            url: '/pages/upload/upload',
        })
    },
    itemChange(e) {
        //console.log(e);
        const { index } = e.detail;
        let tabs = this.data.tabs;
        tabs.forEach((v, i) => i === index ? v.isactive = true : v.isactive = false);
        this.setData({
            tabs
        })
    },
    c_itemChange(e) {
        // console.log(e);
        const { index } = e.detail;
        let cates1 = this.data.cates1;
        cates1.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
        this.setData({
                cates1
            })
            // cates1.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
        const target = '';
        switch (index) {
            case 0:
                //console.log(index);
                wx.navigateTo({
                    url: '../math/math',
                    success: function(res) {
                        console.log("success0");
                    },
                    fail: function() {
                        // fail
                    },
                    complete: function() {
                        // complete
                    }
                });
                break;

            case 1:
                //console.log(index);
                wx.navigateTo({
                    url: '../physics/physics',
                    success: function(res) {
                        console.log("success1");
                    },
                    fail: function() {
                        // fail
                    },
                    complete: function() {
                        // complete
                    }
                })
                break;
            case 2:
                //console.log(index);
                wx.navigateTo({
                    url: '../english/english',
                    success: function(res) {
                        console.log("success2");
                    },
                    fail: function() {
                        // fail
                    },
                    complete: function() {
                        // complete
                    }
                })
                break;
            case 3:
                //console.log(index);
                wx.navigateTo({
                    url: '../cs/cs',
                    success: function(res) {
                        console.log("success3");
                    },
                    fail: function() {
                        // fail
                    },
                    complete: function() {
                        // complete
                    }
                })
                break;
            case 4:
                //console.log(index);
                wx.navigateTo({
                    url: '../others/others',
                    success: function(res) {
                        console.log("success4");
                    },
                    fail: function() {
                        // fail
                    },
                    complete: function() {
                        // complete
                    }
                })
                break;
        }
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
        
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})