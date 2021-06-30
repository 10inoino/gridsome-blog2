---
title: "20210630 DailyLog"
description: "20210630 DailyLog"
date: 2021-06-30
id: 13
blog_id: 13
---
# 記事
- [GitHubにAIプログラミング機能「Copilot」登場　関数名とコメントから中身を丸ごと自動補完](https://www.itmedia.co.jp/news/articles/2106/30/news063.html)
  - ついにここまで来ましたか…　要件定義のできない、ただひたすらコードを書くだけのエンジニアは淘汰されると前から言われては来ましたが、実際にプロダクトとして現実味を帯びてきたなぁ

ちなみにTwitterではこんな画像がバズる始末  
![copilot](./copilot.PNG)

# 調べた
## シャーディングって何？
- 水平分割とも呼ばれる
- 同じテーブルを複数のDBに用意して、各DB内に保存されるレコードの量を減らす方法
- [シャーディングとは、テーブルシャーディングという可能性【水平分割】](https://pecopla.net/web-column/db-shard)

## GridFSって何？
- MongoDBに16Mバイト以上のファイルを保存したい場合に使うインターフェース
- [MongoDBでゆるふわDB体験 - 第7回　GridFS─大容量のファイルをMongoDBに保存する仕組み](https://gihyo.jp/dev/serial/01/mongodb/0007)

## MongoDBについて
- 皆さんおなじみNoSQLのドキュメント思考データベース
- NoSQLなので、SQLは使用できない。クエリはJavaScriptで行う
- バックアップの方法は2種類
    - データファイルをコピーする
    - mongodumpを利用する
- [やってみようNoSQL　MongoDBを最速で理解する](https://qiita.com/Brutus/items/8a67a4db0fdc5a33d549)

## Cloud9って何？
- ブラウザのみでコードを記述、実行、デバッグできるクラウドベースの統合開発環境
  - コードエディタ、デバッガー、ターミナルが含まれている
- 使ってみた感じ、EC2の上で動かせるので、VPCとかセキュリティグループとかうまいことやれば、DocumentDBへの接続とかはすごい簡単にできた
  - [ドキュメントデータベースのセットアップ](https://aws.amazon.com/jp/getting-started/hands-on/getting-started-amazon-documentdb-with-aws-cloud9/)
- しかも環境の共有もできるので、他の人にすぐに使ってもらえる
- [AWS Cloud9 を活用したら、個人開発が捗った話](https://tech.drecom.co.jp/ac2020-cloud9-personal-development/)

# DocumentDBいじってみた
AWSの公式のチュートリアルに基づいてやってみた（Cloud9のCLIでDocumentDBを動かす感じ）  
コマンド関係はQiitaの記事も参照した
<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://qiita.com/Brutus/items/8a67a4db0fdc5a33d549" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

基本的にInsertは次の形

```jsx
// db.(コレクション名).insert(json)っていう形でデータを投入する
db.collection.insert({"hello":"DocumentDB"})
db.testcoll.insert( { "key1" : "value1", "key2" : "value2" } )
```

Selectは次の形

```jsx
db.collection.findOne()
// { "_id" : ObjectId("5e401fe56056fda7321fbd67"), "hello" : "DocumentDB" }

db.testcoll.find()
// { "_id" : ObjectId("5c6198f6fb5e83ffaa3ba044"), "key1" : "value1", "key2" : "value2" }
```

コレクション名に対して参照するんやな

idを指定せずにinsertしたものに関しては、getの時にはidはユニークなオブジェクトIDが振られるっぽい

複数突っ込む場合はこんな感じ

```jsx
db.profiles.insertMany([
	{ "_id" : 1, "name" : "Tim", "status": "active", "level": 12, "score":202},
	{ "_id" : 2, "name" : "Justin", "status": "inactive", "level": 2, "score":9},
	{ "_id" : 3, "name" : "Beth", "status": "active", "level": 7, "score":87},
	{ "_id" : 4, "name" : "Jesse", "status": "active", "level": 3, "score":27}
])
```

idを指定してあげると、selectしてあげた時もidで引っ張ってこれる

```jsx
db.profiles.find()
// { "_id" : 1, "name" : "Tim", "status" : "active", "level" : 12, "score" : 202 }
// { "_id" : 2, "name" : "Justin", "status" : "inactive", "level" : 2, "score" : 9 }
// { "_id" : 3, "name" : "Beth", "status" : "active", "level" : 7, "score" : 87 }
// { "_id" : 4, "name" : "Jesse", "status" : "active", "level" : 3, "score" : 27 } 
```

ドキュメントのクエリからも引っ張ってこれる

```jsx
db.profiles.find({name: "Jesse"})
// { "_id" : 4, "name" : "Jesse", "status" : "active", "level" : 3, "score" : 27 }
```

findAndModifyコマンドで更新を行う

```jsx
// Timのscoreを10点加算
db.profiles.findAndModify({
   query: { name: "Tim", status: "active"},
   update: { $inc: { score: 10 } }
})
```

結果

```jsx
db.profiles.find({name: "Tim"})
// { "_id" : 1, "name" : "Tim", "status" : "active", "level" : 12, "score" : 212 } ←加算されてる
```