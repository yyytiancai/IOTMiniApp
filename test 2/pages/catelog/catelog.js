// pages/catelog/catelog.js
var localData = require("../catelog/data.js");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        left_list: [],
        right_content: [],
        current: 0,
        scrollTOP: 0

    },
    Cates: [],
    handleindex(e) {
        const { index } = e.currentTarget.dataset;
        let right_content = localData.dataList[index].children;
        this.setData({
            current: index,
            right_content,
            scrollTOP: 0
        })

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const Cates = wx.getStorageSync("cates");
        if (!Cates) {
            this.Cates = localData.dataList;
            wx.setStorageSync("cates", { time: Date.now(), data: this.Cates });
            let left_list = localData.dataList.map(v => v.cat_name);
            let right_content = localData.dataList[0].children;
            this.setData({
                left_list,
                right_content
            })
        } else {
            if (Date.now() - Cates.time > 1000 * 10) {
                this.Cates = localData.dataList;
                wx.setStorageSync("cates", { time: Date.now(), data: this.Cates });
                let left_list = localData.dataList.map(v => v.cat_name);
                let right_content = localData.dataList[0].children;
                this.setData({
                    left_list,
                    right_content
                })
            } else {
                this.Cates = localData.dataList;
                // wx.setStorageSync("cates", { time: Date.now(), data: this.Cates });
                let left_list = localData.dataList.map(v => v.cat_name);
                let right_content = localData.dataList[0].children;
                this.setData({
                    left_list,
                    right_content
                })
            }
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