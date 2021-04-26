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
};

export default config;
