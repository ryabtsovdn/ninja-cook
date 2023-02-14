import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import Meta from "../components/Meta";

export const Head = () => <Meta title="Ninja Cook - About" />;

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        cookTime
        prepTime
        title
        image {
          id
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`;

function About({ data }) {
  const recipes = data.allContentfulRecipe.nodes;

  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>About Ninja Cook</h2>
            <p>
              Whether you’re looking for quick weekday meal ideas or something
              special to impress your guests, our easy-to-follow recipes let you
              create delicious meals, snacks and drinks at home – no matter your
              experience or confidence in the kitchen.
            </p>
            <p>
              Cooking is about more than just food – it brings people together.
              That’s why we do our best to champion seasonal ingredients,
              feature recipe inspiration from around the globe and encourage
              cooking with the whole family.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Grilled Harissa"
            className="about-img"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
}

export default About;
