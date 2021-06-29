---
title: "20210629 DailyLog"
description: "20210629 DailyLog"
date: 2021-06-29
id: 12
blog_id: 12
---

# 小技
## PostgreSQLのWITH句の書き方を毎回忘れる
```SQL
WITH サブクエリ名 AS
```
- [[Redshift][PostgreSQL] WITH句を使ってSQLをシンプルに。](https://dev.classmethod.jp/articles/redshift-postgresql-with/)
​
## 集約関数のarray_aggとarray_to_stringで、1対nがいい感じに取得できたりするよ
- 1対nのレコードをSQLで取得する時に、nの方をカンマ区切りで取得できたりする
- 例えば一人の店員が複数の店舗に所属してるような場合
```SQL
SELECT
  employee_name,
  array_to_string(array_agg(store_name), ",")
FROM
  employee_list
GROUP BY
  employee_name;
​
-- employee_name | store_name
-- ----------------------------------
-- matty         | shibuya,shinjuku
-- jason         | Harajuku
-- taro          | shibuya
```

# 記事
- [【アップルvsフェイスブック】両CEOが仲違いをした決定的な瞬間](https://courrier.jp/news/archives/250586/)
  - ウェブ進化論っていう本でザッカーバーグとティム・クックのテクノロジーへの向き合い方の違いみたいなところが言及されてましたが、まさしくそういったところが表れてるんだろうなぁと。コンピュータが汎用化されることがすごいと思っていた世代と、コンピュータがあるのが当たり前で、コンピュータを通じて人と繋がれることに感動を覚える時代と。  
  それによってサービスの色もかなり変わってくるんだろうなぁとしみじみ思いました。
- [「なんでこれ抜けるの」カシウスの槍の形状すら再現するバンダイさんの変態技術、現物を見ても理解できないレベル](https://togetter.com/li/1737230?fbclid=IwAR3LByiirSpujr6OsnDeLhuNFrr0lZeCeJEFw-x7V5WQY9a1c08VfAgVMWc)
  - これすごいっすよねぇ。一つ一つ手で抜いてるなら分かるんだけど、プラモデルなのであればおそらく生産ラインがあるわけで。生産ラインでこれを再現してるのはエグいなぁ。どうやってるんだろ。

​
# AWS Startup Loft Tokyoって技術相談乗ってくれるんだね
目黒にあるAWSのコワーキングスペースですが、コロナの影響で現在は休業してるみたいです。

しかしオンラインで技術相談乗ってくれるらしく、事前に質問内容を入力しておけば、専門の方が回答してくれるらしいです。無料で。

こりゃやってみるしかねぇなぁ