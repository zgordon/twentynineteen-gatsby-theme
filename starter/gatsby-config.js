module.exports = {
  siteMetadata: {
    title: `Josh Dot Gatsby Js`,
    description: `Gatsby starter site for Twenty Nineteen Gatsby Theme.`,
    author: `@shelob9`,
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
