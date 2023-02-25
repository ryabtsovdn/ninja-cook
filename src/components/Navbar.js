import React, { useState } from "react";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import { FiAlignJustify } from "react-icons/fi";

import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Ninja Cook" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={`nav-links${show ? " show-links" : ""}`}>
          <Link to="/" className="nav-link" activeClassName="active-link">
            {t("menu:home")}
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(!show)}
          >
            {t("menu:recipes")}
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(!show)}
          >
            {t("menu:tags")}
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(!show)}
          >
            {t("menu:about")}
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={() => setShow(!show)}>
              {t("menu:contact")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
