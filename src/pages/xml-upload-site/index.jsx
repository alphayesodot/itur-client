import React, { useState } from 'react';
import ProgressBoxes from './components/progress-box/progress-boxes';
import DropZone from './components/drop-zone/drop-zone';
import useStyles from './index.styles';

const UploadXmlPage = () => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);

  return (
    <div className={classes.root}>
      <DropZone files={files} setFiles={setFiles} />
      <ProgressBoxes files={files} setFiles={setFiles} />
    </div>
  );
};

export default UploadXmlPage;
