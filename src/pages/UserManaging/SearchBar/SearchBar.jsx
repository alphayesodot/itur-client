/* eslint-disable no-unused-vars */
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import useStyles from './SearchBar.styles';

const SearchBar = ({ setDisplayedArray }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [arrayToDisplay, setArrayToDisplay] = useState();

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
