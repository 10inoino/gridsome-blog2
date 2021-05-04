<template>
  <Layout>
    <b-row id="article-list">
      <b-col cols="12" class="p-3 article" v-for="edge in $page.posts.edges" :key="edge.node.id">
        <router-link :to="{ path: edge.node.path}" append>
          <div><b-icon-calendar class="mr-2"></b-icon-calendar>{{reduceDate(edge.node.date)}}</div>
          <h3 class="mb-2 title">{{edge.node.title}}</h3>
          <div>
            <article v-html="edge.node.excerpt" />
          </div>
        </router-link>
      </b-col>
    </b-row>
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
query {
  posts: allPost {
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
  word-break: break-all;
}

* {
  color:black
}
</style>
