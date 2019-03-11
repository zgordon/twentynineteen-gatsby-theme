const createPosts = require(`./create/createPosts`)
const createPages = require(`./create/createPages`)
const createCategories = require(`./create/createCategories`)
const createTags = require(`./create/createTags`)
const createUsers = require(`./create/createUsers`)

exports.createPages = async ({ actions }, options) => {
  await createPosts({ actions }, options)
  await createPages({ actions }, options)
  await createCategories({ actions }, options)
  await createTags({ actions }, options)
  await createUsers({ actions }, options)
}
