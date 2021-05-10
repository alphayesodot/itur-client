/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
import useStyles from './SearchBar.styles.js';

const SearchBar = ({ setDisplayedArray, unitsArray }) => {
  const classes = useStyles();

  const handleChange = (value) => {
    { value === '' ? setDisplayedArray(unitsArray) : setDisplayedArray(unitsArray.filter((unit) => unit.name.includes(value))); }
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
