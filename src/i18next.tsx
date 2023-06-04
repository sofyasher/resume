import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEnglish from './translations/english/translation.json';
import translationCzech from './translations/czech/translation.json';

const resources = {
  en: {
    translation: translationEnglish,
  },
  cz: {
    translation: translationCzech,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'cz',
});

export default i18next;
