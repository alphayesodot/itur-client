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

  const headerTitles = [
    {
      id: 0,
      title: t('headerTitles.malshabData'),
      path: '/interview-dashboard/malshab-data',
    },
    {
      id: 1,
      title: t('headerTitles.appraiserPreperationKit'),
      path: '/interview-dashboard/preperation-kit',
    },
  ];

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

          {headerTitles.map(({ id, title, path }) => (
            <Link key={id} to={path}>
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
          {[
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
          ))}
          <IconButton className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
