const config = {
  server: {
    baseURL: 'http://localhost:8081/upload_file/',
  },
  dropzone: {
    maxSize: 1000000000, // bytes
    acceptedFileTypes: 'image/x-png, image/png, image/jpg, image/jpeg, image/gif',
  },
};

export default config;
