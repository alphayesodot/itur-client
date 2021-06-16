import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Select, MenuItem } from '@material-ui/core';
import UnitService from '../../services/unit.service';
import useStyles from './UnitSelect.styles';

/**
 * @param {*} selectedUnit: selected unit state
 * @param {*} setSelectedUnit: set selected unit's state function
 * @param {*} selectClassName: optional, additional select's class name defined by makestyles
 * @returns unit select
 */
const UnitSelect = ({ selectedUnit, setSelectedUnit, selectClassName }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [units, setUnits] = useState([]);

  useEffect(() => {
    UnitService.getUnits().then((res) => {
      setUnits(res);
      setSelectedUnit(res[0]);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, []);

  const handleOnChange = (e) => {
    setSelectedUnit(units.find((unit) => unit.id === e.target.value));
  };

  return (
    <Select
      className={selectClassName || classes.root}
      inputProps={{ classes: { root: classes.select, icon: classes.icon } }}
      onChange={handleOnChange}
      value={selectedUnit ? selectedUnit.id : ''}
      disableUnderline
    >
      {units.length === 0
        ? (
          <MenuItem disabled>
            {t('message.noUnits')}
          </MenuItem>
        )
        : units.map((unit) => (
          <MenuItem key={unit.id} value={unit.id}>
            {unit.name}
          </MenuItem>
        ))}
    </Select>
  );
};

export default UnitSelect;
