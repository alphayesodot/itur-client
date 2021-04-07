import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import cloudImg from '../../images/cloud.png';
import useStyles from './drop-zone.styles';
import config from '../../config';

const DropZone = (props) => {
  const { files, setFiles } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const acceptedFileTypesArray = config.dropzone.acceptedFileTypes
    .split(',')
    .map((item) => item.trim());

  const axiosInstance = axios.create({
    baseURL: config.dropzone.baseURL,
  });

  const createErrorMessege = (errorsArray) => {
    let errorMessage = '';
    errorsArray.forEach((e) => {
      errorMessage = errorMessage.concat(`${e.code}: ${e.message}\n`);
    });
    return errorMessage;
  };

  const handleOnDrop = (acceptedFiles, rejectedFilesObjects) => {
    rejectedFilesObjects.forEach((fileObject) => {
      alert(createErrorMessege(fileObject.errors));
    });

    if (acceptedFiles.length > 0) {
      let updatedFiles = [...files];
      acceptedFiles.forEach((f) => {
        f.progress = 0;
        updatedFiles = updatedFiles.concat(f);
      });
      setFiles(updatedFiles);
      acceptedFiles.forEach((acceptedFile) => {
        let formData = new FormData();
        formData.append('file', acceptedFile);
        const res = axiosInstance.post(config.server.baseURL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (data) => {
            const fileIndex = updatedFiles.findIndex((f) => f.path === acceptedFile.path);
            updatedFiles[fileIndex].progress = Math.round((100 * data.loaded) / data.total);
            setFiles([...updatedFiles]);
          },
        });
      });
    }
  };

  return (
    <Dropzone
      onDrop={handleOnDrop}
      accept={config.dropzone.acceptedFileTypes}
      maxSize={config.dropzone.maxSize}
    >
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps({ className: classes.root })}>
          <input {...getInputProps()} />
          <img src={cloudImg} className={classes.cloudImg}></img>
          <p className={classes.explanation}>Drag and Drop to pload files</p>
          <Button className={classes.uploadButton}>{t('xmlPage.upload_button')}</Button>
          <p className={classes.limitation}>{t('xmlPage.size_limitation')}</p>
        </div>
      )}
    </Dropzone>
  );
};

export default DropZone;
