import React from 'react';
import ProgressBox from './components/progress-box/progress-box';
import DropZone from './components/drop-zone/drop-zone';
import { Container } from '@material-ui/core';
import useStyles from './index.styles';

const UploadXmlPage = () => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [uploadFlag, setUploadFlag] = React.useState(true);
  const progressBox = <ProgressBox progress={progress}></ProgressBox>;
  console.log(uploadFlag);
  return (
    <div className={classes.root}>
      <DropZone setProgress={setProgress} setUploadFlag={setUploadFlag}></DropZone>
      {uploadFlag ? progressBox : null}
    </div>
  );
};

export default UploadXmlPage;
