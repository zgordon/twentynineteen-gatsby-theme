const createPosts = require(`./create/createPosts`)
const createPages = require(`./create/createPages`)
const createUsers = require(`./create/createUsers`)
const createCategories = require(`./create/createCategories`)
const createTags = require(`./create/createTags`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createPages({ actions, graphql })
  await createUsers({ actions, graphql })
  await createCategories({ actions, graphql })
  await createTags({ actions, graphql })
}
