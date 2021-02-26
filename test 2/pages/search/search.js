//index.js
//获取应用实例
// const app = getApp()

Page({
    data: {
        tabs: [{
                id: 0,
                name: "当前医生",
                isactive: true
            },
            {
                id: 1,
                name: "建议列表",
                isactive: false
            }
        ],
        my_doc:{downloadimgs:["../../icon/1.jpg"],text:"赵医生"}
    },
    itemChange(e) {
        //console.log(e);
        const { index } = e.detail;
        let tabs = this.data.tabs;
        tabs.forEach((v, i) => i === index ? v.isactive = true : v.isactive = false);
        this.setData({
            tabs
        })
    }
})