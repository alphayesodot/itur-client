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
        nodeGroups: 'מסלולים',
        nodeGroup: 'מסלול',
        nodes: 'שלבי מיון',
        noNodes: 'אין שלבי מיון',
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
        noSelectedUnit: 'אנא בחר יחידה',
        userName: 'שם משתמש',
        password: 'סיסמה',
        newNodeGroup: 'מסלול חדש',
        editNodeGroup: 'ערוך מסלול',
        moreDetails: 'פרטים נוספים',
        interviewsSchedule: 'לוז ראיונות',
        view: 'תצוגה',
        attachments: 'מסמכים',
        generalInfo: 'פרטים כללים',
      },
      actions: {
        delete: 'מחיקה',
        edit: 'עריכה',
        add: 'הוספה',
      },
      message: {
        noInterviewersInNodeGroup: 'אין מראיינים במסלול',
        noInterviews: 'אין ראיונות',
        chooseNodeGroup: 'בחרו מסלול',
        noUsers: 'אין משתמשים',
        chosen: 'נבחר',
        noReport: 'אין דוח לתצוגה',
        noOptions: 'אין אופציות',
        noAttachments: 'אין מסמכים',
      },
      headerTitles: {
        addUsers: 'הוספת משתמשים',
        addUnit: 'הוספת יחידה',
        searchNodeGroup: 'חיפוש מסלול',
      },
      placeholders: {
        searchUnit: 'חיפוש יחידה',
        nodeGroup: 'מסלול',
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
        newNodeGroup: 'מסלול חדש',
        add: 'הוספה',
        view: 'הצג',
        saveNodeGroup: 'שמירת מסלול',
        enter: 'כניסה',
        createReport: 'יצירת דוח',
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
      tableColumns: {
        nodeGroupName: 'שם מסלול',
        unit: 'יחידה',
        users: 'משתמשים',
        ramadOfUnit: 'רמ"ד יחידה',
      },
      roles: {
        interviewer: 'מראיינ/ת',
        ramadIturOfUnit: 'רמ"ד איתור',
        ramadIturAssistant: 'עוזר/ת רמ"ד איתור',
        professionalRamad: 'רמ"ד מקצועי',
        mada: 'מד"ה',
        itur: 'איתור',
        psychologist: 'פסיכולוג/ית',
        diagnoser: 'מאבחנ/ת',
        technical: 'טכני',
        otherDiagnoses: 'מאבחנים אחרים',
      },
      sideBar: {
        luz: 'לו"ז',
        track: 'לו"ז שבועי',
        malshabSchedule: 'שיבוץ ראיונות',
        malshabSearch: 'חיפוש מלש"ב',
        reports: 'דוחות',
        posh: 'פו"ש',
        preparationKit: 'ערכת הכנה למעריך',
        nodeGroupCreation: 'יצירת מסלול',
        fileUpload: 'העלאת קבצים',
        userManagement: 'ניהול משתמשים',
        editQuestionnaire: 'שאלונים',
        settings: 'הגדרות',
      },
      toolTip: {
        copyUsers: 'העתקת יוזרים',
        information: 'מידע נוסף',
        playInterview: 'צפייה בראיון',
        restart: 'התחל מחדש',
      },
      warnings: {
        oneTimePassword: 'שים לב, לאחר סגירת החלונית לא יהיה ניתן לצפות בסיסמה בשנית. יש לשמור את הסיסמה במקום מאובטח.',
      },
      formTitle: {
        name: 'שם',
      },
      label: {
        reportName: 'שם דוח',
        units: 'יחידות',
        nodeGroups: 'מסלולים',
        startDate: 'תאריך התחלתי',
        endDate: 'תאריך סיום',
      },
      malshabInfo: {
        identityNumber: 'ת.ז',
        personalNumber: 'מספר אישי',
        firstName: 'שם פרטי',
        lastName: 'שם משפחה',
        gender: 'מגדר',
        birthDate: 'ת. לידה',
        medicalProfile: 'פרופיל',
        kaba: 'קב"א',
        dapar: 'דפ"ר',
        cityId: 'מספר עיר',
        cityName: 'שם עיר',
        houseNumber: 'מספר בית',
        street: 'רחוב',
        birthCountry: 'ארץ לידה',
        imigrationDate: 'ת. עלייה',
        hasIsraeliCitizenship: 'האם אזרח ישראלי?',
        hasAnotherCitizenship: 'האם יש אזרחות נוספת?',
        isBereaved: 'בן שכול',
        schoolId: 'מספר בית ספר',
        schoolName: 'שם בית ספר',
        email: 'אימייל',
        true: 'כן',
        false: 'לא',
        female: 'נקבה',
        male: 'זכר',
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
