import React from "react";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";

import LanguageSwitcher from "./LanguageSwitcher";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="page-footer">
      <div className="container-center">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="highlight">{t("app:title")}</span>.{" "}
          <span className="made">
            <Trans
              i18nKey="app:buildWithGatsby"
              components={{
                L: (
                  <a href="https://gatsbyjs.com/" className="highlight">
                    Gatsby
                  </a>
                ),
              }}
            />
          </span>
        </p>
        <LanguageSwitcher />
      </div>
    </footer>
  );
}

export default Footer;
