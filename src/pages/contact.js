import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import Meta from "../components/Meta";

export const Head = () => <Meta title="Ninja Cook - Contact" />;

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

function Contact({ data }) {
  const recipes = data.allContentfulRecipe.nodes;

  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Tumeric narwhal tbh four dollar toast. Banh mi cliche knausgaard
              occupy, distillery cloud bread la croix post-ironic artisan kitsch
              meggings vibecession tumeric pop-up.
            </p>
            <p>
              Skateboard af prism tattooed retro gluten-free. Shabby chic
              asymmetrical vibecession selfies, plaid big mood shoreditch before
              they sold out blog dreamcatcher portland ascot edison bulb.
            </p>
            <p>
              DIY keytar DSA hoodie, literally etsy irony man braid celiac.
              Selvage VHS typewriter man braid art party distillery mumblecore
              schlitz cold-pressed.
            </p>
          </article>
          <article>
            <form
              action={process.env.GATSBY_CONTACT_FORM_URL}
              method="POST"
              className="form contact-form"
            >
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
}

export default Contact;
