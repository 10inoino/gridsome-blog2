<template>
  <Layout>
    <div class='my-4'>
      <h1 id="MAIN_START">{{ $page.post.title }}</h1>
      <div class="mb-3 article-date"><b-icon-calendar class="mr-2"></b-icon-calendar>{{reduceDate($page.post.date)}}</div>
      <article class="article-body" v-html="$page.post.content" />
      <g-link id='back2home' to="/"><b-icon-chevron-double-left/>home</g-link>
    </div>
  </Layout>
</template>

<page-query>
query blogPost($id: ID!){
  post(id:$id) {
    id
    title
    content
    date
  }
  metadata {
    siteName
    siteUrl
  }
}
</page-query>

<script>
export default {
  methods: {
    reduceDate(date) {
      return date.substr(0, 10);
    },
  },
  metaInfo() {
    return {
      title: `${this.$page.post.title} |`,
      link: [
        {
          key: `canonical`,
          rel: `canonical`,
          href: this.$page.metadata.siteUrl + this.$page.post.path,
        },
      ],
      meta: [
        { key: `og:type`, property: `og:type`, content: `article` },
        {
          key: `og:url`,
          property: `og:url`,
          content: this.$page.metadata.siteUrl + this.$page.post.path,
        },
        {
          key: `og:title`,
          property: `og:title`,
          content: `${this.$page.post.title} | ${this.$page.metadata.siteName}`,
        }
      ]
    }
  }
}
</script>

<style scoped>
#back2home {
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}

#back2home:hover {
  color: #0056b3;
  text-decoration: underline;
}

#MAIN_START {
  position: relative;
  border-bottom: 10px solid #ccc;
  font-size: 2rem;
}
#MAIN_START::after {
  position: absolute;
  bottom: -10px;
  left: 0;
  z-index: 2;
  content: '';
  width: 20%;
  height: 10px;
  background-color: #3498db;
}

article {
  overflow-wrap: break-word;
}

.article-date {
  font-size: 1.2rem;
  color: #494949;
}

.article-body >>> h1 {
  font-size: 1.5rem;
  padding: 0.4em 0.5em;/*文字の上下 左右の余白*/
  color: #494949;/*文字色*/
  background: #f4f4f4;/*背景色*/
  border-left: solid 5px #7db4e6;/*左線*/
  border-bottom: solid 3px #d7d7d7;/*下線*/
  margin: 1.0em 0 0.7em;
  font-weight: bold;
}

.article-body >>> h2 {
  font-size: 1.2rem;
  padding: 0.25em 0.4em;/*上下 左右の余白*/
  color: #494949;/*文字色*/
  background: transparent;/*背景透明に*/
  border-left: solid 5px #3498db;/*左線*/
  margin: 1.0em 0 0.7em;
  font-weight: bold;
}

.article-body >>> h3 {
  border-bottom: solid 3px #3498db;
}

.article-body >>> img {
  width:auto;
  height:auto;
  max-width: 80%;
  max-height: 60vh;
  border: 2px #d3d3d3 solid;
  margin: 1.0em 0 1.0em;
}

.article-body >>> iframe {
  margin: 0 0 1em 0
}

.article-body >>> li {
  margin: 0 0 1em 0
}

.article-body >>> ul {
  margin: 0 0 0.5em 0
}

.article-body >>> ul>li {
  margin: 0 0 0.5em 0
}

.article-body >>> ol {
  margin: 0 0 0.5em 0
}

.article-body >>> ol>li {
  margin: 0 0 0.5em 0
}

.article-body >>> p>strong {
  font-size: 1.2em;
  margin: 0 0.2em 0 0.2em
}

.article-body >>> ul>li>p {
  margin: 0 0 0.5em 0
}

.article-body >>> p {
  margin: 0 0 0.8em 0
}

.article-body >>> pre {
  margin: 0 0 1.0em 0
}

.article-body >>> blockquote:not(.twitter-tweet) {
  position: relative;
  padding: 30px 15px 8px 15px;
  box-sizing: border-box;
  font-style: italic;
  background: #efefef;
  color: #555;
}

.article-body >>> blockquote:not(.twitter-tweet):before{
  display: inline-block;
  position: absolute;
  top: 5px;
  left: 3px;
  content: "“";
  font-family: Arial;
  font-weight: bold;
  color: #cfcfcf;
  font-size: 90px;
  line-height: 1;
}

.article-body >>> blockquote:not(.twitter-tweet) p {
  padding: 0;
  margin: 20px 0 10px;
  line-height: 1.7;
}

.article-body >>> blockquote:not(.twitter-tweet) cite {
  display: block;
  text-align: right;
  color: #888888;
  font-size: 0.9em;
}

.article-body >>> blockquote.twitter-tweet {
  display: inline-block;
  font-family: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 16px;
  border-color: #eee #ddd #bbb;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  margin: 10px 5px;
  padding: 0 16px 16px 16px;
  max-width: 468px;
}

.article-body >>> blockquote.twitter-tweet p {
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
}

.article-body >>> blockquote.twitter-tweet a {
  color: inherit;
  font-weight: normal;
  text-decoration: none;
  outline: 0 none;
}

.article-body >>> blockquote.twitter-tweet a:hover,
.article-body >>> blockquote.twitter-tweet a:focus {
  text-decoration: underline;
}
</style>