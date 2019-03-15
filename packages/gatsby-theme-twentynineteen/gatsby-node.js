const createPosts = require(`./scripts/createPosts`)
const createPages = require(`./scripts/createPages`)
const createUsers = require(`./scripts/createUsers`)
const createCategories = require(`./scripts/createCategories`)
const createTags = require(`./scripts/createTags`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createPages({ actions, graphql })
  await createUsers({ actions, graphql })
  await createCategories({ actions, graphql })
  await createTags({ actions, graphql })
}
