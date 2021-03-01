import React from 'react';
import ProgressBox from './components/progress-box/progress-box';
import DropZone from './components/drop-zone/drop-zone';
import { Container } from '@material-ui/core';
import useStyles from './index.styles';

const UploadXmlPage = () => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [uploadFlag, setUploadFlag] = React.useState(true);
  const progressBox = <ProgressBox progress={progress}></ProgressBox>
  console.log(uploadFlag)
  return (
    <div className={classes.uploadArea}>
      <Container maxWidth="sm">
        <DropZone setProgress = {setProgress} setUploadFlag={setUploadFlag}></DropZone>
        {uploadFlag ?  progressBox :null}        
      </Container>
    </div>
  );
};

export default UploadXmlPage;
