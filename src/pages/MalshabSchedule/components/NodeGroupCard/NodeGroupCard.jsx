import { Typography } from '@material-ui/core';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './NodeGroupCard.styles';
import POSITIVE from '../../../../utils/images/schedule/passed-positive.svg';

const NodeGroupCard = ({ nodeGroup }) => {
  const classes = useStyles();
  // TODO: i18n
  return (
    <div>
      <DashboardCard className={classes.root}>
        <Typography className={classes.nodeGroupTitle}>
          <strong>מסלול: </strong>
          {nodeGroup.name}
        </Typography>
        <Typography className={classes.malshabs}>
          <strong>מלשב"ים לשיבוץ</strong>
        </Typography>
        <Typography className={classes.malshabs}>
          <strong>10/150</strong>
        </Typography>
        <img src={POSITIVE} alt='' className={classes.iconImg} />

      </DashboardCard>
    </div>
  );
};

export default NodeGroupCard;
