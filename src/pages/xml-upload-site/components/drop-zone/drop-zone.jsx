import React, { useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import useStyles from './drop-zone.styles';
import Dropzone from 'react-dropzone';
import axios from 'axios';

const DropZone = () => {
  const classes = useStyles();
  const acceptedFileTypes =
    'image/x-png, image/png, image/jpg, image/jpeg, image/gif';
  const acceptedFileTypesArray = acceptedFileTypes
    .split(',')
    .map((item) => item.trim());
  const imageMaxSize = 1000000000; // bytes
  const [file, setFile] = useState(null);

  const verifyFile = (files) => {
    if (files && files.length > 0) {
      const currentFile = files[0];
      const currentFileType = currentFile.type;
      const currentFileSize = currentFile.size;
      if (currentFileSize > imageMaxSize) {
        alert(
          'This file is not allowed. ' + currentFileSize + ' bytes is too large'
        );
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
    if (rejectedFiles && rejectedFiles.length > 0) {
      verifyFile(rejectedFiles);
    }

    if (files && files.length > 0) {
      const isVerified = verifyFile(files);
      if (isVerified) {
        // imageBase64Data
        const currentFile = files[0];
        console.log(currentFile.type);
        const myFileItemReader = new FileReader();
        myFileItemReader.addEventListener(
          'load',
          () => {
            // console.log(myFileItemReader.result);
            const myResult =
              typeof myFileItemReader.result === 'string'
                ? myFileItemReader.result
                : Buffer.from(myFileItemReader.result).toString();
            setFile(myResult);
          },
          false
        );
        myFileItemReader.readAsDataURL(currentFile);
      }
    }
  };

  const sendFile = (file: string) => {
    
  };
  return (
    <Dropzone
      onDrop={handleOnDrop}
      accept={acceptedFileTypes}
      multiple={false}
      maxSize={imageMaxSize}
    >
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps({ className: classes.dropZone })}>
          <input {...getInputProps()} />
          <p>Drag'n'drop files, or click to select files</p>
        </div>
      )}
    </Dropzone>

    // <DropzoneArea
    //   dropzoneClass={classes.root}
    //   //   onChange={this.onChangeHandler.bind(this)}
    //   filesLimit="1"
    //   dropzoneText="Drang and Drop to upload files"
    //   acceptedFiles={[
    //     'text/csv',
    //     'application/vnd.ms-excel',
    //     'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    //   ]} // check
    // >
    //   <button>heloo</button>
    // </DropzoneArea>
  );
};

export default DropZone;
