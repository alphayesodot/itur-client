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
        evening: 'ערב טוב',
        night: 'לילה טוב',
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
          noDataAboutCurrentInterviewTimes: 'אין מידע אודות זמני הראיון הנוכחי',
        },
        malshab: {
          fullName: 'שם מלא',
          firstName: 'שם פרטי',
          lastName: 'שם משפחה',
          interviewTime: 'זמן ראיון',
          recording: 'בהקלטה',
          malshabDetails: "פרטי מלש''ב",
          moreDetails: 'פרטים נוספים',
          finishInterview: 'סיום ראיון',
          language: 'שפה',
          languages: 'שפות',
          identityNumber: 'ת.ז',
          birthDate: 'ת.לידה',
          school: 'ביה"ס',
          gender: 'מין',
          birthCountry: 'ארץ לידה',
          degree: 'מגמה',
          address: 'כתובת',
          addresses: 'כתובות',
          citizenship: 'אזרחות',
          kaba: 'קב"א',
          dapar: 'דפ"ר',
          major: 'מגמה',
          attachmentDownloadErrorMessage: 'אירעה שגיאה בהורדת הקובץ. יש ליצור קשר עם צוות טכני',
        },
      },
      button: {},
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
