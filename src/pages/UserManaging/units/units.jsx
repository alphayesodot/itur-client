/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import DashboardCard from '../../../common/DashboardCard/DashboardCard';
import useStyles from './units.styles';
import SearchBar from '../SearchBar/SearchBar';
import UnitCard from './UnitCard/UnitCard.jsx';

const units = ({ unitsArray, setUnitsArray, setOpenAddUnit, selectedUnit, setSelectedUnit }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [displayedArray, setDisplayedArray] = useState(unitsArray);

  useEffect(() => {
    setDisplayedArray(unitsArray);
  }, [unitsArray]);

  return (
    <div className={classes.root}>
      <DashboardCard
        className={classes.units}
      >
        <div className={classes.addUsersDiv}>
          <p className={classes.addUsersTitle}>{t('headerTitles.addUsers')}</p>
        </div>
        <SearchBar setDisplayedArray={setDisplayedArray} unitsArray={unitsArray} />
        <p className={classes.unitsTitle}>{`${t('text.units')} (${unitsArray.length})`}</p>
        { displayedArray.length > 0 ? (
          <div className={classes.unitsList}>
            {displayedArray.map((unit) => <UnitCard unit={unit} numberOfUnitUsers={12} setSelectedUnit={setSelectedUnit} isSelected={unit.id === selectedUnit.id} />)}
          </div>
        ) : <div><h3>{t('text.noUnits')}</h3></div> }
        <div className={classes.addUnitDiv}>
          <Button variant='contained' className={classes.addUnitButton} onClick={() => setOpenAddUnit(true)}>
            {t('button.addUnit')}
          </Button>
        </div>
      </DashboardCard>
    </div>
  );
};

export default units;
