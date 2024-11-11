import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

import translationEN from "@/modules/I18n/Translations/en/translation.json";
import translationHI from "@/modules/I18n/Translations/hi/translation.json";

const resources = {
  en: { translation: translationEN },
  hi: { translation: translationHI },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    returnNull: false,
    returnObjects: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;