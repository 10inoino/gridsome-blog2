module.exports = {
  siteName: "Cooooool Site!!!!",
  plugins: [
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: "http://inoblog.wp.xdomain.jp/", // required
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