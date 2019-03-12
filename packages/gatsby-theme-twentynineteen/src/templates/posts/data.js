const PostTemplateFragment = `
  fragment PostTemplateFragment on WPGraphQL_Post { 
    id
    postId
    title
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
  }
`

const BlogPreviewFragment = `
  fragment BlogPreviewFragment on WPGraphQL_Post {
    id
    postId
    title
    uri
    date
    excerpt
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
module.exports.BlogPreviewFragment = BlogPreviewFragment
