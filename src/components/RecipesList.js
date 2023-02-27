import React from "react";
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function RecipesList({ recipes = [] }) {
  const { language } = useI18next();
  const { t } = useTranslation();

  return (
    <div className="recipes-list">
      {recipes
        .filter(({ node_locale }) => node_locale === language)
        .map((recipe) => {
          const { id, slug, title, image, prepTime, cookTime } = recipe;
          return (
            <Link key={id} to={`/recipes/${slug}`} className="recipe">
              <GatsbyImage
                image={getImage(image)}
                className="recipe-img"
                alt={title}
              />
              <h5>{title}</h5>
              <p>
                {t("recipe:listPrep", { time: prepTime })} |{" "}
                {t("recipe:listCook", { time: cookTime })}
              </p>
            </Link>
          );
        })}
    </div>
  );
}

export default RecipesList;
