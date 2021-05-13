import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Malshab.styles';
import MalshabDetails from './MalshabDetails/MalshabDetails';
import MalshabToolbar from './MalshabToolbar/MalshabToolbar';

const Malshab = ({ malshab, event }) => {
  const classes = useStyles();

  return (
    <DashboardCard className={classes.root}>
      {event && <MalshabToolbar event={event} recording />}
      <div style={{ display: 'flex', justifyContent: 'center', height: '25rem' }}>
        <img src='videoconference.png' alt='' />
      </div>
      {malshab && <MalshabDetails malshab={malshab} />}
    </DashboardCard>
  );
};

export default Malshab;
