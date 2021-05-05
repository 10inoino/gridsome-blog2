<template>
  <Layout>
    <b-container>
      <div class='m-4'>
        <h2 id="title">{{ $page.post.title }}</h2>
        <div class="mb-3 article-date"><b-icon-calendar class="mr-2"></b-icon-calendar>{{reduceDate($page.post.date)}}</div>
        <article class="article-body" v-html="$page.post.content" />
        <g-link id='back2home' to="/"><b-icon-chevron-double-left/>home</g-link>
      </div>
    </b-container>
  </Layout>
</template>

<script>
export default {
  methods: {
    reduceDate(date) {
      return date.substr(0, 10);
    },
  },
}
</script>

<page-query>
query blogPost($id: ID!){
  post(id:$id) {
    id
    title
    content
    date
  }
}
</page-query>

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

#title {
  position: relative;
  border-bottom: 10px solid #ccc;
}
#title::after {
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
  word-break: break-all;
}

.article-date {
  font-size: 20px;
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
}

.article-body >>> h2 {
  font-size: 1.2rem;
  padding: 0.25em 0.4em;/*上下 左右の余白*/
  color: #494949;/*文字色*/
  background: transparent;/*背景透明に*/
  border-left: solid 7px #3498db;/*左線*/
  margin: 0.7em 0;
}

.article-body >>> h3 {
  border-bottom: solid 3px #3498db;
}

.article-body >>> img {
  max-width: 100%;
}
</style>