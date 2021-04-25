import React from 'react';
// import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { Toolbar, AppBar, IconButton, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './InterviewerHeader.styles';

const Header = () => {
  const classes = useStyles();
  const date = new Date();
  const { t } = useTranslation();
  const getBlessing = (hour) => {
    const morningHours = { morning: 5, afternoon: 12, evning: 17, night: 21 };
    if (hour >= morningHours.morning && hour < morningHours.afternoon) {
      return t('headerBlessings.morning');
    }
    if (hour >= morningHours.afternoon && hour < morningHours.evning) {
      return t('headerBlessings.afternoon');
    }
    if (hour >= morningHours.evning && hour < morningHours.night) {
      return t('headerBlessings.evning');
    }
    return t('headerBlessings.night');
  };
  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Link to='/'>
          <Button>
            <img src='radar-logo.png' alt='' />
          </Button>
        </Link>
        <div>
          <IconButton
            className={`${classes.menuButton} ${classes.notForMobile}`}
            color='inherit'
            aria-label='menu'
          >
            <NotificationsNoneIcon className={classes.secondary} />
          </IconButton>
          <span className={`${classes.blessing} ${classes.notForMobile}`}>
            {getBlessing(date.getHours())}
          </span>
          <IconButton
            className={`${classes.menuButton} ${classes.notForMobile}`}
            color='inherit'
            aria-label='menu'
          >
            <AccountCircleIcon className={classes.secondary} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
