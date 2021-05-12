import { useTranslation } from 'react-i18next';
import { Input, Button, Dialog } from '@material-ui/core';
import { useState } from 'react';
import { toast } from 'react-toastify';

import useStyles from './AddUnit.styles.js';
import UnitService from '../../../services/unit.service.js';

const AddUnit = ({ openAddUnit, setOpenAddUnit, setUnits }) => {
  const { t } = useTranslation();
  const notify = () => toast(t('text.unitNotAddWarning'));

  const classes = useStyles();
  const [unitName, setUnitName] = useState('');

  const createUnit = () => {
    UnitService.createUnit(unitName).then((newUnit) => {
      setUnits((units) => [...units, { id: newUnit.id, name: newUnit.name }]);
    }).catch(() => {
      notify();
    }).finally(() => {
      setOpenAddUnit(false);
    });
  };

  return (
    <Dialog
      classes={{
        paper: classes.paper,
      }}
      onClose={() => setOpenAddUnit(false)}
      aria-labelledby='simple-dialog-title'
      open={openAddUnit}
    >
      <div className={classes.root}>
        <div className={classes.titleDiv}>
          <h2 dir='rtl' className={classes.title}>{t('headerTitles.addUnit')}</h2>
          <Button className={classes.closeButton} onClick={() => { setOpenAddUnit(!openAddUnit); }}>
            <img src='add-icon.svg' alt='close' className={classes.addIcon} />
          </Button>
        </div>
        <div className={classes.addDiv}>
          <Input type='text' placeholder={t('text.unitName')} className={classes.input} onChange={(event) => setUnitName(event.target.value)} />
          <Button className={classes.addButton} onClick={createUnit} disabled={unitName === ''}>{t('text.add')}</Button>
        </div>
      </div>
    </Dialog>
  );
};

export default AddUnit;
