module.exports = {
  siteMetadata: {
    title: `Twenty Nineteen Starter`,
    description: `Gatsby starter site for Twenty Nineteen Gatsby Theme.`,
    author: `@muhsinlk`,
    wordPressUrl: `http://dev-twenty-nineteen-gatsby-demo.pantheonsite.io`
  },
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-twentynineteen",
      options: {
        wordPressUrl: `http://dev-twenty-nineteen-gatsby-demo.pantheonsite.io`
      }
    }
  ]
};
