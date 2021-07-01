---
title: "とりあえずRDBの全レコードをMongoDB(DocumentDB)に突っ込んでみる方法"
description: "とりあえずRDBの全レコードをMongoDB(DocumentDB)に突っ込んでみる方法"
date: 2021-07-01
id: 16
blog_id: 16
---
MongoDBとRDBはそもそもの思想が異なるので、RDBに持っているレコードをそのままMongoDBに移すというパターンは稀で、本来はDocumentDBらしいスキーマ構成などを考えるべきだとは思います。  
しかし、RDBからMongoDBへの以降などを検討している状態で、**「RDBに入ってるデータを全てMongoDBに移したら、データ量的にちゃんとさばけるんだろうか」「一旦テストデータとして、RDBのデータを使ってみたい」**というニーズが出てきたので、私と同じような境遇にある方に向けて、この記事を送ります。

方法としては以下の通り

1. RDBからSelectした結果をjsonファイルで取り出す（この時にユニークキーを基にIDを生成）
2. JSONファイルをMongoDBのinsert文に変換
3. MongoDBに流す

## RDBからSelectした結果をjsonファイルで取り出す

今回は以下の従業員リストを想定して行ってみます

- テーブル名 : employeeList
    - 事業所ID : officeId(主キー)
    - 従業員ID : employeeId(主キー)
    - 苗字 : lastName
    - 名前 : firstName
    - 性別 : sex
    - 年齢 : age

以下のコマンドで、employeeListから全レコードをJSONで取り出します。

```sql
-- 取得結果を書き込むファイルを宣言
\o employee_list.json

-- 全件取得結果をJSONで取り出す
WITH trimedEmployeeList AS (
SELECT 
    officeId || '_' || employeeId AS "_id",
    * 
FROM employeeList
)
SELECT to_json(trimedEmployeeList) from trimedEmployeeList;

-- 終了
\q
```

この時に、RDBの主キーを文字列結合で繋げて、MongoDBのidにしています。

idを指定しなければ、MongoDB側でユニークなオブジェクトIDが発行されるので、なくても大丈夫です。

## JSONファイルをMongoDBのinsert文に変換

JSONファイルが吐き出されたら、中身をMongoDBのinsert文にうまいこと加工します。

主にやったことは以下の通りです。

- RDBのカラム名削除
- カラムとレコードの境の線削除
- JSONの最後の}を},に変換（コンマを付けた）
- JSONを以下で囲む

```jsx
db.employeeList.insertMany([ ここにJSON ])
```

employeeListの部分はMongoDBのコレクション名にあたるので、お好みで変更ください。

## MongoDBに流す

上記で作成したMongoDBのinsert文をCLIで流したら完成！

皆が慣れ親しんだ、RDBのレコードをMongoDBに入れるとこうなるよ！みたいなモックとしてもご利用いただけるかと思います。

改めてですが、本当にMongoDBを使うとなった時には、改めてスキーマ設計をしましょうね。