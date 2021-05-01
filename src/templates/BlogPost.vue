<template>
  <Layout>
    <b-container>
      <div class="article">
        <h1 class="article-title my-3">{{ $page.blogPost.title }}</h1>
        <article v-html="$page.blogPost.content" />
        <p>path: {{ $page.blogPost.path }}</p>
      </div>
    </b-container>
  </Layout>
</template>

<page-query>
query BlogPost($path: String){
   blogPost(path:$path) {
     id
     title
     content
     path
  }
}
</page-query>

<style scoped>
h1 {
  background: linear-gradient(transparent 70%, #a7d6ff 70%);
}

article {
  word-break: break-all;
}
</style>