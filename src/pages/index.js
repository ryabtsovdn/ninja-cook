import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";
import Meta from "../components/Meta";

export const Head = () => <Meta />;

function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="Grill"
            className="hero-img"
            placeholder="dominantColor"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Ninja Cook</h1>
              <h4>No fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  );
}

export default Home;
