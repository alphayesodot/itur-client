import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Button, IconButton, Tooltip } from '@material-ui/core';
import RedoIcon from '@material-ui/icons/Redo';
import UserStore from '../../../../stores/User.store';
import NodeGroupSelect from '../../../../common/NodeGroupSelect/NodeGroupSelect';
import UnitSelect from '../../../../common/UnitSelect/UnitSelect';
import DateInput from '../../../../common/DateInput/DateInput';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import InputSection from '../InputSection/InputSection';
import useStyles from './InputsRow.styles';

const InputsRow = ({ onClick, resetData }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const currentUser = UserStore.userProfile;
  const [name, setName] = useState('');
  const [nodeGroups, setNodeGroups] = useState([]);
  const [units, setUnits] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [canSubmit, setCanSubmit] = useState(false);
  const unitsOptionalRoles = ['MADA', 'ITUR', 'TECHNICAL'];
  const nodeGroupsRequiredRoles = ['PROFESSIONAL_RAMAD', 'RAMAD_ITUR_ASSISTANT'];
  const nodeGroupsOptionalRoles = ['RAMAD_ITUR_OF_UNIT'];

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
    setCanSubmit(
      !(nodeGroupsRequiredRoles.includes(currentUser.role) && !nodeGroups.length)
    && name
    && startDate
    && endDate,
    );
  }, [name, nodeGroups, units, startDate, endDate]);

  const restart = () => {
    setStartDate('');
    setEndDate('');
    setName('');
    resetData();
    setNodeGroups([]);
    setUnits([]);
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
      {unitsOptionalRoles.includes(currentUser.role) && (
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
      )}
      {(nodeGroupsRequiredRoles.includes(currentUser.role)
      || nodeGroupsOptionalRoles.includes(currentUser.role)) && (
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
      )}
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
          onClick={() => onClick(
            name,
            nodeGroups.map(({ id }) => id),
            units.map(({ id }) => id),
            startDate,
            endDate,
          )}
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
