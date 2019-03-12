const createPosts = require(`./create/createPosts`)
const createPages = require(`./create/createPages`)
const createUsers = require(`./create/createUsers`)
const createCategories = require(`./create/createCategories`)
const createTags = require(`./create/createTags`)

exports.createPages = async ({ actions, graphql }, options) => {
  await createPosts({ actions, graphql }, options)
  await createPages({ actions, graphql }, options)
  await createUsers({ actions, graphql }, options)
  await createCategories({ actions, graphql }, options)
  await createTags({ actions, graphql }, options)
}
