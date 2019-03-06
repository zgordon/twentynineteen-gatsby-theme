const autoprefixer = require("autoprefixer")

module.exports = {
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
