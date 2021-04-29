<template>
  <Layout>
    <div class="article">
      <h1 class="article-title">title: {{ $page.post.title }}</h1>
      <article v-html="$page.post.content" />
      <p>{{ $page.post.path }}</p>
    </div>
  </Layout>
</template>

<page-query>
query Post($id: ID!){
   post(id:$id) {
    id
    title
    content
    path
  }
}
</page-query>