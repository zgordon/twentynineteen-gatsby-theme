module.exports = {
  siteMetadata: {
    title: `Josh Dot Gatsby Js`,
    description: `Gatsby starter site for Twenty Nineteen Gatsby Theme.`,
    author: `@shelob9`,
    wordPressUrl: `http://dev-futurecapable.pantheonsite.io`
  },
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-twentynineteen",
      options: {
        wordPressUrl: `http://dev-futurecapable.pantheonsite.io`
      }
    }
  ]
};
