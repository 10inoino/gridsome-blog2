---
title: "20210701 DailyLog"
description: "20210701 DailyLog"
date: 2021-07-01
id: 14
blog_id: 14
---

# 記事
- [天才プログラマー登氏に聞く、日本が「海外に負けないICT技術」を生み出す方法](https://www.sbbit.jp/article/bitsp/62690)
    - 『世界レベルの製品を作るプログラマーの頭の中は、「カオスでもなく単純でもない、すごくギリギリのところ」になっていると登氏は語る。ところが管理者は、「わかるように説明しろ」「属人化を排除しろ」と求め、実験的な取り組みを「ガバナンス上問題がある」と禁止する傾向が強まっている。』
    - そうなんすよね。ITって儲かるので、ビジネスに関係ない作業をエンジニアにやらせたくないのは分かるんですが、IT技術の発展の源流を辿れば、「遊び」「いたずら」って言うものが入ってくるわけで、ここをどれほど許容するかだと思ってます。
- [Slack、音声で“ちょっと立ち話”が可能になる新機能「Slackハドルミーティング」などを発表](https://internet.watch.impress.co.jp/docs/news/1335210.html)
    - この前のWWDCでも、Appleがビデオ会議について発表してましたが、ビデオ会議を内製化していく流れってどうなんでしょ？個人的にはビデオ会議システム×何か、ってところのシナジーが生まれる印象があまりなく、コロナに合わせて「とりあえずビデオ会議みんな使ってるし、作っときゃええやろ！」感がするのは私だけでしょうか
- [Gitの操作を間違ってしまった時に簡単に元に戻せる「git undo」を使う方法](https://gigazine.net/news/20210701-git-undo/)
    - これは便利！ git reset —hardのやらかしたときの冷や汗かく感じがこれでなんとか収まればいいなぁと
    - ただ、ユーザーの確認はするみたいなんで、gitの切り戻しを完全に覚えなくていいってわけではなさそうね

# 小技
## DocumentDBの深い階層にあるフィールドの指定方法

こちら参照  
<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://qiita.com/asuzuki2008/items/d7f4ae343d46b5272688" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

```jsx
db.hogehoge.find({"address.after": "pqr"});
```
みたいな感じで、コロンで繋げば深い階層指定できるよ

## postgreSQLテーブルからjson形式でSELECTする
こちら参照  
<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://solutionware.jp/blog/2016/06/23/postgresql%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%81%8B%E3%82%89json%E5%BD%A2%E5%BC%8F%E3%81%A7select%E3%81%99%E3%82%8B%E5%B0%8F%E3%83%8D%E3%82%BF/" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

```sql
SELECT to_json(table) FROM table;
```

で、tableをJSONにできまっせ

先に絞り込んでおきたい場合はWITH区でサブクエリ作ってから、それに対してto_jsonする感じ

```sql
WITH trimed_table AS (
    SELECT * FROM table WHERE age = 20
)
SELECT to_json(trimed_table) from trimed_table;
```

## postgreSQLでmore表示せずに一気に表示させる

こちら参照  
<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://db.just4fun.biz/?PostgreSQL/psql%E8%A1%A8%E7%A4%BA%E3%81%A7more%E8%A1%A8%E7%A4%BA%E3%81%9C%E3%81%9A%E4%B8%80%E5%BA%A6%E3%81%AB%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

でっけえデータSELECTしようとすると、more表示になってしまい、一番下までエンターキー押し続けるのがめんどくさいので、そんなときにこれ

```sql
\pset pager off
// 「ページャーを使う」は off です。
```

## psqlで出力結果をファイルに出力する

こちら参照
<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://yohei-a.hatenablog.jp/entry/20170812/1502524439" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

書式

```
\o <ファイル名>
<SQLを実行する>
\q
```

例

```sql
# \o test.txt
# select * from test;
# \q
$ ll
test.txt
```

# ServiceMeshって何？

まだ全容が掴めてないが、とりあえず記事をいろいろ読んでみる  
- [サービスメッシュについて調査してみた件](https://qiita.com/mamomamo/items/92085e0e508e18bc8532)
- [サービスメッシュ入門](https://www.netone.co.jp/knowledge-center/netone-blog/20200715-1/)
- [【レポート】サービスメッシュは本当に必要なのか、何を解決するのか #AWSSummit](https://dev.classmethod.jp/articles/aws-summit-2019-servicemesh-necessity/)
- [AWS App Mesh](https://aws.amazon.com/jp/app-mesh/?aws-app-mesh-blogs.sort-by=item.additionalFields.createdDate&aws-app-mesh-blogs.sort-order=desc&whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc)