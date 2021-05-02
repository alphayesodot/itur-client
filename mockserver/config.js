const sitesPostfixes = {
  schedule: '/schedule',
  track: '/track',
  malshabSchedule: '/malshab-scheduling',
  malshabSearch: '/search-malshab',
  reports: '/reports',
  posh: '/posh',
};

const config = {
  port: 8080,
  clientHost: 'http://localhost:3000',
  jwtTokenName: 'itur',
  secret: 'secret',
  xmlUpload: {
    sizeLimit: 10000000, // bytes
    acceptedFileTypes:
      '.csv, text/csv, text/vnd.ms-excel, application/vnd.ms-excel,  text/xlsx, application/xlsx, application/xml, text/xml, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.presentationml.presentation',
  },
  sitesPostfixes,
  allowedUrlPostfixesOfRole:
  {
    INTERVIEWER: [sitesPostfixes.schedule],
    RAMAD_ITUR_OF_UNIT: [
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
    PSYCHOLOGIST: [],
    DIAGNOSER: [],
    TECHNICAL: [],
  },
};

export default config;
