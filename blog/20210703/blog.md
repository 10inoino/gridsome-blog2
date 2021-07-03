---
title: "20210702 DailyLog"
description: "20210702 DailyLog"
date: 2021-07-03
id: 17
blog_id: 17
---
昨日の晩はバタバタしてたので、一日遅れての投稿です。

# 記事
- [40歳から英語力を伸ばしたアマゾン社員が薦める“神アプリ”](https://business.nikkei.com/atcl/gen/19/00290/061000007/)
    - 英語学習を最近始めた私としては、大変助かる記事ですね。頭の片隅では理解していたことですが、やはり机に向かった学習だけじゃなくて、話す勉強、聞く勉強も必須なんだなと。やるか～～～～
- [フランス人との会話 - 増「Allez opi omi!!クラッシュすごかったねー」](https://anond.hatelabo.jp/20210701221330)
    - スポーツの違いどころじゃなくて、国民性の違いも語ってるよね。そもそもツール・ド・フランスを祭りとして捉えてるのか。
    - 動画見たけど、進路で堂々と待ち構えてるカメラマンにぶつかってコケても、平然と走り始めるのね。選手もある程度分かった上で出てるんだなぁと
- [元Google幹部による広告ゼロの検索エンジン「Neeva」がスタート、検索エンジンとして異例のサブスク方式を採用](https://gigazine.net/news/20210630-neeva-available-google-alternative-search/)
    - 個人的にはGoogleのアドセンス広告とかのUXはあまり悪くないと思ってるんすよね。そこから購買につながって、自分としてもいい買い物ができたりするし。その広告を消すために月額550円払うのかというところが非常に悩ましい…

# 調べた
## DocumentDBってどこに課金されんの？
- [Amazon DocumentDB クラスターの停止と開始](https://docs.aws.amazon.com/ja_jp/documentdb/latest/developerguide/db-cluster-stop-start.html)
    - 指定された保持期間内でのストレージ、手動のスナップショット、および自動化されたバックアップストレージに対してのみ課金されます。インスタンス時間に対しては請求されません。
    - じゃあただ起動してるだけであれば、課金されないってこと？
- [Amazon DocumentDB (MongoDB 互換) 料金](https://aws.amazon.com/jp/documentdb/pricing/)
    - Amazon DocumentDB は、次の 4 つのディメンションで料金が設定されています。
        - オンデマンドインスタンスクラスターのコンピューティングインスタンスの量 (最低 10 分の 1 秒あたりの料金)
        - データベース I/O: クラスターのストレージボリュームに対してデータの読み書きを行うときに使用される I/O の量 (100 万 I/O あたりの料金)。
        - データベースストレージ: クラスターのストレージボリュームに保存されているデータの量 (GB/月あたりの料金)。
        - バックアップストレージ: クラスターのデータベースストレージの使用量を超えて使用したバックアップストレージの量 (GB/月あたりの料金)。

## DocumentDB操作するためのIAMポリシーが無いんだけど？
- [DocumentDB 開発者ガイド](https://docs.aws.amazon.com/ja_jp/documentdb/latest/developerguide/developerguide.pdf) P.173参照
- 「特定の管理機能のために、Amazon DocumentDB は Amazon Relational Database Service (Amazon RDS) および Amazon Neptune と共有の運用テクノロジーを使用します。」
- 上記よりRDBのポリシーつければいいっぽい？