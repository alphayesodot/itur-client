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
        day: 'יום',
        interviewsCount: 'סה"כ ראיונות',
        noInterviews: 'אין ראיונות',
        oneInterview: 'ראיון אחד',
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
        questionnaires: 'שאלונים',
        view: 'תצוגה',
        attachments: 'מסמכים',
        newQuestionnaire: 'שאלון חדש',
        editQuestionnaire: 'ערוך שאלון',
        questions: 'שאלות',
        questionnaireName: 'שם שאלון',
        chooseQuestionnairePreview: 'בחר שאלון להצגה',
        generalInfo: 'פרטים כלליים',
        interviewsHistory: 'היסטוריית ראיונות',
      },
      actions: {
        delete: 'מחיקה',
        edit: 'עריכה',
        add: 'הוספה',
        addQuestion: 'הוספת שאלה',
        preview: 'תצוגה מקדימה',
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
        noQuestions: 'אין שאלות',
        noQuestionnaires: 'אין שאלונים',
        noNodeGroups: 'אין מסלולים',
        noNodes: 'אין שלבי מיון',
        noMalshab: 'אין מלש"ב להצגה',
        noEvents: 'אין ראיונות',
      },
      headerTitles: {
        addUsers: 'הוספת משתמשים',
        addUnit: 'הוספת יחידה',
        searchNodeGroup: 'חיפוש מסלול',
        searchQuestionnaie: 'חיפוש שאלון',
      },
      placeholders: {
        searchUnit: 'חיפוש יחידה',
        searchMalshab: 'חיפוש לפי ת"ז',
        nodeGroup: 'מסלול',
        questionnaire: 'שאלון',
        enterAnswer: 'הכנס תשובה...',
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
        page: 'עמוד',
        of: 'מתוך',
        loading: 'טוען מסמך...',
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
        searchMalshab: 'חיפוש מלש"ב',
        newNodeGroup: 'מסלול חדש',
        add: 'הוספה',
        view: 'הצג',
        saveNodeGroup: 'שמירת מסלול',
        enter: 'כניסה',
        next: 'הבא',
        previous: 'הקודם',
        newQuestionnaire: 'שאלון חדש',
        createReport: 'יצירת דוח',
        saveQuestionnaire: 'שמירת שאלון',
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
        questionnaireName: 'שם שאלון',
        intended: 'מיועד ל...',
        changeDate: 'תאריך שינוי',
        questionsNumber: 'מס שאלות',
        writer: 'כותב/ת',
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
        malshab: 'מלש"ב',
      },
      permissions: {
        malshabAppreciator: 'מעריך ומלש"ב',
        appreciator: 'מעריך',
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
        questionnaires: 'שאלונים',
        settings: 'הגדרות',
      },
      toolTip: {
        copyUsers: 'העתקת יוזרים',
        information: 'מידע נוסף',
        playInterview: 'צפייה בראיון',
        restart: 'התחל מחדש',
        invalidId: 'ת"ז לא תקין',
        uploadAttachment: 'העלאת מסמך',
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
        questionnaireName: 'שם שאלון',
        intendedTo: 'מיועד ל ...',
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
      question: {
        open: 'פתוחה',
        multiple: 'אמריקאי',
        checkbox: 'בחירה מרובה',
        linearScale: 'סולם לינארי',
        date: 'תאריך',
        questionType: 'סוג שאלה',
        question: 'שאלה',
        choose: 'בחר',
        required: 'חובה',
        minValue: 'ערך מינימלי',
        maxValue: 'ערך מקסימלי',
        label: 'כותרת',
        shortQuestion: 'שאלה קצרה',
        answers: 'תשובות',
        otherOption: 'אפשרות לתשובה אחרת',
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
