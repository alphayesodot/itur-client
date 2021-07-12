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

  const superAdminsUnit = { id: '123456789', name: 'מנהלי מערכת' };
  const [isUserAdmin, setIsUserAdmin] = useState([]);
  const [openAddUnit, setOpenAddUnit] = useState(false);
  const [units, setUnits] = useState([superAdminsUnit]);
  const [selectedUnit, setSelectedUnit] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setIsUserAdmin(selectedUnit.id === '123456789');
    UnitService.getUnits().then((res) => {
      setUnits((prevValue) => [...prevValue, ...res]);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, []);

  useEffect(() => {
    setIsUserAdmin(selectedUnit.id === '123456789');
  }, [selectedUnit]);

  return (
    <div className={classes.root}>
      <div className={classes.mainDiv}>
        <Units
          unitsArray={units}
          setOpenAddUnit={setOpenAddUnit}
          selectedUnit={selectedUnit}
          setSelectedUnit={setSelectedUnit}
          users={users}
          isUserAdmin={isUserAdmin}
          setUsers={setUsers}
        />
        <UnitDetails
          unit={selectedUnit}
          users={users}
          setUsers={setUsers}
          isUserAdmin={isUserAdmin}

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
