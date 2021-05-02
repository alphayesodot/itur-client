/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../common/DashboardCard/DashboardCard';
import useStyles from './units.styles';
import SearchBar from '../SearchBar/SearchBar';
import UnitCard from '../UnitCard/UnitCard';

const units = ({ unitsArray, setUnitsArray }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [displayedArray, setDisplayedArray] = useState(unitsArray);

  useEffect(() => {
    setDisplayedArray(unitsArray);
  }, [unitsArray]);

  return (
    <div>
      <DashboardCard
        className={classes.units}
      >
        <SearchBar />
        <p className={classes.unitsTitle}>{`${t('text.units')} (${unitsArray.length})`}</p>
        <div className={classes.unitsList}>
          {displayedArray.map((unit) => <UnitCard unitName={unit.name} numberOfUnitUsers={12} />)}
        </div>
      </DashboardCard>
    </div>
  );
};

export default units;
