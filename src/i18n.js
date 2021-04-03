import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  he: {
    translation: {
      // TODO: Add translations by subjects
      title: {
        example: 'מערכת איתור',
      },
      interviewDashboard: {
        headerTitles: {
          interviewsSchedule: 'לו"ז ראיונות',
          virtualInterview: 'ראיון וירטואלי',
          malshabData: 'נתוני מלש"ב',
          guidePreperationKit: 'ערכת הכנה למדריך',
        },
        questionnaire: {
          expandedQuestionnaire: 'שאלון מורחב',
          questions: 'שאלות',
        },
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
