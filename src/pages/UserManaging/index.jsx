/* eslint-disable react/jsx-indent */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { useTranslation } from 'react-i18next';
import { Dialog } from '@material-ui/core';
import { useState, useEffect } from 'react';
import AddUnit from './AddUnit/AddUnit.jsx';
import useStyles from './index.styles';
import UnitDetails from './UnitDetails/UnitDetails';
import Units from './units/units.jsx';
import UnitService from '../../services/unit.service';

const UserManaging = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [openAddUnit, setOpenAddUnit] = useState(false);
  const [units, setUnits] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState('');

  useEffect(async () => {
    setUnits(await UnitService.getUnits());
  }, []);

  return (
    <div className={classes.mainDiv}>
      <div className={classes.root}>
        <UnitDetails unit={selectedUnit} />
        <Units unitsArray={units} setUnitsArray={setUnits} setOpenAddUnit={setOpenAddUnit} selectedUnit={selectedUnit} setSelectedUnit={setSelectedUnit} />
      </div>
      <Dialog onClose={() => setOpenAddUnit(false)} aria-labelledby='simple-dialog-title' open={openAddUnit}>
        <AddUnit className={classes.addUnitDialog} openAddUnit={openAddUnit} setOpenAddUnit={setOpenAddUnit} />
      </Dialog>
    </div>
  );
};

export default UserManaging;