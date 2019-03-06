const createPosts = require(`./create/createPosts`)
// const createTags = require(`./create/createTags`);

exports.createPages = async ({ actions }) => {
  await createPosts({ actions })
  // await createTags({ actions })
}
