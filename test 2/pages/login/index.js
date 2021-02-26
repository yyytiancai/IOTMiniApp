//index.js
//获取应用实例
const app = getApp()
const DB = wx.cloud.database().collection("USER")
let mynote = []
let userdata = [];
Page({
    data: {
        users: [],
        mode:-1,
        itemList:['病人', '医生'],
        user:null,
        index: null,
        defaultimg: "/icon/LOGO.jpg",
        my_likes:[],
        my_collects:[],
        current_index:null,
        ready: false,
        motto: 'Hello World',
        my_note: [],
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        tabs: [{
                id: 0,
                name: "检测情况",
                isactive: false
            },
            {
                id: 1,
                name: "基本信息",
                isactive: false
            }
        ]
    },
    // cloud_get_mynote() {
    //     var _this = this;
    //     // console.log("openid", _this.data.userInfo);
    //     wx.cloud.callFunction({
    //         name: "get_my_note",
    //         data: {
    //             open_id: _this.data.userInfo.open_ID
    //         },
    //         success: function(res) {
    //             userdata = res.result.data;
    //             let mylikes=[];
    //             let mycollects=[];
    //             let user=_this.data.userInfo.open_ID
    //             console.log(userdata.length)
    //             for(var i=0;i<userdata.length;i++){
    //                 if(userdata[i].hasOwnProperty("likes"))
    //                 {
    //                     //console.log("yes")
    //                     let likelist=userdata[i].like_list
    //                     console.log("user",user)
    //                     if(userdata[i].hasOwnProperty("like_list"))
    //                     {
    //                     if(likelist.includes(user)){
    //                         //mylikes[i]=true
    //                         userdata[i].my_likes=true
    //                     }
    //                 }
    //                 else{
    //                     userdata[i]["like_list"]=[]
    //                 }
    //                 }
    //                 else{
    //                     userdata[i]["likes"]=0;
    //                     userdata[i]["like_list"]=[]
    //                     console.log("no")
    //                 }
    //                 if(userdata[i].hasOwnProperty("collects"))
    //                 {
    //                     console.log("yes")
    //                     let collectlist=userdata[i].collect_list
    //                     console.log("user",user)
    //                     if(userdata[i].hasOwnProperty("collect_list"))
    //                     {
    //                     if(collectlist.includes(user)){
    //                        // mycollects[i]=true
    //                         userdata[i].my_collects=true
    //                     }
    //                 }
    //                 else{
    //                     userdata[i]["collect_list"]=[]
    //                 }
    //                 }
    //                 else{
    //                     userdata[i]["collects"]=0;
    //                     userdata[i]["collect_list"]=[]
    //                     console.log("no")
    //                 }
    //                 if(userdata[i].hasOwnProperty("comments"))
    //                 {
    //                     console.log("yes")
    //                 }
    //                 else{
    //                     userdata[i]["comments"]=0;
    //                     console.log("no")
    //                 }
    //                 if(userdata[i].hasOwnProperty("my_likes"))
    //                 {
    //                     console.log("yes")
    //                     mylikes.push(userdata[i].my_likes);
    //                    // continue;
    //                 }
    //                 else{
    //                     userdata[i]["my_likes"]=false;
    //                     mylikes.push(false);
    //                     console.log("no")
    //                 }
    //                 if(userdata[i].hasOwnProperty("my_collects"))
    //                 {
    //                     console.log("yes")
    //                     mycollects.push(userdata[i].my_collects);
    //                    // continue;
    //                 }
    //                 else{
    //                     userdata[i]["my_collects"]=false;
    //                     mycollects.push(false);
    //                     console.log("no")
    //                 }
    //             }
    //             _this.setData({
    //                 my_note: userdata,
    //                 my_likes:mylikes,
    //                 my_collects:mycollects
    //             })
    //             console.log("success", userdata,mycollects)
    //             // _this.setData({
    //             //     my_note: mynote
    //             // })
    //            // console.log("success", mynote)
    //         },
    //         fail(res) {
    //             console.log("fail", res)
    //         }
    //     })
    // },
    
    
    // cloudgetdata() {
    //     var _this = this;
    //     wx.cloud.callFunction({
    //         name: "get_from_database",
    //         data: {
    //             index: _this.data.index
    //         },
    //         success: function(res) {
    //             userdata = res.result.data;
    //             let mylikes=[];
    //             let mycollects=[];
    //             let user=_this.data.user
    //             console.log(userdata.length)
    //             for(var i=0;i<userdata.length;i++){
    //                 if(userdata[i].hasOwnProperty("likes"))
    //                 {
    //                     //console.log("yes")
    //                     let likelist=userdata[i].like_list
    //                     console.log("user",user)
    //                     if(userdata[i].hasOwnProperty("like_list"))
    //                     {
    //                     if(likelist.includes(user)){
    //                         //mylikes[i]=true
    //                         userdata[i].my_likes=true
    //                     }
    //                 }
    //                 else{
    //                     userdata[i]["like_list"]=[]
    //                 }
    //                 }
    //                 else{
    //                     userdata[i]["likes"]=0;
    //                     userdata[i]["like_list"]=[]
    //                     console.log("no")
    //                 }
    //                 if(userdata[i].hasOwnProperty("collects"))
    //                 {
    //                     console.log("yes")
    //                     let collectlist=userdata[i].collect_list
    //                     console.log("user",user)
    //                     if(userdata[i].hasOwnProperty("collect_list"))
    //                     {
    //                     if(collectlist.includes(user)){
    //                        // mycollects[i]=true
    //                         userdata[i].my_collects=true
    //                     }
    //                 }
    //                 else{
    //                     userdata[i]["collect_list"]=[]
    //                 }
    //                 }
    //                 else{
    //                     userdata[i]["collects"]=0;
    //                     userdata[i]["collect_list"]=[]
    //                     console.log("no")
    //                 }
    //                 if(userdata[i].hasOwnProperty("comments"))
    //                 {
    //                     console.log("yes")
    //                 }
    //                 else{
    //                     userdata[i]["comments"]=0;
    //                     console.log("no")
    //                 }
    //                 if(userdata[i].hasOwnProperty("my_likes"))
    //                 {
    //                     console.log("yes")
    //                     mylikes.push(userdata[i].my_likes);
    //                    // continue;
    //                 }
    //                 else{
    //                     userdata[i]["my_likes"]=false;
    //                     mylikes.push(false);
    //                     console.log("no")
    //                 }
    //                 if(userdata[i].hasOwnProperty("my_collects"))
    //                 {
    //                     console.log("yes")
    //                     mycollects.push(userdata[i].my_collects);
    //                    // continue;
    //                 }
    //                 else{
    //                     userdata[i]["my_collects"]=false;
    //                     mycollects.push(false);
    //                     console.log("no")
    //                 }
    //             }
    //             _this.setData({
    //                 users: userdata,
    //                 my_likes:mylikes,
    //                 my_collects:mycollects
    //             })
    //             console.log("success", userdata,mycollects)
    //         },
    //         fail(res) {
    //             console.log("fail", res)
    //         }
    //     })
    // },

    itemChange(e) {
        //console.log(e);
        const { index } = e.detail;
        let tabs = this.data.tabs;
        tabs.forEach((v, i) => i === index ? v.isactive = true : v.isactive = false);
        this.setData({
            tabs
        })
        
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onHide: function() {
        this.data.tabs[0].isactive = false;
    },
    onLoad: function () {
    
        if (app.globalData.userInfo) {
          this.setData({
            userInfo: app.globalData.userInfo,
            hasUserInfo: true
          })
        } else if (this.data.canIUse){
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
        let _this=this;
        wx.showActionSheet({
          itemList: _this.data.itemList,     
          success: function (res) {    
            if (!res.cancel) {    
              console.log(typeof res.tapIndex)//这里是点击了那个按钮的下标   
              _this.setData({
                mode:_this.data.itemList[res.tapIndex]
              })
            }
     
          }
     
        })
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