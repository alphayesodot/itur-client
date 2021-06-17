import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Button, IconButton, Tooltip } from '@material-ui/core';
import RedoIcon from '@material-ui/icons/Redo';
import NodeGroupSelect from '../../../../common/NodeGroupSelect/NodeGroupSelect';
import UnitSelect from '../../../../common/UnitSelect/UnitSelect';
import DateInput from '../../../../common/DateInput/DateInput';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import InputSection from '../InputSection/InputSection';
import useStyles from './InputsRow.styles';

const InputsRow = ({ onClick, resetData }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [nodeGroups, setNodeGroups] = useState([]);
  const [units, setUnits] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [canSubmit, setCanSubmit] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!endDate || new Date(endDate).getTime() < new Date(startDate).getTime()) {
      setEndDate(startDate);
    }
  }, [startDate]);

  useEffect(() => {
    if (!startDate || new Date(endDate).getTime() < new Date(startDate).getTime()) {
      setStartDate(endDate);
    }
  }, [endDate]);

  useEffect(() => {
    // TODO: Change depends on required fields for each role
    setCanSubmit(name && nodeGroups?.length && units?.length && startDate && endDate);
  }, [name, nodeGroups, units, startDate, endDate]);

  const restart = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    setName('');
    resetData();
  };

  return (
    <DashboardCard className={classes.root}>
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
      {/* TODO: Change to multiple checks */}
      {/* TODO: Only if the user don't have a unit himself */}
      <InputSection
        label={t('label.units')}
        input={(
          <UnitSelect
            selectedUnit={units}
            setSelectedUnit={setUnits}
            selectClassName={`${classes.input} ${classes.select}`}
            isMultiple
          />
          )}
      />
      {/* TODO: Change to multiple checks */}
      {/* TODO: Only if not ramad itur-assistant/pr */}
      <InputSection
        label={t('label.nodeGroups')}
        input={(
          <NodeGroupSelect
            selectedNodeGroup={nodeGroups}
            setSelectedNodeGroup={setNodeGroups}
            selectClassName={`${classes.input} ${classes.select}`}
            isMultiple
          />
          )}
      />
      <InputSection
        label={t('label.startDate')}
        input={(
          <DateInput
            selectedDate={startDate}
            setSelectedDate={setStartDate}
            inputClassName={`${classes.input} ${classes.date}`}
          />
          )}
      />
      <InputSection
        label={t('label.endDate')}
        input={(
          <DateInput
            selectedDate={endDate}
            setSelectedDate={setEndDate}
            inputClassName={`${classes.input} ${classes.date}`}
          />
          )}
      />
      <div>
        <Button
          disabled={!canSubmit}
          onClick={() => onClick(name, nodeGroups, units, startDate, endDate)}
          className={classes.button}
        >
          {t('button.createReport')}
        </Button>
        <Tooltip title={t('toolTip.restart')}>
          <IconButton
            onClick={() => restart()}
            className={classes.iconButton}
          >
            <RedoIcon />
          </IconButton>
        </Tooltip>
      </div>
    </DashboardCard>
  );
};

export default InputsRow;
