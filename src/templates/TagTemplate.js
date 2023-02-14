import { graphql } from "gatsby";
import React from "react";

import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import Meta from "../components/Meta";

export const Head = ({ pageContext: { tag } }) => {
  return <Meta title={`Ninja Cook - ${tag} recipes`} />;
};

export const query = graphql`
  query getRecipesByTag($tag: String) {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        cookTime
        prepTime
        title
        image {
          id
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        content {
          tags
        }
      }
    }
  }
`;

function TagTemplate({ pageContext, data }) {
  const { tag } = pageContext;
  const recipes = data.allContentfulRecipe.nodes;

  return (
    <Layout>
      <main className="page">
        <h2>{tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  );
}

export default TagTemplate;
