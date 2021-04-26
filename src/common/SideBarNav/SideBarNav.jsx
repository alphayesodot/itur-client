import React from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, AppBar, IconButton, Button } from '@material-ui/core';
import DashboardCard from '../DashboardCard/DashboardCard';
import useStyles from './SideBarNav.styles';

const Header = () => {
  const classes = useStyles();
  return (
    <DashboardCard>
      <Link to='/'>
        <Button>
          <img src='radar-logo.png' alt='' />
        </Button>
      </Link>
    </DashboardCard>
  );
};

export default Header;
