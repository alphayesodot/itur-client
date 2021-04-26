/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React from 'react';
import useStyles from './SearchBar.styles';

const SearchBar = ({ setDisplayedArray }) => {
  const classes = useStyles();
  const handleChange = (value) => {
    console.log(value);
  };
  return (
    <div className={classes.root}>
      <div className={classes.searchDiv}>
        <div className={classes.searchLogoDiv}>
          <img
            src='search.png'
            alt=''
            height='15rem'
            width='15rem'
            className={classes.searchLogo}
          />
        </div>
        <input type='text' className={classes.input} onChange={(event) => { handleChange(event.target.value); }} placeholder='חיפוש יחידה' />
      </div>
    </div>
  );
};

export default SearchBar;
