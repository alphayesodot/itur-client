import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  he: {
    translation: {
      // TODO: Add translations by subjects
      title: {
        example: 'מערכת איתור',
      },
      headerBlessings: {
        morning: 'בוקר טוב',
        afternoon: 'צהריים טובים',
        evning: 'ערב טוב',
        night: 'לילה טוב',
      },
      button: {},
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'he',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
