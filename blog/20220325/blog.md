---
title: "devcontainerでsqlite3が動かない時"
description: "devcontainerでsqlite3が動かない時"
date: 2022-03-25
id: 50
blog_id: 50
---

自分用のメモ程度に書く。

現在、typescript, nestjsあたりでアプリケーションを作ろうとしており、モックアップとしてsqlite3を導入しようとしていた。  
環境構築はdevcontainerで行っている。

参考にしている記事が以下

<iframe 
  class="hatenablogcard" 
  style="width:100%;height:155px;max-width:680px;"
  src="https://hatenablog-parts.com/embed?url=https://taroosg.io/nestjs-tutorial" 
  width="300" height="150" frameborder="0" scrolling="no">
</iframe>

ここの途中で、sqlite3コマンドを実行して、DBの中身を確認する手順があるが、そこが「sqlite3 command not found」と表示されてうまく動かなかった。

色々調べた結果、Dockerfileを以下のように修正したらコマンドが通った

```Dockerfile
ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends sqlite3
```

4行目、5行目の意味がいまいちわかっていないところもあるので、要調査ではあるが、一件落着。