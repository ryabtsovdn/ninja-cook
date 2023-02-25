import React from "react";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";

function RecipesList({ recipes = [] }) {
  const { t } = useTranslation();

  return (
    <div className="recipes-list">
      {recipes.map((recipe) => {
        const { id, title, image, prepTime, cookTime } = recipe;
        return (
          <Link
            key={id}
            to={`/${slugify(title, {
              lower: true,
            })}`}
            className="recipe"
          >
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
