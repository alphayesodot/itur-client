import ProgressBox from './components/progress-box/progress-box';
import { SimpleDropZone, DropZone } from './components/drop-zone/drop-zone';
import useStyles from './index.styles';

const UploadXmlPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SimpleDropZone />
      {/* <DropZone /> */}
      <ProgressBox progress={0.75}></ProgressBox>
    </div>
  );
};

export default UploadXmlPage;
