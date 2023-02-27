const setupTags = (recipes, language) => {
  const allTags = recipes
    .filter(({ node_locale }) => node_locale === language)
    .reduce((acc, item) => {
      const tags = item.tags;

      tags.forEach((tag) => {
        const { slug, title } = tag;

        if (!acc[slug]) {
          acc[slug] = { text: title, count: 0 };
        }

        acc[slug].count++;
      });

      return acc;
    }, {});

  const tagsArray = Object.keys(allTags).reduce((acc, slug) => {
    const { text, count } = allTags[slug];
    acc.push([slug, text, count]);

    return acc;
  }, []);

  const sortedTags = tagsArray.sort((a, b) => {
    return a[1].localeCompare(b[1]);
  });

  return sortedTags;
};

export default setupTags;
