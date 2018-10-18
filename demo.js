const util = require('./index');

const demo = new util({
    database: 'iyuxy',
    table: 'comments',
    key: ['pageId', 'parentId'],
    path: 'db',
    column: {
        _id: 'TEXT',
        title: 'TEXT',
        url: 'TEXT',
        pageId: 'INTEGER',
        email: 'TEXT',
        nickname: 'TEXT',
        comment: 'TEXT',
        website: 'TEXT',
        parentId: 'TEXT',
        time: 'INTEGER'
    }
});

demo.selectData({pageId: 10, parentId: "1015125415027768785934"}, (data) => {
    console.log(data);
});
demo.insertData({
    "_id": "1015125415027768785932",
    "title": "About me",
    "url": "https://www.iyuxy.com/aboutme/",
    "pageId": 10,
    "froms": "985207224@qq.com",
    "nickname": "我有一万个名字",
    "comment": "UI推荐好评！",
    "website": "",
    "parentId": "1015125415027768785934",
    "time": 1512541502780
})
