const axios = require("axios");

import config from '../config.js';
const { PostContentFragment } = require('../src/templates/Post/data');

module.exports = async ({ graphql, actions }) => {
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
                    ...PostContentFragment
                }
            }
        }
    }
    ${PostContentFragment}
    `;
  const res = await axios({
    url: `${config.wordPressUrl}/graphql`,
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

  const postTemplate = require.resolve(`../src/templates/Post`);

  allPosts.map(post => {
    post = post.node;
    console.log(`create post: ${post.uri}`);
    console.log( post );
    createPage({
      path: `/blog/${post.uri}/`,
      component: postTemplate,
      context: post
    });
  });

  /*
  const GET_POSTS = `
      query GET_POSTS($first:Int $after:String){
        wpgraphql {
          posts(
            first: $first
            after:$after
          ) {
            pageInfo {
              endCursor
              hasNextPage
            }
            nodes {
              id
              uri
              postId
              title
            }
          }
        }
      }
      `;
  const { createPage } = actions;
  const allPosts = [];
  //   const blogPages = [];
  //   let pageNumber = 0;
  const fetchPosts = async variables =>
    await graphql(GET_POSTS, variables).then(({ data }) => {
      const {
        wpgraphql: {
          posts: {
            nodes,
            pageInfo: { hasNextPage, endCursor }
          }
        }
      } = data;

        const nodeIds = nodes.map(node => node.postId);
        const blogTemplate = path.resolve(`../src/templates/blog.js`);
        const blogPagePath = !variables.after ? `/` : `/page/${pageNumber}`;

        blogPages[pageNumber] = {
          path: blogPagePath,
          component: blogTemplate,
          context: {
            ids: nodeIds,
            pageNumber: pageNumber,
            hasNextPage: hasNextPage
          },
          ids: nodeIds
        };
      nodes.map(post => {
        allPosts.push(post);
      });
        if (hasNextPage) {
          pageNumber++;
          return fetchPosts({ first: 12, after: endCursor });
        }
      return allPosts;
    });

  await fetchPosts({ first: 12, after: null }).then(allPosts => {
    const postTemplate = require.resolve(`../src/templates/post.js`);

    blogPages.map(blogPage => {
      console.log(`createBlogPage ${blogPage.context.pageNumber}`);
      createPage(blogPage);
    });

    allPosts.map(post => {
      console.log(`create post: ${post.uri}`);
      createPage({
        path: `/blog/${post.uri}/`,
        component: postTemplate,
        context: post
      });
    });
  });
  */
};
