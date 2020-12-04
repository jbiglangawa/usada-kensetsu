import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import header_en from './locales/en/header.json'
import home_en from './locales/en/home.json';
import projects_en from './locales/en/projects.json'
import footer_en from './locales/en/footer.json'
import commons_en from './locales/en/commons.json'
// import credits_en from './locales/en/credits.json'

import header_jp from './locales/jp/header.json';
import home_jp from './locales/jp/home.json';
import projects_jp from './locales/jp/projects.json'
import footer_jp from './locales/jp/footer.json'
import commons_jp from './locales/jp/commons.json'
// import credits_jp from './locales/jp/credits.json'



i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      header: header_en,
      home: home_en,
      projects: projects_en,
      footer: footer_en,
      commons: commons_en
      // credits: credits_en
    },
    jp: {
      header: header_jp,
      home: home_jp,
      projects: projects_jp,
      footer: footer_jp,
      commons: commons_jp
      // credits: credits_jp
    },
  },
  lng: ["en", "jp"],
  fallbackLng: "en",
  debug: false,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ",",
  },

  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i']
  }

});

export default i18n;
