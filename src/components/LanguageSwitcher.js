import React, { useRef, useState } from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import cn from "classnames";
import { BsGlobe } from "react-icons/bs";

import useClickOutside from "../hooks/useClickOutside";

function LanguageSwitcher() {
  const { language, languages, originalPath } = useI18next();
  const [showList, setShowList] = useState(false);
  const switcherRef = useRef();

  useClickOutside(switcherRef, () => setShowList(false));

  return (
    <div
      ref={switcherRef}
      className={cn("language-switcher", { opened: showList })}
    >
      <button
        onClick={() => {
          setShowList(!showList);
        }}
      >
        {language} <BsGlobe />
      </button>
      {showList && (
        <ul>
          {languages.map((lang) => {
            return (
              <li>
                <Link to={originalPath} language={lang} className="btn">
                  {lang}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
