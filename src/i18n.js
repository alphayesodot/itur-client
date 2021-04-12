import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  he: {
    translation: {
      // TODO: Add translations by subjects
      title: {
        example: 'מערכת איתור',
        unit: 'יחידה',
        day: 'יום',
      },
      headerTitles: {
        interviewsSchedule: 'לו"ז ראיונות',
        malshabData: 'נתוני מלש"ב',
        appraiserPreperationKit: 'ערכת הכנה למעריך',
      },
      button: {
        newSchedule: 'לוז חדש',
      },
      day: {
        1: 'ראשון',
        2: 'שני',
        3: 'שלישי',
        4: 'רביעי',
        5: 'חמישי',
        6: 'שישי',
        7: 'שבת',
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
