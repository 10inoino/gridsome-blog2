---
title: "20210711 DailyLog"
description: "20210711 DailyLog"
date: 2021-07-12
id: 23
blog_id: 23
---
# 記事

- [研究の呪い](https://www.slideshare.net/hitoshin/ss-249684418)
    - これは当てはまる点がありすぎて、読み終わってからちょっと呆然としてしまった。エンジニアの作る楽しさとか、それの影響力の大きさに取り憑かれると、そればっかりやりたくなり、それの思考が更に進むとそれ以外を苦しく感じ始め… 結局そうなると、開発以外の要素を取り入れられなくなるから、開発も頭打ちが来るんよな…というのを今身を持って感じている時期…
- [コーディング不要で決済を導入できるStripe Payment Linksを使って個人サービスに寄付機能を追加してみた](https://fuyu.hatenablog.com/entry/2021/07/10/100157)
    - 確かStripeってリリース当時はJS7行書けば決済機能追加できますよ！ってウリじゃなかったっけ？？
    リンクだからHTMLにiframe1行追加とかで入れられるのかなぁ。これは個人開発には嬉しい限り。

# 1週間の目標を立てることにした

個人的な悩みとして、常に頭の片隅で、学習や仕事のことを考えていて、「これをやらなければいけない」という一種の強迫観念に駆られているというものがありました。

土日にちょっと他のことしようと思っても、頭のどこかで「あーまだ開発やってないなぁ」「英単語やってないなぁ」などなど、自分自身が決めたタスクが頭のどこかで残ってしまい、純粋に物事を楽しめないという事象です。

多分これは「アプリケーションを1個作る」「英語が日常会話レベルで喋れる様になる」など、大きい目標しか立てていないが為に、1日や1週間単位で見ると自分のやった作業が全体に対して進展している様な気がせず、達成感が得れていないというのが原因なのではないかと仮定しました。

なので、土曜～月曜ぐらいの週が始まるタイミングで、その週の目標を立てる&前の週の目標の振り返りを行い、土曜の時点でその週の目標が全部終わってるのであれば、土日は遊びまくってもヨシ！という制度を設けようと思います。

そんでもって、まあせっかくブログやってるわけだし、ある程度ブログで目標を公開して、コミットメントすれば、目標に対してのやる気も上がるだろうということで、そんな取り組みを始めてみます。  
どのぐらいの人がDailyLog見てんのか分からんけどね。

勿論仕事のことは別で管理してるので、ブログでは上げないのと、Code for Japan関連の取り組みに関しても、オープンにしづらいところがあるので、控えようかなと思います。

主に私が個人でやってる開発と、英語、読書、ブログ、その他諸々の勉強あたりですかね。

最初は目標の精度も悪いとは思いますが、徐々に良くなっていけばいいなぁと思います～

## 個人開発

- nestjs × serverless framework × lambdaにて、指定したpathでhello worldできるようになる。
- 上記の構成のDockerコンテナの構築

## 英語学習

- 「中学・高校6年間の英語をこの1冊でざっと復習する」っていう本の9日目までの問題を解く
- 英単語学習アプリmikanのTOEIC400点レベル rank6まで完了

## 読書

- ティール組織の第1章をマインドマップにまとめる

# Nest.jsのrouting

- 参考資料
    - [NestJSのススメ ～Expressを超えてゆけ～](https://qiita.com/elipmoc101/items/9b1e6b3efa62f3c2a166)

なんか前にもまとめたような気がするけど、nest.jsはコントローラでルーティングを記述するらしい。

```jsx
@Controller('app')
export class AppController {
  @Get('fuga')
  getFuga(@Query() query: { text: string }): string {
    return query.text
  }
}
```

上記でlocalhost:3000/app/fugaでアクセスできるようになる。

## 今日の進捗

とりあえず上記のroutingの設定で、指定のpathは作れたので、あとはdockerコンテナを作っていく。

多分コンテナはできてるんだけど、Lambda Runtime Interface Emulatorの仕様がいまいちよく分からん。

dockerの知識についてもかなり怪しいので、そこから勉強かなぁ。

- 参考資料
    - [Container Image Support for AWS Lambda](https://www.serverless.com/blog/container-support-for-lambda)
    - [Serverless FrameworkでLambdaにDockerコンテナをデプロイしてみた](https://qiita.com/uchiko/items/a752cd0ebc21fa9a3bad)
    - [AWS Lambdaに”TypeScript＋コンテナ”をServerless Frameworkでデプロイする方法](https://i-yusuke.com/entry/serverless-lambda-typescript-container/)
    - [Serverless FrameworkでCustom RuntimeなLambdaをコンテナ対応する](https://zenn.dev/qazx7412/articles/fddbdd5bd6379e4587a3)
        - 仕組みについてはコレが一番詳しいかも
    - [Lambda コンテナイメージをローカルでテストする](https://docs.aws.amazon.com/ja_jp/lambda/latest/dg/images-test.html)
        - Lambda Runtime Interface Emulatorについては一旦コレ