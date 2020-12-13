import i18n from "i18next";
import { initReactI18next } from 'react-i18next'
import LanguageDetector from "i18next-browser-languagedetector";
import BackEnd from "i18next-http-backend";

i18n.use(LanguageDetector)
    .use(BackEnd)
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      supportedLngs: ["en", "es", "id", "ja"],
      debug: false,
      saveMissing: true,
      saveMissingTo: 'current',
      keySeparator:false,

      backEnd:{
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      },

      interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ",",
      },

      react: {
        hashTransKey: (defaultValue) => defaultValue,
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p']
      },
});


export default i18n;