---
title: "20210628 DailyLog"
description: "20210628 DailyLog"
date: 2021-06-28
id: 11
blog_id: 11
---

突然ですがDailyLogをつけてみることにしました。

前提としてですが、多分当然のようにサボります。  
ただ、ちょいちょいサボりながらでも長く続けられればいいなと思います。

突然始めた理由としては、この前TwitterのTLに流れてきた「エンジニア楽しもうぜ！」みたいな登壇資料の中に、**「日々の日記をつけていくと、自分の成長が分かって楽しいよ」**的なことが書いてあったからです。  
その登壇資料はTLに流れて消えていきました。リンク知ってる人いたら教えて下さい。アリの生態がすげえ好きなエンジニアの方の登壇でした。

まあ、もともとこのブログ始めた理由の一つに、コードでも日記でもなんでも書けるブログが欲しかったというものがあります。

Noteだとコードを書く機能はあるものの、そんなにゴリゴリ書く感じじゃないし、QiitaやZennだと雑記ブログみたいなやつは書けないし  
更に、そういったプラットフォームの上で記事を書いちゃうと、それなりに拡散されていってしまうため、「ある程度完成度の高い記事じゃないと書いちゃいけないんじゃないか」みたいな謎の恐怖感があるんですよね。誰も気にしてないとは思うんですけど。

ただ、自分でブログを作った暁には、好きなこと書き放題（勿論モラルの範囲内で）だし、読者もFacebookとTwitterのフォロワーと会社のメンバーぐらいしかいないわけで、日記みたいに使ってもいいんじゃないかと思うんです。

まあエンジニアはアウトプットが大事だとは至るところで聞くし、新しい情報をアウトプットする習慣はあって損はないですしね。  
寧ろDailyLogの更新が数ヶ月止まる様なことがあれば、「ああ、猪股はエンジニアとして知識を吸収することをやめたんだな」と哀れんでください。

書くことは特に明確には決めていません。  
その日にあった面白いこととか、仕事中に発見した小技とか（勿論情報漏洩にならない範囲で）、面白かった記事とか、タメになったコンテンツとか。

自分で後から見返してタメになるようなライフハックとかちまちま書けたらいいなと思うので、ブログに全文検索とかタグ機能とかつけたいですね。
<br>
<br>
<br>
上記の通り、日々の行動の記録を目的にしているので、Facebookへの投稿も特に見てほしい回以外はあんまりしないつもりでいます。  
気になった方は是非見に来てください。

では、ゆるゆるとDailyLogを書いていきます～～～

# 小技
## Excelの式の結果をそのままセルの値にする方法
- 対象部を範囲選択してctrl+Cでコピーモードにする
- ホーム＞貼り付け＞値 を押すと、式の結果がそのままセルの値になる
​
## vscodeの置換機能マジ便利
- 基本的には正規表現とかで、$とか上手く使えば、文末までのいらないスペースとか速攻でトリムできる
- 正規表現だとめんどくさい時は、正規表現モード解除すればおけ
​
## Excelで「同じ値の隣のセルの値を取得したい」
```
=IF(COUNTIF(F:F,A1),VLOOKUP(A1,F:G,2,FALSE),"")
```
- COUNTIFで範囲から検索
- 検索に引っかかったら、VLOOKUPで指定の範囲から2行目を抜き出す
- 引っかかんなかったら空文字

# DynamoDBとMongoDBがたまにどっちがどっちだか分からなくなる
- DynamoDB
  - key-value型で持つやつ
  - [DynamoDB全くわからない、から、ちょっとわかるようになるまでの道しるべ](https://dev.classmethod.jp/articles/dynamodb-chottowakaru/)
- MongoDB
  - ドキュメント指向データベース
  - [やってみようNoSQL　MongoDBを最速で理解する](https://qiita.com/Brutus/items/8a67a4db0fdc5a33d549)

# Gitを使うときにはまず第一に.gitignoreの設定をするのだ
Git使うとなったらまずは
```bash
touch .gitignore
```

して
```
node_modules/
```

で、node_modulesをgitから無視しとかないと、git操作クッソ重くなるから、一番最初にやっときな

# 英語の勉強始めました
エンジニア3年目になりまして、様々な技術に興味が湧いてくるわけですが、やはり技術系の一次情報は大体が英語で発信されているんですよね。

そんなわけで、ある程度早い段階で英語でのリーディングとリスニングができれば、それほど早い段階からIT系の一次情報に触れられるというわけで、英語勉強してみることにしました。

![toeic](./toeic.PNG)

ただ、私人生最初で最後のTOEIC（大学1年で受けた）は、確か約200点だったんですよ。それほど英語ができません。  
厳密に言えは、当時受けたTOEICは入学者全員が受けるやつで、大学が受験費も払ってくれるようなシステムになってまして、完全に気持ちは記念受験でした。

確かそれなりにいい点数が取れれば、1年の英語の授業の単位と交換できるみたいなインセンティブがあったんですが、それだけのためにやる気も起きず、ほぼノー勉で立ち向かった結果、この点数でした。

確かTOEICって、990点満点の4択だったと思うので、ランダムに答えた方が私よりいい点数取れます。
<br>
<br>
<br>
ただ今の私は大学1年のときとは訳が違います。  
何より英語のドキュメントをスラスラ読めるようになるんだ！というモチベーションがある。

というわけで、中学高校の英語の復習から始めることにしました。

今日やったのはbe動詞、三単現のS、5つの文型。  
バカ懐かしい。

しかも文型とかほとんど覚えてなかったし。

ちょっと長い戦いになりそうですが、がんばります。

# ソフトウェアファースト
及川さんのソフトウェアファーストを読み始めました。

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://www.amazon.co.jp/dp/B07YNJSCG8/" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

STOのイベントで登壇いただいたことをきっかけに、是非本を読んでみたいなと思ってその場でポチりまして、序盤数ページ読んだんですが、良い意味で言葉を選んでない、すごくグサグサくる本です。買ってよかった。

読み終わったらまとめたいと思います。