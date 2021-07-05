import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Typography } from '@material-ui/core';
import DashboardCard from '../DashboardCard/DashboardCard';
import DateInput from '../DateInput/DateInput';
import ScheduleStore from '../../stores/Schedule.store';
import useStyles from './ScheduleHeader.styles';
import NodeGroupSelect from '../NodeGroupSelect/NodeGroupSelect';
import commonInputUseStyles from '../CommonInput/CommonInput.styles';

const Header = ({
  unitName,
  selectedNodeGroup,
  setSelectedNodeGroup,
  selectedDate,
  setSelectedDate,
  setIsLoading,
  interviewers,
  selectFirst,
}) => {
  const classes = useStyles();
  const commonInputClasses = commonInputUseStyles();
  const { t } = useTranslation();

  useEffect(() => {
    if (selectedDate && selectedNodeGroup
      && !ScheduleStore.getScheduleOfNodeGroup(selectedDate, selectedNodeGroup.id)) {
      setIsLoading(true);
      ScheduleStore.addNewSchedule(selectedDate, selectedNodeGroup, interviewers).catch(() => {
        toast(t('error.server'));
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }, [selectedDate, selectedNodeGroup]);

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.content}>
        <DateInput
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          inputClassName={`${commonInputClasses.root} ${classes.dateInput}`}
        />
        <NodeGroupSelect
          selectedNodeGroup={selectedNodeGroup
            ? { ...selectedNodeGroup, label: selectedNodeGroup.name }
            : selectedNodeGroup}
          setSelectedNodeGroup={setSelectedNodeGroup}
          selectFirst={selectFirst}
          selectClassName={commonInputClasses.root}
        />
        <Typography className={`${classes.unit} ${classes.item}`}>
          :
          {t('title.unit')}
          {' '}
          <strong>{unitName}</strong>
        </Typography>
      </div>
    </DashboardCard>
  );
};

export default Header;
