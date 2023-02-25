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

function Meta(props) {
  const { language, title, description, children } = props;
  const data = useStaticQuery(query);
  const siteMeta = data.site.siteMetadata;
  const seo = {
    title: title || siteMeta.title,
    description: description || siteMeta.description,
  };

  return (
    <>
      <html lang={language} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
    </>
  );
}

export default Meta;
