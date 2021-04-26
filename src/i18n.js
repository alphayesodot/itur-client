import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  he: {
    translation: {
      // TODO: Add translations by subjects
      title: {
        example: 'מערכת איתור',
      },
      headerTitles: {
        interviewsSchedule: 'לו"ז ראיונות',
        malshabData: 'נתוני מלש"ב',
        appraiserPreperationKit: 'ערכת הכנה למעריך',
      },
      button: {},

      xmlPage: {
        uploadButton: 'העלאת קבצים',
        sizeLimitation: '( MB {{sizeLimit}} עד)',
        hideFromView: 'הסתר מהתצוגה',
        fileInvalidType: 'סוג הקובץ לא תקין',
        fileTooLarge: 'הקובץ גדול מדי',
      },
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
