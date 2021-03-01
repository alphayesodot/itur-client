import React from 'react';
import ProgressBox from './components/progress-box/progress-box';
import DropZone from './components/drop-zone/drop-zone';
import { Container } from '@material-ui/core';
import useStyles from './index.styles';

const UploadXmlPage = () => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [showProgressBox, setShowProgressBox] = React.useState(true);
  const progressBox = <ProgressBox fileName={'filename.txt'} progress={progress}></ProgressBox>;
  return (
    <div className={classes.root}>
      <DropZone setProgress={setProgress} setShowProgressBox={setShowProgressBox}></DropZone>
      {showProgressBox ? progressBox : null}
    </div>
  );
};

export default UploadXmlPage;
