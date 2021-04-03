import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Toolbar, AppBar, IconButton, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './InterviewerHeader.styles';

const InterviewerHeader = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const headerTitles = [
    t('interviewDashboard.headerTitles.virtualInterview'),
    t('interviewDashboard.headerTitles.malshabData'),
    t('interviewDashboard.headerTitles.guidePreperationKit'),
  ];

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div>
          <Button>
            <img src='radar-logo.png' alt='' />
          </Button>
        </div>
        <div>
          <Button
            classes={{
              root: classes.interviewScheduleBtn,
              label: classes.label,
            }}
          >
            {t('interviewDashboard.headerTitles.interviewsSchedule')}
          </Button>

          {headerTitles.map((label) => (
            <Button
              key={Math.random()}
              classes={{
                root: `${classes.toolbarBtn} ${classes.notForMobile}`,
                label: classes.label,
              }}
            >
              {label}
            </Button>
          ))}
        </div>
        <div>
          {[
            <NotificationsNoneIcon className={classes.secondary} />,
            <AccountCircleIcon className={classes.secondary} />,
          ].map((icon) => (
            <IconButton
              key={Math.random()}
              className={`${classes.menuButton} ${classes.notForMobile}`}
              color='inherit'
              aria-label='menu'
            >
              {icon}
            </IconButton>
          ))}
          <IconButton
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default InterviewerHeader;
