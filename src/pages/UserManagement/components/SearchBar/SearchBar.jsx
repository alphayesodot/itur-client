import { useTranslation } from 'react-i18next';
import useStyles from './SearchBar.styles.js';
import searchImg from '../../../../utils/images/userManagement/search.png';

const SearchBar = ({ setDisplayedArray, unitsArray }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleChange = (value) => (
    value === '' ? setDisplayedArray(unitsArray) : setDisplayedArray(unitsArray.filter((unit) => unit.name.includes(value)))
  );

  return (
    <div className={classes.root}>
      <div className={classes.searchDiv}>
        <div className={classes.searchLogoDiv}>
          <img
            src={searchImg}
            alt='search logo'
            className={classes.searchImg}
          />
        </div>
        <input type='text' className={classes.input} onChange={(event) => { handleChange(event.target.value); }} placeholder={t('placeholders.searchUnit')} />
      </div>
    </div>
  );
};

export default SearchBar;
