---
title: "20210703 DailyLog"
description: "20210703 DailyLog"
date: 2021-07-03
id: 18
blog_id: 18
---
# 記事
- [「何度も死にたいと思った」重度障害者が分身ロボットで働く理由](https://mainichi.jp/articles/20210702/k00/00m/040/161000c)
  - ボットがうまいこと使えれば、人と話せるというだけでも雇用が生まれるっていう事例なのか、素晴らしいな

# Expressについて
- 言わずとしれたNodejsのフレームワーク
- APIがこんな感じで爆速で作れる
```jsx
/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var app = express();

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

/* 3. 以後、アプリケーション固有の処理 */

// 写真のサンプルデータ
var photoList = [
    {
        id: "001",
        name: "photo001.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo001.jpg"
    },{
        id: "002",
        name: "photo002.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo002.jpg"
    }
]

// 写真リストを取得するAPI
app.get("/api/photo/list", function(req, res, next){
    res.json(photoList);
});
```

- Expressは「ルーティング」と「処理」を繋げていくことで構成される
    - GET "/" を受けたら処理Aを実行。
    - POST "/" を受けたら処理Bを実行。
    - GET "/api/photo/list" を受けたら処理Cを実行。
    - どんなリクエストでも受けたら処理Dを実行。
- 上記の処理A,B,C,Dが全てミドルウェアにあたる
- ユーザーは自分でミドルウェアを作成してどのリクエストに適用するかをルーティングを使って決めることができる。
    - または3rd Partyのミドルウェアを適用することもできる。

## Express generatorというものがあるらしいぞ
- WEBアプリケーションのひな形を生成できる。
    - デフォルトのテンプレートエンジンはpugらしい。

## Pugってなんやて
- HTMLを効率よくコーディングできるテンプレートエンジンらしい
- 元Jade

htmlだとこんなのが

```html
<html>
	<body>
		<h1>message</h1>
	</body>
</html>
```

pugだとこんな感じで書ける

```
html
  body
    h1= message
```

## 参考記事
- [ゼロからはじめるExpress + Node.jsを使ったアプリ開発](https://qiita.com/nkjm/items/723990c518acfee6e473)
- [Express + Node.jsで基本を理解した次の一歩 - ディレクトリ構成をルーティング・ミドルウェアを理解して考えてみる](https://qiita.com/nkjm/items/2016e331f74f1b8ab465)

# Expressで図書館用のアプリケーションを作るチュートリアル

routingは、まずapp.js配下のこいつらでURIからの振り分けを決める

```jsx
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

・・・

app.use('/', indexRouter);
app.use('/users', usersRouter);
```

振り分けられた先の、ミドルウェアのところで更に振り分けを決める(例はusers.js)

```jsx
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cool/', function(req, res, next) {
  res.send("You're so cool");
});

module.exports = router;
```

## 参考記事
- [Express チュートリアル Part 2: スケルトン Web サイトの作成](https://developer.mozilla.org/ja/docs/Learn/Server-side/Express_Nodejs/skeleton_website)

# NPMについて
## そういやnpmコマンドのオプションって何も気にせず、ドキュメントのコピペで書いてたな

皆さんおなじみnpm install

```bash
> npm install
> npm i
```

package.json と package-lock.json を更新せずにnode_module を完全復帰させたい場合は、Clean Install

```bash
> npm ci
```

たまにあるnpm install —saveは、以前まではsaveオプションを付けなければdependencies欄に記入されなかったが、現在のnpmではこのオプションがなくてもdependencies欄に記入されるようになったらしいので、不要だそう

```bash
> npm install --save パッケージ名
> npm install -save パッケージ名
> npm install -S パッケージ名
```

開発にしか使わない（リリース資材に混ぜたくない）パッケージはこちら

```bash
> npm install --save-dev パッケージ名
> npm install -D パッケージ名
```

### 参考記事
- [npm よく使うコマンドまとめ](https://qiita.com/standard-software/items/2ac49a409688733c90e7)