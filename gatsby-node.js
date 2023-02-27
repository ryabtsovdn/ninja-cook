const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetTags {
      allContentfulRecipe {
        nodes {
          tags {
            slug
            title
          }
        }
      }
    }
  `);

  const allTags = result.data.allContentfulRecipe.nodes.reduce((acc, item) => {
    const { tags } = item;

    tags.forEach((tag) => {
      acc[tag.slug] = tag;
    });

    return acc;
  }, {});

  Object.keys(allTags).forEach((slug) => {
    createPage({
      path: `/tags/${slug}`,
      component: path.resolve(__dirname, "src/templates/TagTemplate.js"),
      context: {
        ...allTags[slug],
      },
    });
  });
};
