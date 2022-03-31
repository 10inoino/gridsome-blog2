---
title: "nestjs × serverless frameworkでlambdaにデプロイ"
description: "nestjs × serverless frameworkでlambdaにデプロイ"
date: 2022-03-27
id: 52
blog_id: 52
---

以前挫折したこの組み合わせを、再度挑戦している。

ある程度知見としてまとまったら、Zennとかに書こうかと思うので、一旦今日の概要をメモ書きぐらいで残しとく。

ちなみに、参考資料はここらへん

- [NestJSで簡単なtudoリストを実装するチュートリアル](https://taroosg.io/nestjs-tutorial)
- [「NestJS」をAWS Lambda + API Gatewayで動かす](https://dev.classmethod.jp/articles/nestj-aws-lambda-api-gateway/)
- [Nest.js + Serverless Framework + TypeScript で API Gateway + Lambda 環境を構築してみる](https://note.com/dafujii/n/n83e76bc7e008)
- [serverless-offline を導入して Serverless Framework + TypeScript で作った Lambda 関数を VS Code でステップ実行する](https://note.com/dafujii/n/naf05740a253b)
- [nestjs 公式ドキュメント](https://nestjs.com/)
- [serverless framework 公式ドキュメント](https://www.serverless.com/)

# devcontainerで環境構築

Dockerfileはこんな  
ちなみにデフォルトのやつをちょろっといじっただけなので、絶対にこれより最適化されたものはあるはず

```Dockerfile
# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.224.3/containers/typescript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 16, 14, 12, 16-bullseye, 14-bullseye, 12-bullseye, 16-buster, 14-buster, 12-buster
ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends sqlite3

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# RUN su node -c "npm install -g <your-package-list -here>"
```

# nestjsでhello world

```bash
# nest cliをインストール
npm i @nestjs/cli

# プロジェクト作成
npx nest new .

# 実行
npm run start
```

これだけでlocalhostに立ち上がったAPIでhello worldは行けるはず。  
メチャクチャ楽。

# serverless frameworkを入れてデプロイまで

```bash
npm i -g serverless
npm i -S aws-lambda aws-serverless-express express
npm i -D serverless-layers serverless-offline

# AWSのクレデンシャル登録
serverless config credentials --provider aws --key dummyKey --secret dummySecretKey
```

こんな感じでAWSの情報をserverless frameworkに覚えさせる。

lambda用のハンドラ関数も以下のように準備

src/handler.ts
```ts
import { Context, Handler } from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from 'http';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as serverless from 'aws-serverless-express';
import * as express from 'express';

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);
  const app = await NestFactory.create(AppModule, adapter);
  app.enableCors();
  await app.init();
  return serverless.createServer(expressApp);
}

export const handler: Handler = async (event: any, context: Context) => {
  if (!cachedServer) {
    const server = await bootstrapServer();
    cachedServer = server;
  }
  return serverless.proxy(cachedServer, event, context, 'PROMISE').promise;
};
```

serverless.ymlも以下のように準備

```yml
service: serverless-sample
 
plugins:
 - serverless-layers
 - serverless-offline
 
provider:
 name: aws
 runtime: nodejs14.x
 region: ap-northeast-1
 memorySize: 256
 logRetentionInDays: 1
 apiGateway:
   minimumCompressionSize: 1024
 environment:
   AWS_NODEJS_CONNECTION_REUSE_ENABLED: 1
   LANG: ja_JP.UTF-8
 versionFunctions: false
 deploymentBucket:
   name: sample-serverless-deploymentbucket
 
package:
 individually: true
 include:
   - dist/**
 exclude:
   - "**"
functions:
 index:
   handler: dist/handler.handler
   events:
     - http:
         cors: true
         path: "/"
         method: any
     - http:
         cors: true
         path: "{proxy+}"
         method: any
```

ちなみに、上記の状態でsample-serverless-deploymentbucketっていうS3を用意しておかないと、デプロイで「バケットがないよ！」って怒られます。

でもって、package.jsonに以下のスクリプトを追加

```json
"scripts": {
  "deploy:dev": "nest build && serverless deploy",
  "deploy:prod": "nest build && serverless deploy --stage prod"
},
```

でもって、デプロイ

```bash
nest build && serverless deploy
```

デプロイ終わったら、urlが発行されてるので、それを叩くとHello worldできるはず

# ローカル実行

さらっとnpm installの中に、serverless-offlineっていうプラグインも含めており、こいつを使うとローカルでLambdaの実行が可能

以下のファイルを追加

.vscode/launch.json
```json
{
  "configurations": [
    {
      "name": "Lambda",
      "type": "node",
      "request": "launch",
      "runtimeArgs": ["--inspect", "--debug-port=9229"],
      "program": "${workspaceFolder}/node_modules/serverless/bin/serverless",
      "args": ["offline"],
      "port": 9229,
      "console": "integratedTerminal"
    }
  ]
 }
```

vscodeでデバッガを実行するとローカルでも動かせるようになるよ

# 次にやりたいこと

とりあえずデプロイとローカル環境構築まではいったので、dynamodbとのつなぎ込みをやりたい。