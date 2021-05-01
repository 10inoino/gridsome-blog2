<template>
  <Layout>
    <div>
      <div v-for="edge in $page.posts.edges" :key="edge.node.id">
        <router-link :to="{ path: edge.node.path}" append><h2>{{ edge.node.title }}</h2></router-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        path
        slug
      }
    }
  }
}
</page-query>