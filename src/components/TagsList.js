import React from "react";
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next";

import setupTags from "../utils/setupTags";

function TagsList({ recipes }) {
  const { language } = useI18next();
  const { t } = useTranslation();
  const tags = setupTags(recipes, language);

  return (
    <div className="tag-container">
      <h4>{t("menu:tags")}</h4>
      <div className="tags-list">
        {tags.map((tag) => {
          const [slug, text, count] = tag;

          return (
            <Link key={text} to={`/tags/${slug}`}>
              {text} ({count})
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TagsList;
