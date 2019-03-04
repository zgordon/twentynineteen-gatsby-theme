var axios = require("axios");

exports.createPages = async ({ actions, graphql }) => {
  // await createPosts({ actions, graphql });

  const { createPage } = actions;

  const GET_POSTS = `
    query GET_POSTS($first:Int $after:String) {
        posts(
            first: $first 
            after:$after
        ) {
            pageInfo {
            endCursor
            hasNextPage
            }
            edges {
                node {
                    uri
                    title
                    content
                }
            }
        }
    }`;
  const res = await axios({
    url: "https://www.mtwoblog.com/graphql",
    method: "get",
    params: {
      QUERY: GET_POSTS
    }
  });
  const {
    data: {
      posts: {
        edges: allPosts,
        pageInfo: { hasNextPage, endCursor }
      }
    }
  } = res.data;

  console.log("success:posts ", res.data);

  const postTemplate = require.resolve(`./src/templates/post.js`);

  allPosts.map(post => {
    post = post.node;
    console.log(`create post: ${post.uri}`);
    createPage({
      path: `/blog/${post.uri}/`,
      component: postTemplate,
      context: post
    });
  });
};
