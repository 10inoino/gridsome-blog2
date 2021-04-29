<template>
  <div>
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <router-link :to="{ path: edge.node.path}" append><h2>{{ edge.node.title }}</h2></router-link>
    </div>
  </div>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>