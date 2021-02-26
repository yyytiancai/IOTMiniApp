//app.js
App({
    //应用第一次启动就会触发的事件
    onLaunch: function() {
        //云开发初始化
        wx.cloud.init({
                env: 'cloud-rfgj8'
            })
            // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
                // console.log(res);
                wx.cloud.callFunction({
                    name: "getopenid",
                    success: res => {
                        this.globalData.open_ID = res.result.openid;
                        console.log("success", res.result.openid)
                    },
                    fail(res) {
                        console.log("fail", res)
                    }
                })
            }
        })
        wx.cloud.callFunction({
                name: "getopenid",
                success: res => {
                    this.globalData.open_ID = res.result.openid;
                    console.log("success", res.result.openid)
                },
                fail(res) {
                    console.log("fail", res)
                }
            })
            // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {

                    // this.get_open_id();
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo
                            this.globalData.userInfo["open_ID"] = this.globalData.open_ID
                                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                                // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
    },
    get_open_id() {
        wx.cloud.callFunction({
            name: "getopenid",
            success(res) {
                console.log("success", res.result.openid)
            },
            fail(res) {
                console.log("fail", res)
            }
        })
    },
    globalData: {
        userInfo: null,
        open_ID: ""
    }

})