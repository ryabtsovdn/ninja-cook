import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import TagsList from "./TagsList";
import RecipesList from "./RecipesList";

const query = graphql`
  query {
    allContentfulRecipe(sort: { title: ASC }) {
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

function AllRecipes() {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulRecipe.nodes;

  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
}

export default AllRecipes;
