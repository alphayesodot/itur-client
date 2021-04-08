/* eslint-disable arrow-body-style */
import React from 'react';
import useStyles from './SearchBar.styles';

const SearchBar = () => {
  const classes = useStyles();
  const handleChange = (value) => {
    console.log(value);
  };
  return (
    <div className={classes.root}>
      <input type='text' className={classes.input} onChange={(event) => { handleChange(event.target.value); }} />
    </div>
  );
};

export default SearchBar;
