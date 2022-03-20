// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(async ({ graphql, createPage }) => {
    // GraphQLで全投稿を検索
    // 投稿年と投稿月だけ取得する
    const { data } = await graphql(`{
      allPost {
        edges {
          node {
            year: date(format: "YYYY")
            month: date(format: "YYYY,MM")
          }
        }
      }
    }`)

    const years = new Set();
    const yearMonths = new Set();

    // 全投稿から取得した投稿年と投稿月の重複を削除
    data.allPost.edges.forEach(({ node }) => {
      years.add(node.year);
      yearMonths.add(node.month);
    });

    // 年ページの作成
    years.forEach(year => {
      createPage({
        path: `/archives/${year}`,
        component: "./src/templates/Archives.vue",
        context: {
          displayYear: year,
          periodStartDate: `${year}-01-01T00:00:00.000Z`,
          periodEndDate: `${year}-12-31T23:59:59.999Z`
        }
      });
    });

    // 月ページの作成
    yearMonths.forEach(yearMonthStr => {
      const yearMonth = yearMonthStr.split(",");
      // 指定した月の末日を取得
      const date = new Date(yearMonth[0], yearMonth[1], 0);
      const year = date.getFullYear();
      const month = ("00" + (date.getMonth() + 1)).slice(-2);
      const day = ("00" + date.getDate()).slice(-2);
      createPage({
        path: `/archives/${yearMonth[0]}/${yearMonth[1]}`,
        component: "./src/templates/Archives.vue",
        context: {
          displayYear: `${yearMonth[0]}/${yearMonth[1]}`,
          periodStartDate: `${year}-${month}-01T00:00:00.000Z`,
          periodEndDate: `${year}-${month}-${day}T23:59:59.999Z`
        }
      });
    });
  })
}
