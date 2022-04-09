---
title: "dynamodbがローカルでうまく動作しないから、なんとかした"
description: "dynamodbがローカルでうまく動作しないから、なんとかした"
date: 2022-04-09
id: 57
blog_id: 57
---

以前から、NestJS × ServerlessFrameworkってところで、Webアプリを作っているが、ローカルの開発環境構築がどうもうまくいかない。

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://mattylogs.com/blog/52/" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

Dockerでdynamodbを立ち上げて、そこに繋げばいいってことがいろんな記事に書いてあるんだが、おそらく私のDocker知識が足りないので、ローカル環境構築がうまく行ってない様子。

以前はここで心が折れて、諦めたんだが、今回はとりあえず開発を進めようということで、なんとか続ける方法を模索してみた。

DynamoDBのコンテナを起動していない状態で、VSCodeのデバッガで動かして動作確認をしてみると、どうやら私のAWSアカウントのDynamoDBとやり取りできていることが判明。  
思い返せばServerless FrameworkにAWSのconfig情報覚えさせていたので、そりゃそうかと思ったが、とりあえずこれで開発は進められそうな感じになってきた。

どのみち他のプロジェクトでも使うだろうから、ローカルでのDynamoDBの立ち上げ方ぐらい覚えないとなぁ。