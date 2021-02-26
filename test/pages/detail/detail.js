// pages/detail/detail.js
const DB = wx.cloud.database().collection("USER")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id: null,
        detail: null,
        current: null,
        user:null,
        like:null,
        collect:null
    },
    get_current(e) {
        console.log(e.currentTarget.dataset);
        const { index } = e.currentTarget.dataset;
        this.setData({
            current: index
        })
        if (this.data.current != null) this.imgpre();
    },
    imgpre() {
        // console.log(e.currentTarget.dataset);
        let _this = this;
        var index = _this.data.current;
        console.log(_this.data.detail.downloadimgs);
        wx.previewImage({
            current: _this.data.detail.downloadimgs[index], // 当前显示图片的链接，不填则默认为 urls 的第一张
            urls: _this.data.detail.downloadimgs,
            success: function(res) {
                // success
                console.log(res)
            },
            fail: function() {
                // fail
            },
            complete: function() {
                // complete
            }
        })
    },
    my_likes(){
        var flag,like;
        if(this.data.like===1)flag=true;
        else flag=false;
        flag=!flag;
        if(flag)like=1;
        else like=0;
        let detail=this.data.detail;
        let id=this.data.id;
        let likes_now=detail.likes;
        if(flag)likes_now++;
        else likes_now--;
        detail.likes=likes_now;
        let username=this.data.user;
        var likelist=[];
        if(detail.hasOwnProperty("like_list"))
        {
            likelist=detail.like_list;
            if(flag)likelist.push(username);
            else likelist.pop(username);
        }
        else{
            if(flag)likelist.push(username);
            else likelist.pop(username);
        }
        DB.doc(id).update({
            data: {
                likes: likes_now,
                like_list:likelist
            },
            success(res) {
                console.log("更新成功", res)
            },
            fail(res) {
                console.log("更新失败", res)
            }
        })
        //console.log(id);
        this.setData({
            like:like,
            detail:detail
        })
       // console.log(this.data.users)
    },
    my_collects(){
        var flag,collect;
        if(this.data.collect===1)flag=true;
        else flag=false;
        flag=!flag;
        if(flag)collect=1;
        else collect=0;
        let detail=this.data.detail;
        let id=this.data.id;
        let collects_now=detail.collects;
        if(flag)collects_now++;
        else collects_now--;
        detail.collects=collects_now;
        let username=this.data.user;
        var collectlist=[];
        if(detail.hasOwnProperty("collect_list"))
        {
            collectlist=detail.collect_list;
            if(flag)collectlist.push(username);
            else collectlist.pop(username);
        }
        else{
            if(flag)collectlist.push(username);
            else collectlist.pop(username);
        }
        DB.doc(id).update({
            data: {
                collects: collects_now,
                collect_list:collectlist
            },
            success(res) {
                console.log("更新成功", res)
            },
            fail(res) {
                console.log("更新失败", res)
            }
        })
        //console.log(id);
        this.setData({
            collect:collect,
            detail:detail
        })
       // console.log(this.data.users)
    },
    getData() {
        var id = this.data.id;
        console.log("111111:",id);
        let _this = this;
        DB
        .where({
            _id: id
        }).get({
            success(res) {
                console.log("查询成功", res);
                var detail=res.data[0];
                if(!detail.hasOwnProperty("likes"))
                {
                    detail["likes"]=0;
                }
                if(!detail.hasOwnProperty("collects"))
                {
                    detail["collects"]=0;
                }
                _this.setData({
                    detail: detail
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // var like=[];
        // like[0]=options.mylikes;
        var like,collect;
        if(options.mylikes=='true')like=1;
        else like=0;
        if(options.mycollects=='true')collect=1;
        else collect=0;
        this.setData({
            id: options.id,
            user:options.user,
            like:like,
            collect:collect
        })
        console.log(options);
        if (this.data.id != null) {
            this.getData();
        }
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