<template>
  <Layout>
    <div class="my-4">
      <h1 id="title" class="entry-title" itemprop="headline">
        Archives - {{ $context.displayYear }}
      </h1>
      <b-col
        cols="12"
        class="p-3 article"
        v-for="edge in filterByDate($page.posts.edges, $context.dateRegex)"
        :key="edge.node.id"
      >
        <router-link :to="{ path: edge.node.path }" append>
          <div>
            <b-icon-calendar class="mr-2"></b-icon-calendar>{{ edge.node.date }}
          </div>
          <h3 class="mb-2 title">{{ edge.node.title }}</h3>
          <div>
            <article v-html="edge.node.excerpt" />
          </div>
        </router-link>
      </b-col>
      <div class="my-4 ml-2">
        <g-link id="back2home" to="/"
          ><b-icon-chevron-double-left />home</g-link
        >
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
        path
        excerpt
        date(format: "YYYY/MM/DD")
      }
    }
  }
}
</page-query>

<script>
export default {
  methods: {
    filterByDate(articles, regexPattern) {
      const regex = new RegExp("^" + regexPattern + ".*");
      console.log(regex);
      // const regex = /^2022\/03.*/;
      return articles.filter((article) => regex.test(article.node.date));
    },
  },
};
</script>

<style scoped>
#title {
  position: relative;
  border-bottom: 10px solid #ccc;
  font-size: 2rem;
}
#title::after {
  position: absolute;
  bottom: -10px;
  left: 0;
  z-index: 2;
  content: "";
  width: 20%;
  height: 10px;
  background-color: #3498db;
}

.article {
  border-bottom: medium solid #d3d3d3;
}

.article:last-child {
  border-bottom: none;
}

h4.title {
  color: black;
}

article {
  color: grey;
  word-break: break-all;
}

* {
  color: black;
}

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
</style>
