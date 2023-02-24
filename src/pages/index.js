import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";
import Meta from "../components/Meta";

export const Head = ({ pageContext: { language } }) => (
  <Meta language={language} />
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
  }
`;

function Home() {
  const { t } = useTranslation();

  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt={t("grill")}
            className="hero-img"
            placeholder="dominantColor"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>{t("title")}</h1>
              <h4>{t("slogan")}</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  );
}

export default Home;
