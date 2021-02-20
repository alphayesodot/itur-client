import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './navbar.styles';

const NavBar = () => {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Upload xml file</Link>
      </li>
    </ul>
  );
};

export default NavBar;
