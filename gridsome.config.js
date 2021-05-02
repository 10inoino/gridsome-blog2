module.exports = {
  siteName: "MattyLogs",
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
  },
  icon: {
    favicon: "./src/assets/images/nigaoe.png",
    touchicon: {
      src: "./src/assets/images/nigaoe.png",
      sizes: [76, 152, 120, 167],
      precomposed: true,
    },
  }
};