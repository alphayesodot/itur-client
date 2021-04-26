/* eslint-disable no-unused-vars */
import { useTranslation } from 'react-i18next';
import { Button, Dialog } from '@material-ui/core';
import { useState, useEffect } from 'react';
import AddUnit from './AddUnit/AddUnit';
import useStyles from './index.styles';
import UnitDetails from './UnitDetails/UnitDetails';
import Units from './units/units';
import UnitService from '../../services/unit.service';

const UserManaging = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [openAddUnit, setOpenAddUnit] = useState(false);
  const [units, setUnits] = useState([]);

  useEffect(async () => {
    setUnits(await UnitService.getUnits());
  }, []);

  return (
    <>
      <p className={classes.addUsersTitle}>{t('headerTitles.addUsers')}</p>
      <div className={classes.root}>
        <UnitDetails />
        <Units numberOfUnits={38} />
      </div>
      <Button variant='contained' className={classes.addUnitButton} onClick={() => setOpenAddUnit(true)}>
        {t('button.addUnit')}
      </Button>
      <Dialog onClose={() => setOpenAddUnit(false)} aria-labelledby='simple-dialog-title' open={openAddUnit}>
        <AddUnit />
      </Dialog>
    </>
  );
};

export default UserManaging;
