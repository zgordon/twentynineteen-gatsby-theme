const PostTemplateFragment = `
    fragment PostTemplateFragment on Post { 
      id
      postId
      title
      content
    }
`
const BlogPreviewFragment = `
fragment BlogPreviewFragment on Post {
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
    }
}
`

module.exports.PostTemplateFragment = PostTemplateFragment
module.exports.BlogPreviewFragment = BlogPreviewFragment
