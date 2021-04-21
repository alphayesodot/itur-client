import React, { useState } from 'react';
import ProgressBoxes from './components/ProgressBox/ProgressBoxes';
import DropZone from './components/DropZone/DropZone';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import useStyles from './index.styles';

const UploadXmlPage = () => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);
  return (
    <div className={classes.root}>
      <DashboardCard className={classes.content}>
        <DropZone files={files} setFiles={setFiles} />
        <ProgressBoxes files={files} setFiles={setFiles} />
      </DashboardCard>
    </div>
  );
};

export default UploadXmlPage;
