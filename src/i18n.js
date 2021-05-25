import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  he: {
    translation: {
      error: {
        server: 'קרתה תקלה. נסו שוב מאוחר יותר',
      },
      title: {
        example: 'מערכת איתור',
        unit: 'יחידה',
        day: 'יום',
        interviewsCount: 'סה"כ ראיונות',
        noInterviews: 'אין ראיונות',
        oneInterview: 'ראיון אחד',
        noNodeGroups: 'אין מסלולים',
      },
      message: {
        noInterviewersInNodeGroup: 'אין מראיינים במסלול',
        chooseNodeGroup: 'בחרו מסלול',
      },
      headerBlessings: {
        morning: 'בוקר טוב',
        afternoon: 'צהריים טובים',
        evening: 'ערב טוב',
        night: 'לילה טוב',
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
      interviewStatus: {
        DURING: 'פגישה מתקיימת',
        DONE: 'פגישה התקיימה',
        CANCELED: 'פגישה בוטלה',
        BREAK: 'הפסקה',
      },
      xmlPage: {
        uploadButton: 'העלאת קבצים',
        sizeLimitation: '( MB {{sizeLimit}} עד)',
        hideFromView: 'הסתר מהתצוגה',
        fileInvalidType: 'סוג הקובץ לא תקין',
        fileTooLarge: 'הקובץ גדול מדי',
      },
      sideBar: {
        luz: 'לו"ז',
        track: 'לו"ז שבועי',
        malshabSchedule: 'שיבץ מלש"ב',
        malshabSearch: 'חיפוש מלש"ב',
        reports: 'דוחות',
        posh: 'פו"ש',
        preparationKit: 'ערכת הכנה',
        nodeGroupCreation: 'יצירת מסלול',
        fileUpload: 'העלאת קבצים',
        userManagement: 'ניהול משתמשים',
        editQuestionnaire: 'עריכת שאלון',
        settings: 'הגדרות',
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
