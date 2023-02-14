import React from "react";
import { graphql, Link } from "gatsby";
import slugify from "slugify";

import Layout from "../components/Layout";
import setupTags from "../utils/setupTags";
import Meta from "../components/Meta";

export const Head = () => <Meta title="Ninja Cook - All Tags" />;

export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

function Tags({ data }) {
  const tags = setupTags(data.allContentfulRecipe.nodes);

  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {tags.map((tag) => {
            const [text, value] = tag;

            return (
              <Link
                key={text}
                to={`/tags/${slugify(text, { lower: true })}`}
                className="tag"
              >
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
}

export default Tags;
