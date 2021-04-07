import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { Toolbar, AppBar, IconButton, Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './InterviewerHeader.styles';

const Header = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const headers = [
    {
      title: t('headerTitles.malshabData'),
      path: '/interview-dashboard/malshab-data',
    },
    {
      title: t('headerTitles.appraiserPreperationKit'),
      path: '/interview-dashboard/preperation-kit',
    },
  ];

  const iconButtons = [{
    icon: <NotificationsNoneIcon className={classes.secondary} />,
    path: '/notifications',
  },
  {
    icon: <AccountCircleIcon className={classes.secondary} />,
    path: '/account',
  }];

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
        <div>
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

          {headers.map(({ title, path }) => (
            <Link to={path} key={path}>
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
        </div>
        <div>
          {iconButtons.map(({ icon, path }) => (
            <IconButton
              className={`${classes.menuButton} ${classes.notForMobile}`}
              color='inherit'
              aria-label='menu'
              key={path}
              component={Link}
              to={path}
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

export default Header;
