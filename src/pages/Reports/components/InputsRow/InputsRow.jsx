import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Button } from '@material-ui/core';
import NodeGroupSelect from '../../../../common/NodeGroupSelect/NodeGroupSelect';
import UnitSelect from '../../../../common/UnitSelect/UnitSelect';
import DateInput from '../../../../common/DateInput/DateInput';
import InputSection from '../InputSection/InputSection';
import useStyles from './InputsRow.styles';

const InputsRow = ({ onClick }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [nodeGroup, setNodeGroup] = useState();
  const [unit, setUnit] = useState();
  const [minDate, setMinDate] = useState();
  const [maxDate, setMaxDate] = useState();
  const [canSubmit, setCanSubmit] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!maxDate || new Date(maxDate).getTime() < new Date(minDate).getTime()) {
      setMaxDate(minDate);
    }
  }, [minDate]);

  useEffect(() => {
    if (!minDate || new Date(maxDate).getTime() < new Date(minDate).getTime()) {
      setMinDate(maxDate);
    }
  }, [maxDate]);

  useEffect(() => {
    setCanSubmit(name && nodeGroup && unit && minDate && maxDate);
  }, [name, nodeGroup, unit, minDate, maxDate]);

  return (
    <div className={classes.root}>
      <InputSection
        label={t('label.reportName')}
        input={(
          <TextField
            className={classes.input}
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
            InputProps={{
              disableUnderline: true,
            }}
          />
          )}
      />
      {/* TODO: Only if the user don't have a unit himself */}
      <InputSection
        label={t('label.unit')}
        input={(
          <UnitSelect
            selectedUnit={unit}
            setSelectedUnit={setUnit}
            selectClassName={`${classes.input} ${classes.select}`}
          />
          )}
      />
      {/* TODO: Only if not ramad itur-assistant/pr */}
      <InputSection
        label={t('label.nodeGroup')}
        input={(
          <NodeGroupSelect
            selectedNodeGroup={nodeGroup}
            setSelectedNodeGroup={setNodeGroup}
            selectClassName={`${classes.input} ${classes.select}`}
          />
          )}
      />
      <InputSection
        label={t('label.minDate')}
        input={(
          <DateInput
            selectedDate={minDate}
            setSelectedDate={setMinDate}
            inputClassName={classes.input}
          />
          )}
      />
      <InputSection
        label={t('label.maxDate')}
        input={(
          <DateInput
            selectedDate={maxDate}
            setSelectedDate={setMaxDate}
            inputClassName={classes.input}
          />
          )}
      />
      <Button
        disabled={!canSubmit}
        onClick={() => onClick(name, nodeGroup, unit, minDate, maxDate)}
        className={classes.button}
      >
        {t('button.createReport')}
      </Button>
    </div>
  );
};

export default InputsRow;
