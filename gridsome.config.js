module.exports = {
  siteName: "MattyLogs",
  titleTemplate: `%s MattyLogs`,
  siteUrl: `https://mattylogs.com`,
  siteDescription: `MattyがLogを書き残す場所`,
  metadata: {
    siteOgImage: `./src/assets/images/nigaoe.png`,
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './blog/**/*.md',
        remark: {
          plugins: [
            [
              '@gridsome/remark-prismjs',{
                showLineNumbers: true
              }
            ]
          ]
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-196355869-2'
      }
    }
  ],
  templates: {
    Post: '/blog/:id',
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