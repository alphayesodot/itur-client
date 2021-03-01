import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import cloudImg from '../../images/cloud.png';
import useStyles from './drop-zone.styles';
import config from '../../config';

const DropZone = (props) => {
  const { setProgress, setUploadFlag } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const acceptedFileTypesArray = config.dropzone.acceptedFileTypes
    .split(',')
    .map((item) => item.trim());

  const axiosInstance = axios.create({
    baseURL: config.dropzone.baseURL,
  });

  const verifyFile = (files) => {
    if (files && files.length > 0) {
      const currentFile = files[0];
      const currentFileType = currentFile.type;
      const currentFileSize = currentFile.size;
      if (currentFileSize > config.dropzone.maxSize) {
        alert('This file is not allowed. ' + currentFileSize + ' bytes is too large');
        return false;
      }
      if (!config.dropzone.acceptedFileTypesArray.includes(currentFileType)) {
        alert('This file is not allowed.');
        return false;
      }
      return true;
    }
  };

  const handleOnDrop = (files, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      verifyFile(rejectedFiles);
    }

    if (files && files.length > 0) {
      const isVerified = verifyFile(files);
      if (isVerified) {
        setProgress(0);
        setUploadFlag(true);

        const currentFile = files[0];
        let formData = new FormData();
        formData.append('file', files[0]);
        axiosInstance.post('/upload_file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (data) => {
            setProgress(Math.round((100 * data.loaded) / data.total));
          },
        });
      }
    }
  };

  return (
    <Dropzone
      onDrop={handleOnDrop}
      accept={config.dropzone.acceptedFileTypes}
      multiple={false}
      maxSize={config.dropzone.maxSize}
    >
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps({ className: classes.root })}>
          <input {...getInputProps()} />
          <img src={cloudImg} className={classes.cloudImg}></img>
          <p>Drag and Drop to pload files</p>
          <Button className={classes.uploadButton}>{t('xmlPage.upload_button')}</Button>
          <p>{t('xmlPage.size_limitation')}</p>
          <p className={classes.remark}>XML XL EXCEL XEL are supported</p>
        </div>
      )}
    </Dropzone>
  );
};

export default DropZone;
