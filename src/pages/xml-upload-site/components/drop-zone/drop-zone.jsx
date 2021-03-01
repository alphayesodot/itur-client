import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import useStyles from './drop-zone.styles';
import Dropzone from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import Image from 'material-ui-image';
import cloudImg from '../../images/cloud.png';


const DropZone = (props) => {
  const {setProgress, setUploadFlag} = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const apiUrl = 'api/uploadfile';
  const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
  const acceptedFileTypesArray = acceptedFileTypes.split(',').map((item) => item.trim());
  const imageMaxSize = 1000000000; // bytes

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8081/",
  })
  const verifyFile = (files) => {
    if (files && files.length > 0) {
      const currentFile = files[0];
      const currentFileType = currentFile.type;
      const currentFileSize = currentFile.size;
      if (currentFileSize > imageMaxSize) {
        alert('This file is not allowed. ' + currentFileSize + ' bytes is too large');
        return false;
      }
      if (!acceptedFileTypesArray.includes(currentFileType)) {
        alert('This file is not allowed. Only images are allowed.');
        return false;
      }
      return true;
    }
  };

  const handleOnDrop = (files, rejectedFiles) => {
    //try
    // const formData = new FormData();
    // for (const file of files) formData.append('file', file);
    // const xhr = new XMLHttpRequest();
    // xhr.upload.onprogress = (event) => {
    //   const percentage = parseInt((event.loaded / event.total) * 100);
    //   console.log(percentage); // Update progress here
    // };
    // xhr.onreadystatechange = () => {
    //   if (xhr.readyState !== 4) return;
    //   if (xhr.status !== 200) {
    //     console.log('error'); // Handle error here
    //   }
    //   console.log('success'); // Handle success here
    // };
    // xhr.open('POST', 'https://httpbin.org/post', true);
    // xhr.send(formData);
    //end of try

    if (rejectedFiles && rejectedFiles.length > 0) {
      verifyFile(rejectedFiles);
    }

    if (files && files.length > 0) {
      const isVerified = verifyFile(files);
      if (isVerified) {
        setProgress(0);
        setUploadFlag(true);

        // imageBase64Data
        const currentFile = files[0];
        console.log(currentFile.type);


        let formData = new FormData()
        formData.append("file", files[0])
        axiosInstance.post("/upload_file", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: data => {
            //Set the progress value to show the progress bar
            setProgress(Math.round((100 * data.loaded) / data.total))
          },
        });

        // const myFileItemReader = new FileReader();
        // myFileItemReader.addEventListener(
        //   'load',
        //   () => {
        //     // console.log(myFileItemReader.result);
        //     const myResult =
        //       typeof myFileItemReader.result === 'string'
        //         ? myFileItemReader.result
        //         : Buffer.from(myFileItemReader.result).toString();
        //     setFile(myResult);
        //   },
        //   false
        // );
        // myFileItemReader.readAsDataURL(currentFile);
      }
    }
  };

  
  return (
    <Dropzone
      onDrop={handleOnDrop}
      onChangeStatus={handleChangeStatus}
      accept={acceptedFileTypes}
      multiple={false}
      maxSize={imageMaxSize}
    >
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps({ className: classes.root })}>
          <input {...getInputProps()} />
          {/* <Image src={cloudImg} className={classes.cloudImg} /> */}
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

export { SimpleDropZone, DropZone };
