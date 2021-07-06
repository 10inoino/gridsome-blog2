---
title: "20210706 DailyLog"
description: "20210706 DailyLog"
date: 2021-07-06
id: 21
blog_id: 21
---
# 記事

- [DynamoDB ベストプラクティス - Qiita](https://qiita.com/inouet/items/bcf9467a65b27c362ecf?utm_content=buffer76d80&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer&fbclid=IwAR1MiJy5LEXpUXL4hXe3aObgkiU1LpkJiiarJgGt0Wir6pITcQi0P2KY3lo)
    - あとでよむ

# Slackのリマインダー

平日にのみリマインダー飛ばすにはこんな感じ

```
/remind me "Hello World!" at 10:00 every weekday
```

- 参考記事
    - [Slack の Reminder で平日だけ通知させたいとき](https://qiita.com/yuya_takeyama/items/cc032aa162483761b140)

# PostgreSQLでテーブル名とカラム数を取得する

```sql
SELECT 
	table_name,count(column_name) AS column_count
FROM 
	information_schema.columns 
WHERE
	table_name NOT LIKE 'pg_%'
AND
	table_name NOT LIKE 'sql_%'
GROUP BY
	table_name
ORDER BY
	column_count DESC, table_name;
```

where条件でpostgresqlから提供されるテーブルは抜くようにしてます（多分routinesとかは残ってる）

# nestjsについて

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://note.com/dafujii/n/n83e76bc7e008" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

これを参考にNestjs × Serverless FrameworkでAPIを作ろうしています。  
実は前回のMiddyの記事は、私がテキトーに参照した記事の通りにnpmコマンドを叩いてたら、いつの間にかmiddyがインストールされており、調べてみたという背景があります。

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://mattylogs.com/blog/14/" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

なので今回は何がインストールされていくのかを逐一調べながらやってみようと思います。

まずは気になったのはこれ

```
npm i -D @types/aws-serverless-express serverless-layers
```

## serverless-layersとはなにか

参考にしたのはこちら

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://dev.classmethod.jp/articles/serverless-framework-node-modules-to-lambda-layers/" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

Lambdaをnodeで開発する際に、node_modulesをなんとか扱う必要があるんですが、それの方法の一つとしてLambda Layerがあるらしい。

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/configuration-layers.html" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

> レイヤーを使用すると、コードの共有と責任の分離を促進し、ビジネスロジックの記述をより迅速に繰り返すことができます。

上記のlambda layerをserverless-layerにより、簡単にデプロイできるようになるみたいですね。
<br>
<br>
<br>
<br>
あとは、serverless-offlineをちょっと調べてみて、serverless-layerと干渉したりしないのかを見ながら、慎重に入れてみようかなと思います。

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://note.com/dafujii/n/naf05740a253b" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>