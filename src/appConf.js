const sitesPostfixes = {
  interview: '/interview',
  luz: '/luz',
  track: '/track',
  malshabSchedule: '/malshab-scheduling',
  malshabSearch: '/search-malshab',
  reports: '/reports',
  posh: '/posh',
  preparationKit: '/preparation-kit',
  nodeGroupCreation: '/node-group-creation',
  fileUpload: '/file-upload',
  userManagement: '/user-management',
  unitCreation: '/unit-creation',
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
      },
      {
        route: sitesPostfixes.interview,
        sideBar: false,
      },
      {
        route: sitesPostfixes.preparationKit,
        sideBar: true,
      },
    ],
    RAMAD_ITUR_OF_UNIT: [
      {
        route: sitesPostfixes.nodeGroupCreation,
        sideBar: true,
      },
      {
        route: sitesPostfixes.track,
        sideBar: true,
      },
      {
        route: sitesPostfixes.malshabSchedule,
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
      },
      {
        route: sitesPostfixes.malshabSchedule,
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
      },
      {
        route: sitesPostfixes.malshabSearch,
        sideBar: true,
      },
    ],
    MADA: [
      {
        route: sitesPostfixes.posh,
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
      {
        route: sitesPostfixes.questionnaires,
        sideBar: true,
      },
      {
        route: sitesPostfixes.preparationKit,
        sideBar: true,
      },
      {
        route: sitesPostfixes.nodeGroupCreation,
        sideBar: true,
      },
    ],
    ITUR: [
      {
        route: sitesPostfixes.posh,
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
    TECHNICAL: [
      {
        route: sitesPostfixes.malshabSearch,
        sideBar: true,
      },
      {
        route: sitesPostfixes.reports,
        sideBar: true,
      },
      {
        route: sitesPostfixes.fileUpload,
        sideBar: true,
      },
      {
        route: sitesPostfixes.userManagement,
        sideBar: true,
      },
    ],
    PSYCHOLOGIST: [],
    DIAGNOSER: [],
  },
};

export default config;
