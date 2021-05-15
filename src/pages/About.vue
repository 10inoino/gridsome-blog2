<template>
  <Layout>
    <b-container fluid>
      <h1 class="article-title my-3">About Me</h1>
      <p>matty改め、猪股 光です。</p>
      <p>社会人、Webエンジニア歴共に3年目のぺーぺーです。</p>
      <p><a href="https://www.postas.co.jp/" target="_blank">ポスタス株式会社</a>というところでWebエンジニアをやっております。</p>
      <p><a href="https://www.code4japan.org/" target="_blank">Code for Japan</a>でもコードを書かせてもらってます。</p>
      <p>バスケ、サバゲー、映画、本、ゲームが好きだったりします。</p>
      <a href="https://twitter.com/ino_aka_matty" target="_blank" class="mx-2"><b-icon-twitter class="h1" color="#00acee"></b-icon-twitter></a>
      <a href="https://www.facebook.com/10inoino" target="_blank" class="mx-2"><b-icon-facebook class="h1" color="#3b5998"></b-icon-facebook></a>
      <a href="https://github.com/10inoino" target="_blank" class="mx-2"><b-icon-github class="h1" color="#000000"></b-icon-github></a>
    </b-container>
  </Layout>
</template>

<page-query>
query {
  metadata {
    siteName
    siteUrl
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: 'About Me |',
      link: [
        {
          key: `canonical`,
          rel: `canonical`,
          href: this.$page.metadata.siteUrl + '/about/',
        },
      ],
      meta: [
        { key: `og:type`, property: `og:type`, content: `article` },
        {
          key: `og:url`,
          property: `og:url`,
          content: this.$page.metadata.siteUrl + '/about/',
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `About Me | ${this.$page.metadata.siteName}`,
        },
      ]
    }
  }
}
</script>

<style scoped>
h1 {
  position: relative;
  padding-bottom: .2em;
  border-bottom: 4px solid #ccc;
}
h1::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  z-index: 2;
  content: '';
  width: 20%;
  height: 4px;
  background-color: #3498db;
}

h2 {
  padding: 0.25em 0.5em;/*上下 左右の余白*/
  color: #494949;/*文字色*/
  background: transparent;/*背景透明に*/
  border-left: solid 5px #3498db;/*左線*/
}
</style>