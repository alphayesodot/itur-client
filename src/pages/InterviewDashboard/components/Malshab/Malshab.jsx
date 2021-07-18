import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Malshab.styles';
import MalshabDetails from './MalshabDetails/MalshabDetails';
import MalshabToolbar from './MalshabToolbar/MalshabToolbar';

const Malshab = ({ malshab, event, finishInterview }) => {
  const classes = useStyles();
  navigator.mediaDevices.getUserMedia({ audio: true, video: true });

  return (
    <DashboardCard className={classes.root}>
      {event && <MalshabToolbar event={event} recording={false} finishInterview={finishInterview} />}
      <div style={{ display: 'flex', justifyContent: 'center', height: '25rem' }}>
        <iframe title='videochat' src={event.url} width='100%' allow='camera;microphone' style={{ border: 'none' }} />
      </div>
      {malshab && <MalshabDetails malshab={malshab} />}
    </DashboardCard>
  );
};

export default Malshab;
