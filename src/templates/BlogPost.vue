<template>
  <Layout>
    <b-container>
      <h1 id="title">{{ $page.blogPost.title }}</h1>
      <div class="mb-3 article-date"><b-icon-calendar class="mr-2"></b-icon-calendar>{{reduceDate($page.blogPost.date)}}</div>
      <b-media>
        <article class="article-body" v-html="$page.blogPost.content" />
      </b-media>
      <g-link id='back2home' to="/"><b-icon-chevron-double-left/>トップに戻る</g-link>
    </b-container>
  </Layout>
</template>

<script>
export default {
  methods: {
    reduceDate(date) {
      return date.substr(0, 10);
    },
  }
}
</script>

<page-query>
query BlogPost($path: String){
   blogPost(path:$path) {
     id
     title
     content
     date
  }
}
</page-query>

<style scoped>
#back2home {
  font-size: 20px;
  color: black;
}

#title {
  font-size: 70px;
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
  padding: 0.4em 0.5em;/*文字の上下 左右の余白*/
  color: #494949;/*文字色*/
  background: #f4f4f4;/*背景色*/
  border-left: solid 5px #7db4e6;/*左線*/
  border-bottom: solid 3px #d7d7d7;/*下線*/
}

.article-body >>> h2 {
  padding: 0.25em 0.4em;/*上下 左右の余白*/
  color: #494949;/*文字色*/
  background: transparent;/*背景透明に*/
  border-left: solid 7px #3498db;/*左線*/
}

.article-body >>> h3 {
  border-bottom: solid 3px #3498db;
}
</style>