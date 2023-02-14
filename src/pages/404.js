import React from "react";

import Layout from "../components/Layout";
import Meta from "../components/Meta";

export const Head = () => <Meta title="Ninja Cook - Page Not Found" />;

function NotFound() {
  return (
    <Layout>
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>Page not found</h3>
        </section>
      </main>
    </Layout>
  );
}

export default NotFound;
