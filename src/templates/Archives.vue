<template>
  <Layout>
    <div>
      <h1 class="entry-title" itemprop="headline">
        Archives - {{ $context.displayYear }} {{ $context.periodEndDate }}
      </h1>
      <b-col cols="12" class="p-3 article" v-for="edge in $page.archives.edges" :key="edge.node.id">
        <router-link :to="{ path: edge.node.path}" append>
          <div><b-icon-calendar class="mr-2"></b-icon-calendar>{{edge.node.date}}</div>
          <h3 class="mb-2 title">{{edge.node.title}}</h3>
        </router-link>
      </b-col>
    </div>
  </Layout>
</template>

<page-query>
query PostsByDate($periodStartDate: Date, $periodEndDate: Date) {
  archives: allPost(filter: {date: {between: [$periodStartDate, $periodEndDate]} }) {
    edges {
      node {
        id
        title
        path
        date(format: "YYYY/MM/DD")
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