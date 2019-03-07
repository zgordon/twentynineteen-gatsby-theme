const createPosts = require(`./create/createPosts`)
const createTags = require(`./create/createTags`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createTags({ actions, graphql })
}
