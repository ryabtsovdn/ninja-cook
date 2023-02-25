import React from "react";
import { graphql } from "gatsby";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import slugify from "slugify";

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
        content {
          tags
        }
      }
    }
  }
`;

function Tags({ data }) {
  const { t } = useTranslation();
  const tags = setupTags(data.allContentfulRecipe.nodes);

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {tags.map((tag) => {
            const [text, value] = tag;

            return (
              <Link
                key={text}
                to={`/tags/${slugify(text, { lower: true })}`}
                className="tag"
              >
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
