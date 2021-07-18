import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import AddUnit from './components/AddUnit/AddUnit';
import useStyles from './index.styles';
import UnitDetails from './components/UnitDetails/UnitDetails';
import Units from './components/Units/Units';
import UnitService from '../../services/unit.service';
import config from './config';

const UserManagement = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const superAdminsUnit = { id: config.superUnitId, name: t('title.defaultUnitName') };
  const [openAddUnit, setOpenAddUnit] = useState(false);
  const [units, setUnits] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    UnitService.getUnits().then((res) => {
      setUnits((prevValue) => [...prevValue, superAdminsUnit, ...res]);
      setIsLoading(false);
    }).catch(() => {
      toast(t('error.server'));
    }).finally(() => {
      setIsLoading(false);
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
          isLoading={isLoading}
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
