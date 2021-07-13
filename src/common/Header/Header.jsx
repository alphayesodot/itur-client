import React, { useState } from 'react';
import dotenv from 'dotenv';
import { useTranslation } from 'react-i18next';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { Toolbar, AppBar, IconButton, Button } from '@material-ui/core';
import GenericSelect from '../GenericSelect/GenericSelect';
import logo from '../../utils/images/logo.svg';
import UserStore from '../../stores/User.store';
import { Role } from '../../services/user.service';
import useStyles from './Header.styles';

dotenv.config();

const Header = () => {
  const classes = useStyles();
  const [selectedRole, setSelectedRole] = useState({
    id: UserStore.userProfile.role,
    label: UserStore.userProfile.role,
  });
  const date = new Date();
  const { t } = useTranslation();

  const getBlessing = (hour) => {
    const hoursRange = { morning: 5, afternoon: 12, evening: 17, night: 21 };
    if (hour >= hoursRange.morning && hour < hoursRange.afternoon) {
      return t('headerBlessings.morning');
    }
    if (hour >= hoursRange.afternoon && hour < hoursRange.evening) {
      return t('headerBlessings.afternoon');
    }
    if (hour >= hoursRange.evening && hour < hoursRange.night) {
      return t('headerBlessings.evening');
    }
    return t('headerBlessings.night');
  };

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar className={classes.toolbar}>
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
          {process.env.NODE_ENV === 'development' && (
            <GenericSelect
              selectClassName={classes.select}
              options={Object.values(Role).map((role) => ({ id: role, label: role }))}
              selectedValue={selectedRole}
              setSelectedValue={setSelectedRole}
            />
          )}
        </div>
        <Link to='/'>
          <Button>
            <img src={logo} alt='' />
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
