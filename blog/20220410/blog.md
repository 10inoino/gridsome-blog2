---
title: "PHPerKaigi2022に行ってきたよ"
description: "PHPerKaigi2022に行ってきたよ"
date: 2022-04-10
id: 58
blog_id: 58
---

年に1回のPHPerの祭典である、PHPerKaigiに行ってきた。  
もう半年ぐらいPHPなんて書いてないんだが、最初に触れたプログラミング言語はPHPだったし、何より久々のオフラインイベントというのが楽しみで、行ってみた。

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://twitter.com/ino_aka_matty/status/1512958391735697410" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>


2020年から参加しているが2021年はコロナの影響でオンライン開催。今回はオンラインとオフラインのハイブリット開催ということになった。

しかも、オンラインでは実際にライブで話しているわけではなく、事前収録されたものをパプリックビューイングで見るというスタイル。  
みんなで録画を見るというスタイルだと、笑いなどが起こりづらいのが少し残念ではあったが、発表後の拍手などを聞くと「ああ、懐かしいな」という感覚があった。

特に面白かったのを2つほど紹介。

## 予防に勝る防御なし - 堅牢なコードを導く様々な設計のヒント

テスト駆動開発といえばこの人。t_wadaさんこと和田さんの発表。

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://fortee.jp/phperkaigi-2022/proposal/ef8cf4ed-63fe-42f8-8145-b3e70054458b" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

どうやら和田さんは前日まで肺炎だったらしく、事前収録ができなかったようで、なんとオフラインでライブで発表してくれた。

ある期間を扱う関数やクラスをベースに、堅牢かつ運用のし易いプログラムとはどういうものかというケーススタディを発表していたが、まあこれが面白い。

発表の内容はもちろんだが、オフラインならではの会場との掛け合いもあって、40分が短く感じるほどだった。  
いつかああいう発表がやってみたいもんです。

## GitHub Actions Deep Dive using PHP

GMOの小川さんの発表。

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://fortee.jp/phperkaigi-2022/proposal/4d900430-a0c4-4ad8-95bb-41b240951255" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

GMOでGithubActionsを使っているのと、小川さん自身がオープンソースでカバレッジ測定ツールを作成しているということで、CICDやワークフロー構築に関してとてもわかり易くまとまっていた。

主には公式ドキュメントを噛み砕きながらの説明だったが、PHPerKaigiということで、PHPのコードの実行なども行っていて、GithubActionsの入門にはもってこいの内容だったのではなかろうか。

現在の会社もGitlabを利用しているので、同じようなケースで転用できないかを考えていた。

</br>
</br>
</br>
</br>

来年こそ、いよいよPHPerではなくなっていると思うが、来年あたりにコロナが落ち着いたらオフラインのイベントはまた活発になると思うので、その時が更に楽しみになった。