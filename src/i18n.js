import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  he: {
    translation: {
      error: {
        server: 'קרתה תקלה. נסו שוב מאוחר יותר',
      },
      title: {
        break: 'הפסקה',
        identityNumber: 'ת"ז',
        example: 'מערכת איתור',
        unit: 'יחידה',
        nodeGroup: 'מסלול',
        day: 'יום',
        interviewsCount: 'סה"כ ראיונות',
        noInterviews: 'אין ראיונות',
        oneInterview: 'ראיון אחד',
        noNodeGroups: 'אין מסלולים',
        users: 'משתמשים',
        newUsers: 'משתמשים חדשים',
        units: 'יחידות',
        role: 'תפקיד',
        amount: 'כמות',
        permissions: 'הגדרות כניסה',
        add: 'הוספה',
        noSelectedUnit: 'אנא בחר יחידה',
        userName: 'שם משתמש',
        password: 'סיסמה',
        interviewsSchedule: 'לוז ראיונות',
      },
      message: {
        noInterviewersInNodeGroup: 'אין מראיינים במסלול',
        chooseNodeGroup: 'בחרו מסלול',
      },
      headerTitles: {
        addUsers: 'הוספת משתמשים',
        addUnit: 'הוספת יחידה',
      },
      placeholders: {
        searchUnit: 'חיפוש יחידה',
      },
      text: {
        in: 'ב',
        users: 'משתמשים',
        unitName: 'שם יחידה',
        noUnits: 'אין יחידות',
        unit: 'יחידה',
        unitNotAddWarning: 'יחידה לא נוספה',
        unitAdded: 'היחידה התווספה',
        userNotAddWarning: 'יוזר לא נוסף',
      },
      headerBlessings: {
        morning: 'בוקר טוב',
        afternoon: 'צהריים טובים',
        evening: 'ערב טוב',
        night: 'לילה טוב',
      },
      button: {
        addUnit: '+ הוספת יחידה',
        addUsers: '+ הוספת משתמשים',
        newSchedule: 'לוז חדש',
        add: 'הוספה',
        view: 'הצג',
        enter: 'כניסה',
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
      month: {
        0: 'ינואר',
        1: 'פברואר',
        2: 'מרץ',
        3: 'אפריל',
        4: 'מאי',
        5: 'יוני',
        6: 'יולי',
        7: 'אוגוסט',
        8: 'ספטמבר',
        9: 'אוקטובר',
        10: 'נובמבר',
        11: 'דצמבר',
      },
      interviewStatus: {
        DURING: 'פגישה מתקיימת',
        DONE: 'פגישה התקיימה',
        CANCELED: 'פגישה בוטלה',
        BREAK: 'הפסקה',
      },
      uploadPage: {
        uploadButton: 'העלאת קבצים',
        sizeLimitation: '( עד {{sizeLimit}} MB )',
        hideFromView: 'הסתר מהתצוגה',
        fileInvalidType: 'סוג הקובץ לא תקין',
        fileTooLarge: 'הקובץ גדול מדי',
      },
      roles: {
        interviewer: 'מראיינ.ת',
        ramadIturOfUnit: 'רמ"ד איתור',
        ramadIturAssistant: 'עוזר.ת רמ"ד איתור',
        professionalRamad: 'רמ"ד מקצועי',
        mada: 'מד"ה',
        itur: 'איתור',
        psychologist: 'פסיכולוג.ית',
        diagnoser: 'מאבחנ.ת',
        technical: 'טכני',
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
      toolTip: {
        copyUsers: 'העתקת יוזרים',
        information: 'מידע נוסף',
        playInterview: 'צפייה בראיון',
      },
      warnings: {
        oneTimePassword: 'שים לב, לאחר סגירת החלונית לא יהיה ניתן לצפות בסיסמה בשנית. יש לשמור את הסיסמה במקום מאובטח.',
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
