<template>
  <Layout>
    <div>
      <b-container>
        <b-row>
          <b-col cols="12" class="p-3 article" v-for="edge in $page.posts.edges" :key="edge.node.id">
            <router-link :to="{ path: edge.node.path}" append>
              <h4 class="mb-2 title">{{edge.node.title}}</h4>
              <div>
                <article v-html="edge.node.excerpt" />
              </div>
            </router-link>
          </b-col>
        </b-row>
      </b-container>
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
        excerpt
        date
      }
    }
  }
}
</page-query>

<style scoped>
.article {
  border-bottom: medium solid #d3d3d3
}

.article:last-child {
  border-bottom: none
}

h4.title {
  color: black;
}

article {
  color: grey;
}
</style>
