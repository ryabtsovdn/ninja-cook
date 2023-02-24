import React from "react";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>{t("title")}</span>.{" "}
        <Trans
          i18nKey="buildWithGatsby"
          components={{ L: <a href="https://gatsbyjs.com/">Gatsby</a> }}
        />
      </p>
    </footer>
  );
}

export default Footer;
