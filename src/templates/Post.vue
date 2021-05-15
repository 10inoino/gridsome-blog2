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
      title: this.$page.post.title,
      link: [
        {
          key: `canonical`,
          rel: `canonical`,
          href: this.$page.metadata.siteUrl + this.$page.post.path,
        },
      ],
      meta: [
        { key: `og:locale`, property: `og:locale`, content: `ja_JP` },
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
        },
        {
          key: `og:site_name`,
          property: `og:site_name`,
          content: `${this.$page.post.title} | ${this.$page.metadata.siteName}`,
        },
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
  margin: 0.7em 0;
  font-weight: bold;
}

.article-body >>> h2 {
  font-size: 1.2rem;
  padding: 0.25em 0.4em;/*上下 左右の余白*/
  color: #494949;/*文字色*/
  background: transparent;/*背景透明に*/
  border-left: solid 5px #3498db;/*左線*/
  margin: 0.7em 0;
  font-weight: bold;
}

.article-body >>> h3 {
  border-bottom: solid 3px #3498db;
}

.article-body >>> img {
  max-width: 100%;
}

.article-body >>> iframe {
  margin: 0 0 1em 0
}

.article-body >>> li {
  margin: 0 0 1em 0
}

.article-body >>> ul {
  margin: 0 0 1em 0
}

.article-body >>> ul>li {
  margin: 0 0 0.5em 0
}
</style>