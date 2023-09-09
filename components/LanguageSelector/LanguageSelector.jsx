import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./languageSelector.module.css";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    {
      code: "en",
      name: "EN",
      flag: "https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_United_Kingdom.png",
    },
    {
      code: "de",
      name: "DE",
      flag: "https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_Germany.png",
    },
  ];

  const currentLanguage = i18n.language; // Get the currently active language

  const toggleLanguage = () => {
    const nextLanguage = currentLanguage === "en" ? "de" : "en"; // Toggle between English and Deutsch
    i18n.changeLanguage(nextLanguage);
  };

  return (
    <div className={classes["switch-lang"]}>
      <button onClick={toggleLanguage} className={classes["selecting-lang"]}>
        <img
          src={languages.find((lang) => lang.code === currentLanguage).flag}
          className={classes["lang-flag"]}
          alt={currentLanguage}
        />
        <p className={classes["lang-text"]}>
          {languages.find((lang) => lang.code === currentLanguage).name}
        </p>
      </button>
    </div>
  );
};

export default LanguageSelector;
