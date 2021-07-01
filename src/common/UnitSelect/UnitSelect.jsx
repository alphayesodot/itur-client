import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import UnitService from '../../services/unit.service';
import GenericSelect from '../GenericSelect/GenericSelect';

/**
 * @param {*} selectedUnit: selected unit state
 * @param {*} setSelectedUnit: set selected unit's state function
 * @param {*} selectClassName: optional, additional select's class name defined by makestyles
 * @param {*} isMultiple: optional, is multiple options
 * @returns unit select
 */
const UnitSelect = ({ selectedUnit, setSelectedUnit, selectClassName, isMultiple }) => {
  const { t } = useTranslation();
  const [units, setUnits] = useState([]);

  useEffect(() => {
    UnitService.getUnits().then((res) => {
      const mappedRes = res.map((unit) => ({ ...unit, label: unit.name }));
      setUnits(mappedRes);
      setSelectedUnit(isMultiple ? [] : mappedRes[0]);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, []);

  return (
    <GenericSelect
      options={units}
      selectedValue={selectedUnit}
      setSelectedValue={setSelectedUnit}
      selectClassName={selectClassName}
      isMultiple={isMultiple}
    />
  );
};

export default UnitSelect;
