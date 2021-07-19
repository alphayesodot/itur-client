const sitesPostfixes = {
  interview: '/interview',
  luz: '/luz',
  track: '/track',
  nodeGroupSelection: '/node-group-selection',
  malshabSchedule: '/malshab-scheduling',
  malshabSearch: '/search-malshab',
  reports: '/reports',
  posh: '/posh',
  preparationKit: '/preparation-kit',
  nodeGroupCreation: '/node-group-creation',
  fileUpload: '/file-upload',
  userManagement: '/user-management',
  editQuestionnaire: '/edit-questionnaire',
  questionnaires: '/questionnaires',
};

const config = {
  sitesPostfixes,
  allowedUrlPostfixesOfRole:
  {
    INTERVIEWER: [
      {
        route: sitesPostfixes.luz,
        sideBar: true,
        homePage: true,
      },
      {
        route: sitesPostfixes.interview,
        sideBar: false,
      },
      {
        route: sitesPostfixes.preparationKit,
        sideBar: true,
      },
      {
        route: sitesPostfixes.questionnaireComponent,
        sideBar: true,
      },
    ],
    RAMAD_ITUR_OF_UNIT: [
      {
        route: sitesPostfixes.nodeGroupCreation,
        sideBar: true,
        homePage: true,
      },
      {
        route: sitesPostfixes.track,
        sideBar: true,
      },
      {
        route: sitesPostfixes.malshabSchedule,
        sideBar: false,
      },
      {
        route: sitesPostfixes.nodeGroupSelection,
        sideBar: true,
      },
      {
        route: sitesPostfixes.malshabSearch,
        sideBar: true,
      },
      {
        route: sitesPostfixes.reports,
        sideBar: true,
      },
    ],
    RAMAD_ITUR_ASSISTANT: [
      {
        route: sitesPostfixes.track,
        sideBar: true,
        homePage: true,
      },
      {
        route: sitesPostfixes.malshabSchedule,
        sideBar: false,
      },
      {
        route: sitesPostfixes.nodeGroupSelection,
        sideBar: true,
      },
      {
        route: sitesPostfixes.malshabSearch,
        sideBar: true,
      },
      {
        route: sitesPostfixes.reports,
        sideBar: true,
      },
    ],
    PROFESSIONAL_RAMAD: [
      {
        route: sitesPostfixes.track,
        sideBar: true,
        homePage: true,
      },
      {
        route: sitesPostfixes.malshabSearch,
        sideBar: true,
      },
    ],
    MADA: [
      // {
      //   route: sitesPostfixes.posh,
      //   sideBar: true,
      // },
      {
        route: sitesPostfixes.questionnaires,
        sideBar: true,
        homePage: true,
      },
      {
        route: sitesPostfixes.malshabSearch,
        sideBar: true,
      },
      {
        route: sitesPostfixes.reports,
        sideBar: true,
      },
      {
        route: sitesPostfixes.preparationKit,
        sideBar: true,
      },
    ],
    ITUR: [
      // {
      //   route: sitesPostfixes.posh,
      //   sideBar: true,
      // },
      {
        route: sitesPostfixes.reports,
        sideBar: true,
        homePage: true,
      },
      {
        route: sitesPostfixes.malshabSearch,
        sideBar: true,
      },
    ],
    TECHNICAL: [
      {
        route: sitesPostfixes.fileUpload,
        sideBar: true,
        homePage: true,
      },
      {
        route: sitesPostfixes.malshabSearch,
        sideBar: true,
      },
      {
        route: sitesPostfixes.reports,
        sideBar: true,
      },
      {
        route: sitesPostfixes.userManagement,
        sideBar: true,
      },
    ],
    PSYCHOLOGIST: [{
      route: sitesPostfixes.luz,
      sideBar: true,
      homePage: true,
    },
    ],
    DIAGNOSER: [{
      route: sitesPostfixes.luz,
      sideBar: true,
      homePage: true,
    },
    ],
  },
};

export default config;
