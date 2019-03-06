const autoprefixer = require("autoprefixer")

module.exports = {
  siteMetadata: {
    title: `Twenty Nineteen Gatsby`,
    description: `A port of the popular WordPress theme.`,
    siteUrl: "http://localhost:8000",
    author: `@muhsinlk`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ["last 2 versions"],
          }),
        ],
      },
    },
  ],
}
