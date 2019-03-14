const PostTemplateFragment = `
  fragment PostTemplateFragment on WPGraphQL_Post { 
    id
    postId
    title
    excerpt
    uri
    date
    content
    categories {
      nodes {
        name
        slug
      }
    }
    tags {
      nodes {
        slug
        name
      }
    }
    author {
      name
      avatar(size:50) {
        url
      }
      slug
    }
  }
`

module.exports.PostTemplateFragment = PostTemplateFragment
