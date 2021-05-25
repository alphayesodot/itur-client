import DashboardCard from '../../../common/DashboardCard/DashboardCard.jsx';
import useStyles from './UnitDetailsHeadLine.styles';
import homeImg from '../../../utils/images/userManagement/home.png';
import usersImg from '../../../utils/images/userManagement/users.png';

const UnitDetailsHeadLine = ({ unitName, numberOfUnitUsers }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DashboardCard className={classes.mainDiv}>
        <div className={classes.main}>
          <img
            src={homeImg}
            alt='home logo'
            height='23rem'
            width='23rem'
            className={classes.homeLogo}
          />
          <p className={classes.mainDivText}>{`${unitName} : `}</p>
          <img
            src={usersImg}
            alt='user logo'
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

export default UnitDetailsHeadLine;
