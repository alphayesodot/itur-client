import React, { useState } from 'react';
import ProgressBoxes from './components/ProgressBoxes/ProgressBoxes';
import DropZone from './components/DropZone/DropZone';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import useStyles from './index.styles';

const UploadXmlPage = () => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);
  return (
    <DashboardCard className={classes.root}>
      <ProgressBoxes files={files} setFiles={setFiles} />
      <DropZone files={files} setFiles={setFiles} />
    </DashboardCard>
  );
};

export default UploadXmlPage;
