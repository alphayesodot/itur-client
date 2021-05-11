import DashboardCard from '../../../common/DashboardCard/DashboardCard.jsx';
import useStyles from './HeadLine.styles';

const HeadLine = ({ unitName, numberOfUnitUsers }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DashboardCard className={classes.mainDiv}>
        <div className={classes.main}>
          <img
            src='home.png'
            alt=''
            height='23rem'
            width='23rem'
            className={classes.homeLogo}
          />
          <p className={classes.mainDivText}>{`${unitName} : `}</p>
          <img
            src='users.png'
            alt=''
            height='36rem'
            width='36rem'
            className={classes.usersLogo}
          />
          <p className={classes.mainDivText}>{numberOfUnitUsers}</p>
        </div>
      </DashboardCard>
    </div>
  );
};

export default HeadLine;
