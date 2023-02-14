import React from "react";

import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";
import Meta from "../components/Meta";

export const Head = () => <Meta title="Ninja Cook - All Recipes" />;

function Recipes() {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  );
}

export default Recipes;
