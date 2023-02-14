const path = require("path");
const slugify = require("slugify");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetTags {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  const allTags = result.data.allContentfulRecipe.nodes.reduce((acc, item) => {
    const { tags } = item.content;

    tags.forEach((tag) => {
      acc.add(tag);
    });

    return acc;
  }, new Set());

  [...allTags].forEach((tag) => {
    const slug = slugify(tag, { lower: true });

    createPage({
      path: `/tags/${slug}`,
      component: path.resolve(__dirname, "src/templates/TagTemplate.js"),
      context: {
        tag,
      },
    });
  });
};
