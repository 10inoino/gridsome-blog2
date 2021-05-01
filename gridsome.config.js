module.exports = {
  siteName: "Inomata's Blog",
  plugins: [
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: process.env.WORDPRESS_URL,
        typeName: "blog",
        apiBase: 'wp-json',
        perPage: 10,
        concurrent: 1,
      },
    },
  ],
  templates: {
    BlogPost: "/:year/:month/:day/:slug",
  }
};