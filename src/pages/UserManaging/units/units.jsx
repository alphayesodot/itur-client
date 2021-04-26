/* eslint-disable no-unused-vars */
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../common/DashboardCard/DashboardCard';
import useStyles from './units.styles';
import SearchBar from '../SearchBar/SearchBar';
import UnitCard from '../UnitCard/UnitCard';

const units = ({ numberOfUnits, unitsArray, setUnitsArray }) => {
  // TODO: delete numberOfUnits.
  const classes = useStyles();
  const { t } = useTranslation();
  // const [displayedArray, setDisplayedArray] = [...unitsArray];

  return (
    <div>
      <DashboardCard
        className={classes.units}
      >
        <SearchBar />
        <p className={classes.unitsTitle}>{`${t('text.units')} (${numberOfUnits})`}</p>
        <UnitCard unitName='ספיר' numberOfUnitUsers={12} isUnitSelected />
        <UnitCard unitName='שטל 121' numberOfUnitUsers={12} isUnitSelected={false} />
      </DashboardCard>
    </div>
  );
};

export default units;
