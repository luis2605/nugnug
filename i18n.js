import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Load translations
import enTranslation from "./public/static/locales/en/en.json";
import deTranslation from "./public/static/locales/de/de.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    de: {
      translation: deTranslation,
    },
  },
  lng: "de", // Set the default language
  fallbackLng: "en", // Fallback to English if translation not found
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
