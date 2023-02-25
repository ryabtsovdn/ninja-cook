import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";
import Meta from "../components/Meta";

export const Head = ({ pageContext: { language } }) => (
  <Meta title="Ninja Cook - All Recipes" language={language} />
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

function Recipes() {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  );
}

export default Recipes;
