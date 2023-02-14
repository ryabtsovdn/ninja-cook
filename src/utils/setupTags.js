const setupTags = (recipes) => {
  const allTags = recipes.reduce((acc, item) => {
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
