import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './sidebar.styles';

const SideBar = () => {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  );
};

export default SideBar;
