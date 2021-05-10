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
        addUsers: 'הוספת משתמשים',
        addUnit: 'הוספת יחידה',
      },
      button: {
        addUnit: '+ הוספת יחידה',
        addUsers: '+ הוספת משתמשים',
      },
      text: {
        users: 'משתמשים',
        newUsers: 'משתמשים חדשים',
        units: 'יחידות',
        role: 'תפקיד',
        amount: 'כמות',
        permissions: 'הגדרות כניסה',
        add: 'הוספה',
        view: 'הצג',
        unitName: 'שם יחידה',
        noSelectedUnit: 'אנא בחר יחידה',
        noUnits: 'אין יחידות',
        userName: 'שם משתמש',
        password: 'סיסמה',
        unit: 'יחידה',
      },

      headerBlessings: {
        morning: 'בוקר טוב',
        afternoon: 'צהריים טובים',
        evening: 'ערב טוב',
        night: 'לילה טוב',
      },
      xmlPage: {
        uploadButton: 'העלאת קבצים',
        sizeLimitation: '( MB {{sizeLimit}} עד)',
        hideFromView: 'הסתר מהתצוגה',
        fileInvalidType: 'סוג הקובץ לא תקין',
        fileTooLarge: 'הקובץ גדול מדי',
      },
      roles: {
        interviewer: 'מראיינ.ת',
        ramadIturOfUnit: 'רמ"ד איתור',
        ramadIturAssistant: 'עוזר רמ"ד איתור',
        professionalRamad: 'רמ"ד מקצועי',
        mada: 'מד"ה',
        itur: 'איתור',
        psychologist: 'פסיכולוג.ית',
        diagnoser: 'מאבחנ.ת',
        technical: 'טכני',

      },
      sideBar: {},
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
