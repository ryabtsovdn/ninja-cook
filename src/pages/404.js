import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../components/Layout";
import Meta from "../components/Meta";

export const Head = ({ pageContext: { language } }) => (
  <Meta title="Ninja Cook - Page Not Found" language={language} />
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

function NotFound() {
  const { t } = useTranslation();

  return (
    <Layout>
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>{t("app:pageNotFound")}</h3>
        </section>
      </main>
    </Layout>
  );
}

export default NotFound;
