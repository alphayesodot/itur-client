import React from 'react';
// import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { Toolbar, AppBar, IconButton, Button } from '@material-ui/core';
// import { useTranslation } from 'react-i18next';
import useStyles from './InterviewerHeader.styles';

const Header = () => {
  const classes = useStyles();
  // const { t } = useTranslation();
  const date = Date();
  console.log(date);

  // const headerTitles = [
  //   {
  //     title: t('headerTitles.malshabData'),
  //     path: '/interview-dashboard/malshab-data',
  //   },
  //   {
  //     title: t('headerTitles.appraiserPreperationKit'),
  //     path: '/interview-dashboard/preperation-kit',
  //   },
  // ];

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div>
          <Link to='/'>
            <Button>
              <img src='radar-logo.png' alt='' />
            </Button>
          </Link>
        </div>
        {/* <div>
          <Link to='/interview-dashboard'>
            <Button
              classes={{
                root: classes.interviewScheduleBtn,
                label: classes.label,
              }}
            >
              {t('headerTitles.interviewsSchedule')}
            </Button>
          </Link>

          {headerTitles.map(({ title, path }) => (
            <Link to={path}>
              <Button
                classes={{
                  root: `${classes.toolbarBtn} ${classes.notForMobile}`,
                  label: classes.label,
                }}
              >
                {title}
              </Button>
            </Link>
          ))}
        </div> */}
        <div>
          <IconButton
            className={`${classes.menuButton} ${classes.notForMobile}`}
            color='inherit'
            aria-label='menu'
          >
            <NotificationsNoneIcon className={classes.secondary} />
          </IconButton>
          <span>
            בוקר טוב
          </span>
          <IconButton
            className={`${classes.menuButton} ${classes.notForMobile}`}
            color='inherit'
            aria-label='menu'
          >
            <AccountCircleIcon className={classes.secondary} />
          </IconButton>
          {/* {[
            <NotificationsNoneIcon className={classes.secondary} />,
            <AccountCircleIcon className={classes.secondary} />,
          ].map((icon) => (
            <IconButton
              className={`${classes.menuButton} ${classes.notForMobile}`}
              color='inherit'
              aria-label='menu'
            >
              {icon}
            </IconButton>
          ))} */}
          {/* <IconButton
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
