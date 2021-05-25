import { useTranslation } from 'react-i18next';
import { Input, Button, Dialog, Typography } from '@material-ui/core';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useStyles from './AddUnit.styles.js';
import UnitService from '../../../services/unit.service.js';
import addImg from '../../../utils/images/userManagement/add-icon.svg';

const AddUnit = ({ openAddUnit, setOpenAddUnit, setUnits }) => {
  const { t } = useTranslation();

  const classes = useStyles();
  const [unitName, setUnitName] = useState('');

  const createUnit = () => {
    UnitService.createUnit(unitName).then((newUnit) => {
      setUnits((units) => [...units, { id: newUnit.id, name: newUnit.name }]);
    }).catch(() => {
      toast(t('userManagement.unitNotAddWarning'));
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
          <Typography className={classes.title}>{t('headerTitles.addUnit')}</Typography>
          <Button className={classes.closeButton} onClick={() => { setOpenAddUnit(!openAddUnit); }}>
            <img src={addImg} alt='close' className={classes.addIcon} />
          </Button>
        </div>
        <div className={classes.addDiv}>
          <Input type='text' placeholder={t('userManagement.unitName')} className={classes.input} onChange={(event) => setUnitName(event.target.value)} />
          <Button className={classes.addButton} onClick={createUnit} disabled={unitName === ''}>{t('userManagement.add')}</Button>
        </div>
      </div>
    </Dialog>
  );
};

export default AddUnit;
