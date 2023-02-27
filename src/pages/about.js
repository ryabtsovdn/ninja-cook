import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import Meta from "../components/Meta";

export const Head = ({ pageContext: { language } }) => (
  <Meta title="Ninja Cook - About" language={language} />
);

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        slug
        cookTime
        prepTime
        title
        image {
          id
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
        node_locale
      }
    }
  }
`;

function About({ data }) {
  const recipes = data.allContentfulRecipe.nodes;
  const { t } = useTranslation();

  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>{t("about:title")}</h2>
            <p>{t("about:p1")}</p>
            <p>{t("about:p2")}</p>
            <Link to="/contact" className="btn">
              {t("menu:contact")}
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Grilled Harissa"
            className="about-img"
          />
        </section>
        <section className="featured-recipes">
          <h5>{t("app:lookAtThis")}</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
}

export default About;
