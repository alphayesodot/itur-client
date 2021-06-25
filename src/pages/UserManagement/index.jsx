import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import AddUnit from './components/AddUnit/AddUnit';
import useStyles from './index.styles';
import UnitDetails from './components/UnitDetails/UnitDetails';
import Units from './components/Units/Units';
import UnitService from '../../services/unit.service';

const UserManagement = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [openAddUnit, setOpenAddUnit] = useState(false);
  const [units, setUnits] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UnitService.getUnits().then((res) => {
      setUnits(res);
    }).catch(() => {
      toast.error(t('error.server'));
    });
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.mainDiv}>
        <Units
          unitsArray={units}
          setOpenAddUnit={setOpenAddUnit}
          selectedUnit={selectedUnit}
          setSelectedUnit={setSelectedUnit}
          users={users}
          setUsers={setUsers}
        />
        <UnitDetails
          unit={selectedUnit}
          users={users}
          setUsers={setUsers}
        />
      </div>
      <AddUnit
        openAddUnit={openAddUnit}
        setOpenAddUnit={setOpenAddUnit}
        setUnits={setUnits}
      />
    </div>
  );
};

export default UserManagement;
