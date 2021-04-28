import React from 'react';
import { Link } from 'react-router-dom';
// import { Toolbar, AppBar, IconButton, Button } from '@material-ui/core';
import DashboardCard from '../DashboardCard/DashboardCard';
import useStyles from './SideBarNav';
import settingsIcon from '../../utils/images/aside/settings.svg';
// import settingsIconActive from '../../utils/images/aside/settings-active.svg';
import interviewIcon from '../../utils/images/aside/aside-interview-button.svg';
// import interviewIconActive from '../../utils/images/aside/aside-interview-button-active.svg';
import luzIcon from '../../utils/images/aside/aside-luz-button.svg';
// import luzIconActive from '../../utils/images/aside/aside-luz-button-active.svg';

const Sidebar = () => {
  const classes = useStyles();
  return (
    <DashboardCard className={classes.root}>
      <div className={classes.iconGroup}>
        <Link to='/'>
          <img className={classes.icons} src={luzIcon} alt='settings' />
        </Link>
        <Link to='/'>
          <img className={classes.icons} src={interviewIcon} alt='settings' />
        </Link>
      </div>
      <Link to='/'>
        <img className={classes.icons} src={settingsIcon} alt='settings' />
      </Link>
    </DashboardCard>
  );
};

export default Sidebar;
