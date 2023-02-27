const setupTags = (recipes, language) => {
  const allTags = recipes
    .filter(({ node_locale }) => node_locale === language)
    .reduce((acc, item) => {
      const tags = item.content.tags;

      tags.forEach((tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
      });

      return acc;
    }, {});

  const sortedTags = Object.entries(allTags).sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });

  return sortedTags;
};

export default setupTags;
