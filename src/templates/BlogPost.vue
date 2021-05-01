<template>
  <Layout>
    <div class="article">
      <h1 class="article-title">{{ $page.blogPost.title }}</h1>
      <article v-html="$page.blogPost.content" />
      <p>{{ $page.blogPost.path }}</p>
    </div>
  </Layout>
</template>

<page-query>
query BlogPost($path: String){
   blogPost(path:$path) {
     id
     title
     content
  }
}
</page-query>