import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import slugify from "slugify";

import Layout from "../components/Layout";
import Meta from "../components/Meta";

export const Head = ({ data }) => {
  const { title, description } = data.contentfulRecipe;

  return <Meta title={`Ninja Cook - ${title}`} description={description} />;
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      cookTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;

function RecipeTemplate({ data }) {
  const {
    title,
    cookTime,
    prepTime,
    content,
    description: { description },
    servings,
    image,
  } = data.contentfulRecipe;

  const { tags, tools, ingredients, instructions } = content;

  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <section className="recipe-hero">
            <GatsbyImage image={getImage(image)} alt={title} />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>Prep time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>Cook time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>Servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags:
                {tags.map((tag) => {
                  return (
                    <Link
                      key={tag}
                      to={`/tags/${slugify(tag, { lower: true })}`}
                    >
                      {tag}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>Instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>Step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                );
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>Ingredients</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  );
                })}
              </div>
              <div>
                <h4>Tools</h4>
                {tools.map((item, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {item}
                    </p>
                  );
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default RecipeTemplate;
