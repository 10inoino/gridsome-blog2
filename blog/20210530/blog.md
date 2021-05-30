---
title: "僕がnkfコマンドで改行コードを変更するまで"
description: "僕がnkfコマンドで改行コードを変更するまで"
date: 2021-05-30
id: 6
blog_id: 6
---

LaravelでちょっとしたWebアプリを作ろうとしてたんですが、gitでステージングした時に、

```
warning: LF will be replaced by CRLF in ~~~
```

っていうのが大量に出ました。
直訳すると「~~~のLFはCRLFに置き換えられますよ」ってことで、改行コードがLFになってたみたいです。

200ファイルぐらいが対象だったんですが、最後の行に「ローカルの改行コードは変更されません」みたいなことが書いてありまして  
「リモートのコードはCRLFなのに、ローカルのコードはLFのままなのは気持ち悪いなぁ」と思っていたので、それを一括変換したというメモです。

# nkfコマンドをインストール

sedコマンドとか色々やり方はあるんですが、nkfコマンドという見たこと無いコマンドがあったので、これでやってみることにしました。

インストールで参照したのはこの記事

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://qiita.com/ponsuke0531/items/d0b6d743a70c624a1ba7"
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

これの**Windows10にzipでインストールする**っていうところを参照して、やりました。
</br>
</br>
</br>
ちなみにnkfってNetwork Kanji Filterの略らしいですね。おもろい。

# ディレクトリから対象ファイルを検索して頑張る

nkfのインストールが終わったので、いざ対象のファイルの改行コードを変更してみようということで

参照したのがこの記事

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://qiita.com/June8715/items/24307ee467baee51387e"
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

記事はCRLF→LFの変換をしようとしていますが、grepのところをうまくいじってやれば、逆もいけます。

LFのファイル検索はこんな感じ

```
find . -type f | xargs file | grep -E " LF "
```

要は前半の

```
find . -type f | xargs file
```

で、ディレクトリ配下のファイル情報を抜き出しにいって  
後半のgrepで" LF "っていう文字列を含むものだけ表示すると

ただ、これディレクトリ配下全部検索だから、勿論gitignoreで無視してるものも検索対象になるので、すごい時間かかるからやめよ～～ってことにしました。

# 簡単な解決策
じゃあどうしたのかといいますと

gitをステージングしたときのWarningメッセージを全部持ってきまして

```
warning: LF will be replaced by CRLF in ~~~
```

これの前半部分を、nkfの改行文字変換のコマンド置換するだけ

```
nkf32 -Lw --overwrite hogehoge.php
```

こういうこと。

これを流したら万事解決。めでたしめでたし。