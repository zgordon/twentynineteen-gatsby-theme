const axios = require("axios")
// const config = require("../config")
const tagTemplate = require.resolve(`../src/templates/tags/single.js`)

/**
 * This is the query that is used to fetch the tags to
 * create the single tag and tag archive pages.
 *
 * @todo: define/use fragments for each template...
 *
 * @type {string}
 */
const GET_TAGS = `
# Define our query variables
query GET_TAGS($first:Int $after:String) {

  # Ask for tags
  tags(
    # Ask for the first XX number of tags
    first:$first 
    
    # A cursor to where in the dataset our query should begin
    # and get items _after_ that point
    after:$after
  ) {
  
    # In response, we'll want pageInfo so we know if we need
    # to fetch more posts or not
    pageInfo {
    
      # If true, we need to ask for more data
      hasNextPage
      
      # This cursor will be used for the value for $after
      # if we need to ask for more data
      endCursor
    }
    nodes {
    
      # The fields needed to create the templates
      name
      slug
      posts {
        nodes {
          id
          postId
          title
          slug
          excerpt
          uri
          author {
            name
            avatar(size:50) {
              url
            }
            slug
          }
          date
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
      }
    }
  }
}
`

/**
 * This is the export which Gatsby will use to process.
 *
 * @param actions
 * @returns {Promise<void>}
 */
module.exports = async ({ actions }, options) => {
  /**
   * This is the method from Gatsby that we're going
   * to use to create pages in our static site.
   */
  const { createPage } = actions

  /**
   * Array to store allTags. We make paginated requests
   * to WordPress to get allTags, and once we have all tags,
   * then we iterate over them to create pages.
   *
   * @type {Array}
   */
  const allTags = []

  /**
   * We need to track the page number so we can output the paginated
   * archive template with the appropriate path.
   *
   * @type {number}
   */
  let pageNumber = 0

  /**
   * Fetch tags method. This accepts variables to alter
   * the query. The variable `first` controls how many items to
   * request per fetch and the `after` controls where to start in
   * the dataset.
   *
   * @param variables
   * @returns {Promise<*>}
   */
  const fetchTags = async variables => {
    /**
     * Use Axios to fetch tags using
     * the GET_TAGS query and the variables passed in.
     */
    return await axios({
      url: `${options.wordPressUrl}/graphql`,
      method: "post",
      data: {
        query: GET_TAGS,
        variables,
      },
      /**
       * The results of the Axios request are passed here
       */
    }).then(({ data }) => {
      /**
       * Extract the data from the GraphQL query results
       */
      const {
        data: {
          tags: {
            pageInfo: { endCursor, hasNextPage },
            nodes,
          },
        },
      } = data

      /**
       * Map over the tags for later creation
       */
      nodes &&
        nodes.map(tag => {
          allTags.push(tag)
        })

      /**
       * If there's another page, fetch more
       * so we can have all the data we need.
       */
      if (hasNextPage) {
        pageNumber++
        console.log(`fetch page ${pageNumber} of tags...`)
        return fetchTags({ first: 10, after: endCursor }, options)
      }

      /**
       * Once we're done, return all the tags
       * so we can create the necessary pages with
       * all the data on hand.
       */
      return allTags
    })
  }

  /**
   * Kick off our `fetchTags` method which will get us all
   * the posts we need to create individual tag pages
   * and paginated tag archive pages.
   */
  await fetchTags({ first: 10, after: null }, options).then(allTags => {
    /**
     * Map over the allTags array to create the
     * single-tag pages
     */
    allTags &&
      allTags.map(tag => {
        console.log(`create tag: ${tag.slug}`)
        createPage({
          path: `/blog/tag/${tag.slug}`,
          component: tagTemplate,
          context: {
            ...tag,
            wordPressUrl: options.wordPressUrl,
          },
        })
      })
  })
}
