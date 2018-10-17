# easy-sqlite

A simple tool for nodejs to use sqlite

## How to use

### install by npm

```bash
npm i --save easy-sqlite

```

### use

```javascript
const EASY_SQLITE = require('easy-sqlite');

EASY_SQLITE.selectData({pageId: 10}, (data) => {
    console.log(data);
});
EASY_SQLITE.insertData({
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
