import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import Meta from "../components/Meta";

export const Head = ({ pageContext: { language } }) => (
  <Meta title="Ninja Cook - Contact" language={language} />
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
  const { t } = useTranslation();

  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>{t("contact:title")}</h3>
            <p>{t("contact:p1")}</p>
            <p>{t("contact:p2")}</p>
          </article>
          <article>
            <form
              action={process.env.GATSBY_CONTACT_FORM_URL}
              method="POST"
              className="form contact-form"
            >
              <div className="form-row">
                <label htmlFor="name">{t("contact:form.nameLabel")}</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">{t("contact:form.emailLabel")}</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">{t("contact:form.msgLabel")}</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                {t("contact:form.btnTitle")}
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>{t("app:lookAtThis")}</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
}

export default Contact;
