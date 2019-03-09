const createPosts = require(`./create/createPosts`)
const createPages = require(`./create/createPages`)
const createCategories = require(`./create/createCategories`)
const createTags = require(`./create/createTags`)
const createUsers = require(`./create/createUsers`)

exports.createPages = async ({ actions }) => {
  await createPosts({ actions })
  await createPages({ actions })
  await createCategories({ actions })
  await createTags({ actions })
  await createUsers({ actions })
}
