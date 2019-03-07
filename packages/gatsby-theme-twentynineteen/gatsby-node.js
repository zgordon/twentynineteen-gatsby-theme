const createPosts = require(`./create/createPosts`)
const createTags = require(`./create/createTags`)
const createPages = require(`./create/createPages`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createPages({ actions, graphql })
  await createTags({ actions, graphql })
}
