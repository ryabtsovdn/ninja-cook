import React from "react";
import { graphql } from "gatsby";
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next";

import Layout from "../components/Layout";
import setupTags from "../utils/setupTags";
import Meta from "../components/Meta";

export const Head = ({ pageContext: { language } }) => (
  <Meta title="Ninja Cook - All Tags" language={language} />
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
    allContentfulRecipe {
      nodes {
        slug
        tags {
          slug
          title
        }
        node_locale
      }
    }
  }
`;

function Tags({ data }) {
  const { language } = useI18next();
  const { t } = useTranslation();
  const tags = setupTags(data.allContentfulRecipe.nodes, language);

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {tags.map((tag) => {
            const [slug, text, value] = tag;

            return (
              <Link key={text} to={`/tags/${slug}`} className="tag">
                <h5>{text}</h5>
                <p>{t("common:recipesCount", { count: value })}</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
}

export default Tags;
