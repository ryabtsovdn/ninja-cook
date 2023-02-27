import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import Meta from "../components/Meta";

export const Head = ({ pageContext: { tag, language } }) => (
  <Meta title={`Ninja Cook - ${tag} recipes`} language={language} />
);

export const query = graphql`
  query getRecipesByTag($slug: String, $language: String!) {
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
      filter: {
        node_locale: { eq: $language }
        tags: { elemMatch: { slug: { eq: $slug } } }
      }
    ) {
      nodes {
        id
        slug
        cookTime
        prepTime
        title
        tags {
          slug
          title
        }
        image {
          id
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        node_locale
      }
    }
  }
`;

function TagTemplate({ pageContext, data }) {
  const { title, language } = pageContext;
  const recipes = data.allContentfulRecipe.nodes;

  return (
    <Layout>
      <main className="page">
        <h2>{title[language]}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  );
}

export default TagTemplate;
