module.exports = {
  plugins: [
    // Setup WPGraphQL.com to be the source
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `https://mtwoblog.com/graphql`
      }
    }
  ]
};
