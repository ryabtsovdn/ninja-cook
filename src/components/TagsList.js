import React from "react";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import slugify from "slugify";

import setupTags from "../utils/setupTags";

function TagsList({ recipes }) {
  const { t } = useTranslation();
  const tags = setupTags(recipes);

  return (
    <div className="tag-container">
      <h4>{t("menu:tags")}</h4>
      <div className="tags-list">
        {tags.map((tag) => {
          const [text, count] = tag;

          return (
            <Link key={text} to={`/tags/${slugify(text, { lower: true })}`}>
              {text} ({count})
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TagsList;
