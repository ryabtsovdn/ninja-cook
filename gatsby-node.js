const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const tagsData = await graphql(`
    query GetTags {
      allContentfulRecipe {
        nodes {
          tags {
            slug
            title
          }
          node_locale
        }
      }
    }
  `);

  const allTags = tagsData.data.allContentfulRecipe.nodes.reduce(
    (acc, item) => {
      const { tags, node_locale } = item;

      tags.forEach(({ slug, title }) => {
        if (!acc[slug]) {
          acc[slug] = { title: {} };
        }

        acc[slug].slug = slug;
        acc[slug].title[node_locale] = title;
      });

      return acc;
    },
    {}
  );

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
