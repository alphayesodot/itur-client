/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from '@material-ui/core';
import DashboardCard from '../../../common/DashboardCard/DashboardCard';
import useStyles from './Units.styles';
import SearchBar from '../SearchBar/SearchBar';
import UnitCard from '../UnitCard/UnitCard';

const units = ({ unitsArray, setOpenAddUnit, selectedUnit, setSelectedUnit }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [displayedArray, setDisplayedArray] = useState(unitsArray);

  useEffect(() => {
    setDisplayedArray(unitsArray);
  }, [unitsArray]);

  return (
    <div className={classes.root}>
      <DashboardCard className={classes.units}>
        <div className={classes.addUsersDiv}>
          <p className={classes.addUsersTitle}>{t('headerTitles.addUsers')}</p>
        </div>
        <SearchBar setDisplayedArray={setDisplayedArray} unitsArray={unitsArray} />
        <p className={classes.unitsTitle}>{`${t('text.units')} (${displayedArray.length})`}</p>
        { displayedArray.length > 0 ? (
          <div className={classes.unitsList}>
            {displayedArray.map((unit) => <UnitCard unit={unit} setSelectedUnit={setSelectedUnit} isSelected={unit.id === selectedUnit.id} />)}
          </div>
        ) : <div className={classes.noUnitsDiv}><Typography className={classes.noUnits}>{t('text.noUnits')}</Typography></div> }
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
