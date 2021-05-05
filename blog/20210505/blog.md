---
title: "Gridsomeはローカルファイル参照がよいのか、CMSがよいのか"
description: "Gridsomeはローカルファイル参照がよいのか、CMSがよいのか"
date: 2021-05-05
id: 2
blog_id: 2
---
# Gridsomeでブログ作ったよ

GridsomeというVue.jsの静的サイトジェネレータがありまして、そいつを使ってこのブログを作ったわけです。
<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;" 
  src="https://hatenablog-parts.com/embed?url=https://qiita.com/Kodak_tmo/items/6967918b53593da5b745" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>  

Gridsomeはデータソースに対してGraphQLでアクセスできる優れものでございまして、こんなブログとかを作るのであれば、割とサクッとできちゃう感じです。  
私はこの記事を見ながらやったので、やりたい人いたら参考にしてみてください。
<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;" 
  src="https://hatenablog-parts.com/embed?url=https://www.keisuke69.net/entry/2020/06/09/112907" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

Gridsomeでブログを作る場合、記事をどこに書くかという選択肢が2つあります。

まず1つ目は**ローカルにMarkdownでブログを書き、それをブログとして公開する方法。**

このsource-filesystemっていうプラグインを使えば実装できます。  
これをラップしたプラグインもあるみたいですね。

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;" 
  src="https://hatenablog-parts.com/embed?url=https://gridsome.org/plugins/@gridsome/source-filesystem" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>  

そしてもう一つが**CMSを利用する方法**

例えばWordpressのRESTAPIをデータソースにするプラグインとかがあります。

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;" 
  src="https://hatenablog-parts.com/embed?url=https://gridsome.org/plugins/@gridsome/source-wordpress" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>  

これの他にNetlifyCMSをデータソースにするプラグインもありました。

私はこのブログを作るにあたって、wordpressのRESTAPIを叩く方法とローカルのmdファイルを参照する方法の2つを試したんですが、**mdファイルの方に落ち着きました**。

今回はそれに至った経緯について書こうかなと思います。

# Wordpress RESTAPIを使う場合のデメリット
## Wordpress側で記事を作成したあとに、その都度デプロイしないといけない

HeadlessCMSサポートしてるなんて聞いたら、記事書いて即時反映してくれると思うじゃないですか。

しかしGridsomeはデプロイ時にデータソースを読み込んで、GraphQLで参照可にするため、Wordpressで記事を作成したあとにサイトをデプロイし直さないといけないみたいです。

現在このサイトはGithubのpushをトリガーにNetlifyでデプロイしている為、Wordpressで記事書いてNetlify操作するのであれば、ローカルで記事書いてpushしても大して変わらんよなぁと思いました。

## APIがHTTPSじゃないと画像が表示できない

Wordpressを使うにあたって、サーバーはどこにしようかなぁと思っていたんですが、以前使ったことのあるXfreeっていう無料レンタルサーバーを使いました。  
https://www.xfree.ne.jp/

こちらで途中までは色々できたんですが、画像を出すときに
```
This request has been blocked; the content must be served over HTTPS.
```
っていうエラーで怒られます。

画像データはRESTAPIで出力すると、URLで画像データを参照することになります。その画像のURLがhttpなんですね。  
ローカルでは画像出力できたんですが、デプロイするとhttpsのページにhttpでデータソースを読み込もうとするのはNGらしく、  
これを解決するには画像のURLをhttpsにするべきなんですが、xfreeだと独自SSLの設定ができず、  
独自SSLを有効にするためには月額料金が発生するといった感じになっていました。

このブログ自体、極力ランニングコストは安くやりたいという方針があったので、独自SSLを使うだけのために月額料金払うのも嫌だなぁと思い、ローカルファイルの参照にしました。

# ローカルのmdファイルを参照するメリット
## vscodeで記事が書ける
mdファイルに記事を書いていくので、普段使い慣れているvscode等のエディタで記事が書けます。  
特に技術系のブログを書くときなどは、ソースコードをブログに上げることがあると思いますが、インデントの調整なども普段のエディタと同じくtabキーで行えます。

Wordpressのエディタでtabキーを押すと、ポインタが次のブロックに移っちゃったりするので、インデントの調整を半角スペースでちまちまやるしかなく、その点でもローカルファイル参照に軍配が上がります。

## ホットリロードにより、常に記事を確認しながら記事が書ける
Vue.jsのローカルでの開発では、ファイルの保存をトリガーに画面に更新がかかります。  
それゆえ、ブログになるmdファイルを保存する度にブログのプレビューが常に見える状態になります。

Wordpressだとプレビューボタンを押さないとプレビューが見れなかったりしますが、常に動的に変化し続けてくれるので、チェックも楽ですね。

# ローカルのmdファイルを参照するメリット
ここまでローカルのmdファイルの参照がいい感じだよ！ということを書いてきましたが、デメリットもあります。

## PC以外の端末で執筆がしづらい
記事を上げるためには、マークダウンが書けて、git操作ができる必要があるため、iPadなどからの執筆は難しいと思います。

vscodeをiPadから操作する方法もあるみたいですが、そこまでしてiPadから記事を書くこともないかなぁと思ってます。

CMSだとWebブラウザ上で記事が書けるので、様々な端末で執筆ができるようになります。

## 記事までリモートリポジトリに上がる
勿論mdファイルもデプロイの対象になるため、githubなどでリポジトリ管理をしている場合は、記事のmdファイルもリポジトリに上がってしまいます。

ブログなんてそもそも周りに公開するために書いてますし、mdファイルが上がってもあんまり関係ないんじゃね？と思われる方もいるかもですが、記事の元ファイルが一斉ダウンロードできてしまうのはなんか嫌だなぁと思っております。

プライベートリポジトリで管理するなどの工夫が必要かもしれませんね。

# まとめ
こんな感じで技術系の記事を今後書いていきたいと思っている私としては、ローカルファイルで書いていくことにしました！

技術メインのブログではなく、Wordpressのためのサーバーにお金をかけてもよい人であれば、WordpressをCMS代わりに使うのもありなのかもしれませんが、ブログを書く度にデプロイしなくちゃいけないのは解せないですよねぇ…  
もっといい方法があるんでしょうか…

他にもっと良いやり方あれば教えてくだされm(_ _)m