import React from "react";
import { graphql } from "gatsby";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import slugify from "slugify";

import Layout from "../../components/Layout";
import Meta from "../../components/Meta";

export const Head = ({ data, pageContext: { language } }) => {
  const { title, description } = data.contentfulRecipe;

  return (
    <Meta
      title={`Ninja Cook - ${title}`}
      description={description}
      language={language}
    />
  );
};

export const query = graphql`
  query getSingleRecipe($slug: String, $language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    contentfulRecipe(slug: { eq: $slug }, node_locale: { eq: $language }) {
      slug
      title
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      cookTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      node_locale
    }
  }
`;

function RecipeTemplate({ data }) {
  const { t } = useTranslation();
  const {
    title,
    cookTime,
    prepTime,
    content,
    description: { description },
    servings,
    image,
  } = data.contentfulRecipe;
  const { tags, tools, ingredients, instructions } = content;

  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage image={getImage(image)} alt={title} />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>{t("recipe:prepTime")}</h5>
                  <p>{t("recipe:minCount", { count: prepTime })}</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>{t("recipe:cookTime")}</h5>
                  <p>{t("recipe:minCount", { count: cookTime })}</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>{t("recipe:servings")}</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <p className="recipe-tags">
                {t("menu:tags")}:
                {tags.map((tag) => {
                  return (
                    <Link
                      key={tag}
                      to={`/tags/${slugify(tag, { lower: true })}`}
                    >
                      {tag}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>{t("recipe:instructions")}</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>{t("recipe:step", { number: index + 1 })}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                );
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>{t("recipe:ingredients")}</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  );
                })}
              </div>
              <div>
                <h4>{t("recipe:tools")}</h4>
                {tools.map((item, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {item}
                    </p>
                  );
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default RecipeTemplate;
