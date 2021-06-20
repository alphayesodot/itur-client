import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Malshab.styles';
import MalshabDetails from './MalshabDetails/MalshabDetails';
import MalshabToolbar from './MalshabToolbar/MalshabToolbar';

const Malshab = ({ malshab, event }) => {
  const classes = useStyles();
  navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    .then((stream) => {
      /* use the stream */
    })
    .catch((err) => {
      /* handle the error */
    });
  return (
    <DashboardCard className={classes.root}>
      {event && <MalshabToolbar event={event} recording />}
      <div style={{ display: 'flex', justifyContent: 'center', height: '25rem' }}>
        <iframe title='videochat' src='https://radar-interviews.azurewebsites.net/?groupId=c5dcdd10-cfad-11eb-a100-cd76ace8e181' width='100%' allow='camera;microphone' style={{ border: 'none' }} />
      </div>
      {malshab && <MalshabDetails malshab={malshab} />}
    </DashboardCard>
  );
};

export default Malshab;
