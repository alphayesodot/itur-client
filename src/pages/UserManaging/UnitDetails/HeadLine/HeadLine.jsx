import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import theme from '../../../../theme';
import useStyles from './HeadLine.styles';

const HeadLine = ({ unitName, numberOfUnitUsers }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DashboardCard
        backgroundColor={theme.palette.primary.main}
        width='65rem'
        height='4rem'
        mt='2rem'
      >
        <div className={classes.main}>
          <img
            src='home.png'
            alt=''
            height='25rem'
            width='25rem'
            className={classes.homeLogo}
          />
          <p>{`${unitName}: `}</p>
          <img
            src='users.png'
            alt=''
            height='40rem'
            width='40rem'
            className={classes.usersLogo}
          />
          <p>{numberOfUnitUsers}</p>
        </div>
      </DashboardCard>
    </div>
  );
};

export default HeadLine;
