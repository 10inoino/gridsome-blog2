<template>
  <div class="layout">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <g-link class="navbar-brand" to="/">Inomata's Blog</g-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item><g-link class="nav_link" to="/about/">About Me</g-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.nav_link {
  color: white;
}
</style>
