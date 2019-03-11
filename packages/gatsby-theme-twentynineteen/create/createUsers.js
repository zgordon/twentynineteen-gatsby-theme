const axios = require("axios")
// const config = require("../config")
const userTemplate = require.resolve(`../src/templates/users/single.js`)

/**
 * This is the query that is used to fetch the users to
 * create the single user and user archive pages.
 *
 * @todo: define/use fragments for each template...
 *
 * @type {string}
 */
const GET_USERS = `
# Define our query variables
query GET_USERS($first:Int $after:String) {

  # Ask for users
  users(
    # Ask for the first XX number of users
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
   * Array to store allUsers. We make paginated requests
   * to WordPress to get allUsers, and once we have all users,
   * then we iterate over them to create pages.
   *
   * @type {Array}
   */
  const allUsers = []

  /**
   * We need to track the page number so we can output the paginated
   * archive template with the appropriate path.
   *
   * @type {number}
   */
  let pageNumber = 0

  /**
   * Fetch users method. This accepts variables to alter
   * the query. The variable `first` controls how many items to
   * request per fetch and the `after` controls where to start in
   * the dataset.
   *
   * @param variables
   * @returns {Promise<*>}
   */
  const fetchUsers = async variables => {
    /**
     * Use Axios to fetch users using
     * the GET_USERS query and the variables passed in.
     */
    return await axios({
      url: `${options.wordPressUrl}/graphql`,
      method: "post",
      data: {
        query: GET_USERS,
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
          users: {
            pageInfo: { endCursor, hasNextPage },
            nodes,
          },
        },
      } = data

      /**
       * Map over the users for later creation
       */
      nodes &&
        nodes.map(user => {
          allUsers.push(user)
        })

      /**
       * If there's another page, fetch more
       * so we can have all the data we need.
       */
      if (hasNextPage) {
        pageNumber++
        console.log(`fetch page ${pageNumber} of users...`)
        return fetchUsers({ first: 10, after: endCursor }, options)
      }

      /**
       * Once we're done, return all the users
       * so we can create the necessary pages with
       * all the data on hand.
       */
      return allUsers
    })
  }

  /**
   * Kick off our `fetchUsers` method which will get us all
   * the posts we need to create individual user pages
   * and paginated user archive pages.
   */
  await fetchUsers({ first: 10, after: null }, options).then(allUsers => {
    /**
     * Map over the allUsers array to create the
     * single-user pages
     */
    allUsers &&
      allUsers.map(user => {
        console.log(`create user: ${user.slug}`)
        createPage({
          path: `/blog/author/${user.slug}`,
          component: userTemplate,
          context: {
            ...user,
            wordPressUrl: options.wordPressUrl,
          },
        })
      })
  })
}
