# easy-sqlite

A simple tool for nodejs to use sqlite

## How to use

### Install by Npm

```bash
npm i --save easy-sqlite3

```

### Use

```javascript
const EASY_SQLITE3 = require('easy-sqlite3');

// 使用默认库表字段配置
const EASY_SQLITE3_DEMO = new EASY_SQLITE3();

// 自定义库表字段配置
const EASY_SQLITE3_DEMO = new EASY_SQLITE3({
    // 数据文件存放路径,相对于运行根目录
    path: 'db',
    // 数据库名称
    database: 'iyuxy',
    // 表名称
    table: 'comments',
    // select字段，支持使用[]配置多个字段进行查询
    key: ['pageId'],
    // 表结构示例
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

// 查询关键字需要在conf中配置
EASY_SQLITE3_DEMO.selectData({pageId: 10}, (data) => {
    console.log(data);
});

// 插入是字段需要与表结构名称一致
EASY_SQLITE3_DEMO.insertData({
    "_id": "1015125415027768785934",
    "title": "About me",
    "url": "https://www.iyuxy.com/aboutme/",
    "pageId": 10,
    "froms": "985207224@qq.com",
    "nickname": "我有一万个名字",
    "comment": "UI推荐好评！",
    "website": "",
    "parentId": "0",
    "time": 1512541502780
})

```

## API

### selectData

### insertData


updateing...
