module.exports = {
  siteMetadata: {
    title: `Future Capable`,
    description: `Just Another Headless WordPress Site`,
    author: `@shelob9`,
    wordPressUrl: `http://live-futurecapable.pantheonsite.io/`
  },
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-twentynineteen",
      options: {
        wordPressUrl: `http://live-futurecapable.pantheonsite.io/`
      }
    }
  ]
};
