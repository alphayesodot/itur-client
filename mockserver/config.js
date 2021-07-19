const config = {
  port: 8080,
  clientHost: 'http://localhost:3000',
  tokenName: 'itur',
  secret: 'remember2replace',
  fileUpload: {
    sizeLimit: 5 * 10000000, // bytes
    acceptedFileTypes:
      '.csv, text/csv, text/vnd.ms-excel, application/vnd.ms-excel,  text/xlsx, application/xlsx,'
      + 'application/xml, text/xml, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      + 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
      + 'application/pdf,image/png,image/jpeg,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  },
  attachments: {
    acceptedFileTypes: 'application/pdf,image/png,image/jpeg,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  },
};

export default config;
