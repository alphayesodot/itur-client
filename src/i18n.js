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
      interviewDashboard: {
        questionnaire: {
          expandedQuestionnaire: 'שאלון מורחב',
          questions: 'שאלות',
        },
        notesBox: {
          dontForgetNotesForMyself: 'לא לשכוח // הערות לעצמי בזמן הראיון',
          hereYouCanWriteSomeNotes: 'פה אפשר לכתוב כל מיני הערות...',
        },
        progressBar: {
          interviewStart: 'תחילת ראיון',
          stepOne: '10 דק',
          stepTwo: '20 דק\n מילוי שאלון',
          interviewEnd: '30 דק\n סיום ראיון',
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
