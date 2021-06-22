import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Button, Tooltip } from '@material-ui/core';
import UndoIcon from '../../../../utils/images/reports/undo-solid.svg';
import UserStore from '../../../../stores/User.store';
import { Role } from '../../../../services/user.service';
import NodeGroupSelect from '../../../../common/NodeGroupSelect/NodeGroupSelect';
import UnitSelect from '../../../../common/UnitSelect/UnitSelect';
import DateInput from '../../../../common/DateInput/DateInput';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import LabeledInput from '../LabeledInput/LabeledInput';
import useStyles from './Header.styles';

const Header = ({ onClick, resetData }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const currentUser = UserStore.userProfile;
  const [name, setName] = useState('');
  const [nodeGroups, setNodeGroups] = useState([]);
  const [units, setUnits] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [canSubmit, setCanSubmit] = useState(false);
  const unitsOptionalRoles = [Role.Mada, Role.Itur, Role.Technical];
  const nodeGroupsRequiredRoles = [Role.ProfessionalRamad, Role.RamadIturAssistant];
  const nodeGroupsOptionalRoles = [Role.RamadIturOfUnit];

  useEffect(() => {
    if (endDate && new Date(endDate).getTime() < new Date(startDate).getTime()) {
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

  const clearInputs = () => {
    setStartDate(null);
    setEndDate(null);
    setName('');
    setNodeGroups([]);
    setUnits([]);
  };

  const restart = () => {
    clearInputs();
    resetData();
  };

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.inputsDiv}>
        <LabeledInput
          label={t('label.reportName')}
          input={(
            <TextField
              className={`${classes.input} ${classes.textField}`}
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
        <LabeledInput
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
        <LabeledInput
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
        <LabeledInput
          label={t('label.startDate')}
          input={(
            <DateInput
              selectedDate={startDate}
              setSelectedDate={setStartDate}
              inputClassName={`${classes.input} ${classes.date}`}
            />
          )}
        />
        <LabeledInput
          label={t('label.endDate')}
          input={(
            <DateInput
              selectedDate={endDate}
              setSelectedDate={setEndDate}
              inputClassName={`${classes.input} ${classes.date}`}
            />
          )}
        />
      </div>
      <div>
        <Button
          disabled={!canSubmit}
          onClick={() => {
            onClick(
              name,
              nodeGroups.map(({ id }) => id),
              units.map(({ id }) => id),
              startDate,
              endDate,
            );
            clearInputs();
          }}
          className={classes.button}
        >
          {t('button.createReport')}
        </Button>
        <Tooltip title={t('toolTip.restart')}>
          <Button onClick={() => restart()}>
            <img src={UndoIcon} alt='undo' className={classes.undo} />
          </Button>
        </Tooltip>
      </div>
    </DashboardCard>
  );
};

export default Header;
