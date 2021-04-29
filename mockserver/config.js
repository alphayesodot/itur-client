const sitesPostfixes = {
  schedule: '/schedule',
  track: '/track',
  malshabSchedule: '/malshab-scheduling',
  malshbSearch: '/search-malshab',
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
      sitesPostfixes.track,
      sitesPostfixes.malshabSchedule,
      sitesPostfixes.malshbSearch,
      sitesPostfixes.reports,
    ],
    PROFESSIONAL_RAMAD: [
      sitesPostfixes.track,
      sitesPostfixes.malshabSchedule,
      sitesPostfixes.malshbSearch,
      sitesPostfixes.reports,
    ],
    MADA: [
      sitesPostfixes.posh,
      sitesPostfixes.reports,
      sitesPostfixes.searchMalshab,
    ],
    ITUR: [
      sitesPostfixes.posh,
      sitesPostfixes.reports,
      sitesPostfixes.searchMalshab,
    ],
    PSYCHOLOGIST: [],
    DIAGNOSER: [],
    TECHNICAL: [],
  },
};

export default config;
