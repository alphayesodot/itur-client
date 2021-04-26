import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
// import { Toolbar, AppBar, IconButton, Button } from '@material-ui/core';
import DashboardCard from '../DashboardCard/DashboardCard';
import useStyles from './SideBarNav.styles';

const Sidebar = () => {
  const classes = useStyles();
  const x = '24';
  return (
    <DashboardCard className={classes.root}>
      <Link to='/'>
        <Button>
          {x}
        </Button>
      </Link>
    </DashboardCard>
  );
};

export default Sidebar;
