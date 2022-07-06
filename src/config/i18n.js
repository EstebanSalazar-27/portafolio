import i18n from 'i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
import translationEn from "../locales/en/translation .json"
import translationES from "../locales/es/translation .json"


i18n
    .use(reactI18nextModule)
    .use(LanguageDetector)

    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: translationEn
            },
            es: {
                translation: translationES
            }
        },
        react: {
            wait: true,
        },
    });

export default i18n;