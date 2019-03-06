export const PostTemplateFragment = `
    fragment PostTemplateFragment on Post { 
      id
      postId
      title
      content
    }
`;
export const BlogPreviewFragment = `
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
`;
