/* eslint-disable react/jsx-indent */
import { useState, useEffect } from 'react';
import AddUnit from './AddUnit/AddUnit.jsx';
import useStyles from './index.styles';
import UnitDetails from './UnitDetails/UnitDetails';
import Units from './Units/Units';
import UnitService from '../../services/unit.service';

const UserManaging = () => {
  const classes = useStyles();
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
        <Units
          unitsArray={units}
          setOpenAddUnit={setOpenAddUnit}
          selectedUnit={selectedUnit}
          setSelectedUnit={setSelectedUnit}
        />
      </div>
        <AddUnit
          className={classes.addUnitDialog}
          openAddUnit={openAddUnit}
          setOpenAddUnit={setOpenAddUnit}
          setUnits={setUnits}
        />
    </div>
  );
};

export default UserManaging;
