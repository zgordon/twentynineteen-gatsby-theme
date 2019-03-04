const createPosts = require(`./create/createPosts`);

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql });
};
