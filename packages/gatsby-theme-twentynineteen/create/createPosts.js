const { PostTemplateFragment } = require("../src/templates/posts/data.js")
const { BlogPreviewFragment } = require("../src/templates/posts/data.js")
const postTemplate = require.resolve(`../src/templates/posts/single.js`)
const blogTemplate = require.resolve(`../src/templates/posts/archive.js`)

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
`

/**
 * Array to store allPosts. We make paginated requests
 * to WordPress to get allPosts, and once we have all posts,
 * then we iterate over them to create pages.
 *
 * @type {Array}
 */
const allPosts = []

/**
 * Here we store an array of blogPages. For each xx amount of posts
 * we want to create a blogPage so users can browse
 * chunks of data at a time, much like a traditional
 * WordPress paginated archive page.
 *
 * @type {Array}
 */
const blogPages = []

/**
 * We need to track the page number so we can output the paginated
 * archive template with the appropriate path.
 *
 * @type {number}
 */
let pageNumber = 0

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */
module.exports = async ({ actions, graphql }) => {
  /**
   * This is the method from Gatsby that we're going
   * to use to create pages in our static site.
   */
  const { createPage } = actions

  const fetchPosts = async variables => {
    /**
     * Use Axios to fetch posts using
     * the GET_POSTS query and the variables passed in.
     */
    return await graphql(GET_POSTS, variables).then(({ data }) => {
      /**
       * Extract the data from the GraphQL query results
       */
      const {
        wpgraphql: {
          posts: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data
  
      /**
       * Define the path for the paginated blog page.
       * This is the url the page will live at
       * @type {string}
       */
      const blogPagePath = !variables.after ? `/` : `/page/${pageNumber}`
  
      /**
       * Add config for the blogPage to the blogPage array
       * for creating later
       *
       * @type {{path: string, component: string, context: {nodes: *, pageNumber: number, hasNextPage: *}}}
       */
      blogPages[pageNumber] = {
        path: blogPagePath,
        component: blogTemplate,
        context: {
          nodes,
          pageNumber,
          hasNextPage,
        },
      }
  
      /**
       * Map over the posts for later creation
       */
      nodes &&
        nodes.map(post => {
          allPosts.push(post)
        })
  
      /**
       * If there's another page, fetch more
       * so we can have all the data we need.
       */
      if (hasNextPage) {
        pageNumber++
        console.log(`fetch page ${pageNumber} of posts...`)
        return fetchPosts({ first: 10, after: endCursor })
      }
  
      /**
       * Once we're done, return all the posts
       * so we can create the necessary pages with
       * all the data on hand.
       */
      return allPosts
    })
  }

  /**
   * Kick off our `fetchPosts` method which will get us all
   * the posts we need to create individual post pages
   * and paginated blogroll archive pages.
   */
  await fetchPosts({ first: 10, after: null }).then(allPosts => {
    /**
     * Map over the allPosts array to create the
     * single-post pages
     */
    allPosts &&
      allPosts.map(post => {
        console.log(`create post: ${post.uri}`)
        createPage({
          path: `/blog/${post.uri}/`,
          component: postTemplate,
          context: post,
        })
      })

    /**
     * Map over the `blogPages` array to create the
     * paginated blogroll pages
     */
    blogPages &&
      blogPages.map(archivePage => {
        console.log(`createBlogPage ${archivePage.context.pageNumber}`)
        createPage(archivePage)
      })
  })
}
