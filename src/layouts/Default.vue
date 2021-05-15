<template>
  <div class="layout">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <g-link class="navbar-brand" to="/">MattyLogs</g-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item><g-link class="nav_link" to="/about/">About Me</g-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container fluid class="px-4">
      <b-row>
        <b-col lg="10">
          <slot/>
        </b-col>
        <b-col lg="2">
          <b-card class="m-2">
            <div class="mb-3 avatar">
              <g-image src="~/assets/images/nigaoe.png" width="80%"/>
              <div>
                <h4 id="author-name" class="py-2">matty</h4>
              </div>
            </div>
            <b-card-text>
              mattyといいます。Webエンジニアをやっています。CivicTechとかに興味があったりします。
            </b-card-text>
            <div class="sns-icons mt-3">
              <a href="https://twitter.com/ino_aka_matty" target="_blank" class="mx-2"><b-icon-twitter class="h1" color="#00acee"></b-icon-twitter></a>
              <a href="https://www.facebook.com/10inoino" target="_blank" class="mx-2"><b-icon-facebook class="h1" color="#3b5998"></b-icon-facebook></a>
              <a href="https://github.com/10inoino" target="_blank" class="mx-2"><b-icon-github class="h1" color="#000000"></b-icon-github></a>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
    siteOgImage
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      link: [
        {
          key: `canonical`,
          rel: `canonical`,
          href: this.$static.metadata.siteUrl
        },
      ],
      meta: [
        { key: `og:locale`, property: `og:locale`, content: `ja_JP` },
        { key: `og:type`, property: `og:type`, content: `website` },
        {
          key: `og:url`,
          property: `og:url`,
          content: this.$static.metadata.siteUrl,
        },
        {
          key: `og:site_name`,
          property: `og:site_name`,
          content: this.$static.metadata.siteName,
        },
        {
          key: `og:image`,
          property: `og:image`,
          content:  this.$static.metadata.siteOgImage,
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `Articles | ${this.$static.metadata.siteName}`,
        },
        {
          key: `og:site_name`,
          property: `og:site_name`,
          content: `Articles | ${this.$static.metadata.siteName}`
        },
        {
          key: `og:description`,
          property: `og:description`,
          content: this.$static.metadata.siteDescription,
        }
      ]
    }
  }
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.nav_link {
  color: white;
}

div.avatar,div.sns-icons{
  text-align: center
}

#author-name {
  /*線の種類（二重線）太さ 色*/
  border-bottom: double 5px #FFC778;
  display: inline-block;
}

* {
  font-family: 'Lato', 'Noto Sans JP', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
}
</style>
