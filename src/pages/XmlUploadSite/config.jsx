const config = {
  server: {
    baseURL: 'http://localhost:8081/upload_file/',
  },
  dropzone: {
    maxSize: 1000000000, // bytes
    acceptedFileTypes:
      '.csv, text/csv, text/vnd.ms-excel, application/vnd.ms-excel,  text/xlsx, application/xlsx, application/xml, text/xml, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.presentationml.presentation',
  },
};

export default config;
