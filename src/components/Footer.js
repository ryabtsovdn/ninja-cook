import React from "react";

function Footer() {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Ninja Recipes</span>. Built with{" "}
        <a href="https://gatsbyjs.com/">Gatsby</a>
      </p>
    </footer>
  );
}

export default Footer;
