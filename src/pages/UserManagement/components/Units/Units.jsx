import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from '@material-ui/core';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Units.styles';
import SearchBar from '../SearchBar/SearchBar';
import UnitCard from '../UnitCard/UnitCard';

const units = ({ unitsArray, setOpenAddUnit, selectedUnit, setSelectedUnit, users }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [displayedArray, setDisplayedArray] = useState(unitsArray);

  useEffect(() => {
    setDisplayedArray(unitsArray);
  }, [unitsArray]);

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.addUsersDiv}>
        <p className={classes.addUsersTitle}>{t('headerTitles.addUsers')}</p>
      </div>
      <SearchBar setDisplayedArray={setDisplayedArray} unitsArray={unitsArray} />
      <div className={classes.unitsCountDiv}>
        <p className={classes.unitsTitle}>
          <strong>
            {t('title.units')}
          </strong>
          {' '}
          (
          {displayedArray.length}
          )
        </p>
      </div>
      <div className={classes.unitsList}>
        { displayedArray.length > 0 ? (
          displayedArray.map((unit) => (
            <UnitCard
              unit={unit}
              key={unit.id}
              setSelectedUnit={setSelectedUnit}
              isSelected={unit.id === selectedUnit.id}
              users={users}
            />
          ))
        ) : <Typography className={classes.noUnits}>{t('text.noUnits')}</Typography> }
      </div>
      <div className={classes.addUnitDiv}>
        <Button variant='contained' className={classes.addUnitButton} onClick={() => setOpenAddUnit(true)}>
          {t('button.addUnit')}
        </Button>
      </div>
    </DashboardCard>
  );
};

export default units;
