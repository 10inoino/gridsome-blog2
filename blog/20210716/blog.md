---
title: "20210716 DailyLog"
description: "20210716 DailyLog"
date: 2021-07-16
id: 26
blog_id: 26
---
# 記事

- [AmazonのAPI設計方針 (The Bezos Mandate)](https://qiita.com/shimataro999/items/a6c1ee4708bb2112610e)
  - ベゾスのマイクロアーキテクチャを体現したような記事ですな。是非チームの共通原則にしたい。あと文章がメチャクチャかっけぇ。
- [PHPバージョンアップけもの道](https://speakerdeck.com/uzulla/phpbaziyonatupukemofalsedao)
  - 結局バージョンアップにすまーとなそりゅーしょんなんて存在しないんですよ。泥臭くやるチームを助ける体験談と少しのライフハックが存在するだけで。

# アルバイトとパートって何が違うん？

仕事中にアルバイトとパートを分けて使ってたんですが、そもそもその2つの違いを知らなかったので、調べてみました。

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://townwork.net/magazine/knowhow/low/95927/" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

上記の記事によると、法的に明確な区分けは無く、会社とか店舗の認識によって呼び方が分かれてるみたいですね。

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://www.evojob.com/column/206" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

上記の記事だと、アルバイトはドイツから、パートは英語から来てるようで、語源の違う2つの言葉が同時に日本で使われてるものなんだなと理解。

なんで語源としてはほぼ同じなのに、パートは昼間のおばちゃんで、アルバイトは学生とかフリーターを指すのかが分からなかったので、更に調べようかと思いしたが、ハマりそうなので仕事に戻ります。

# mvp.cssマジ便利

昨日出たモデリング系のセミナーで、DDD界隈では知らない人はいないであろう増田さんが、画面モックを作成する時に使っていると言ってたmvp.cssってやつを今日軽く使ってみた。

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://andybrewer.github.io/mvp/" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

生HTMLに以下のタグを1本加えるだけでそれっぽいものができるというスグレモノ

```html
<link rel="stylesheet" href="https://unpkg.com/mvp.css">
```

使ってみたら凄くいい感じ。

テーブルの横スクロールとかも自動実装してくれるし。

ただ、注意点としてHTMLの既存の書き方にちゃんと倣ってないと、CSSが適応されないので注意。  
まあHTMLの復習という意味でも良いかもね。