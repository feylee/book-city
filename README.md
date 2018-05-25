# book-city
### 书城简介
- 组成

1.首页
2.搜索页
3.详情页
4.阅读页




#### 查询首页数据
>/book/index

```
{
    items:[{
        "add_name":内容范围,
        "data":{
            "data":数据内容
        }
    }]
}
```
-首页上拉加载数据
>/book/list
1.数据格式
```
{
    items:[{
        "add_name":内容范围,
        "data":{
            "data":数据内容
        }
    }]
}
```

2.传递数据
```
pagenum"页码,
limit:条数
```

#### 搜索页
- 搜索页热门数据

>/book/searchkey

```
{
    ads:[{
        "ad_name"":热门书名
    }]
}
```
- 搜索页数据

>/book/search

```
{
    items:[{
        "title"：书名,
        "cover":图片路径,
        "intro":简介
    }]
}
```


