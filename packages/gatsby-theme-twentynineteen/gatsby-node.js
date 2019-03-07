const createPosts = require(`./create/createPosts`)
const createPages = require(`./create/createPages`)
const createTags = require(`./create/createTags`)

exports.createPages = async ({ actions }) => {
  await createPosts({ actions })
  await createPages({ actions })
  await createTags({ actions })
}
