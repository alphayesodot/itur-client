import { useTranslation } from 'react-i18next';
import { Input, Button } from '@material-ui/core';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useStyles from './AddUnit.styles.js';
import UnitService from '../../../../services/unit.service.js';
import CustomDialog from '../../../../common/CustomDialog/CustomDialog.jsx';

const AddUnit = ({ openAddUnit, setOpenAddUnit, setUnits }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [unitName, setUnitName] = useState('');

  const createUnit = () => {
    UnitService.createUnit(unitName).then((newUnit) => {
      setUnits((units) => [...units, { id: newUnit.id, name: newUnit.name }]);
      toast.success(t('text.unitAdded'));
    }).catch(() => {
      toast.error(t('text.unitNotAddWarning'));
    }).finally(() => {
      setOpenAddUnit(false);
    });
  };

  return (
    <CustomDialog
      open={openAddUnit}
      onClose={() => setOpenAddUnit(false)}
      title={t('headerTitles.addUnit')}
      content={(
        <div className={classes.content}>
          <Input type='text' placeholder={t('text.unitName')} className={classes.input} onChange={(event) => setUnitName(event.target.value)} />
          <Button className={classes.addButton} onClick={createUnit} disabled={unitName === ''}>{t('button.add')}</Button>
        </div>
      )}
    />
  );
};

export default AddUnit;
