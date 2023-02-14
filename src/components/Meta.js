import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

function Meta({ title, description, children }) {
  const data = useStaticQuery(query);
  const siteMeta = data.site.siteMetadata;
  const seo = {
    title: title || siteMeta.title,
    description: description || siteMeta.description,
  };

  return (
    <>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
    </>
  );
}

export default Meta;
