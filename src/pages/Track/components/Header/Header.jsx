import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Typography } from '@material-ui/core';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import ScheduleStore from '../../../../stores/Schedule.store';
import useStyles from './Header.styles';
import NodeGroupSelect from '../../../../common/NodeGroupSelect/NodeGroupSelect';
import DateInput from '../../../../common/DateInput/DateInput';

const Header = ({
  unitName,
  selectedNodeGroup,
  setSelectedNodeGroup,
  selectedDate,
  setSelectedDate,
  setIsLoading,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    if (selectedDate && selectedNodeGroup
      && !ScheduleStore.getScheduleOfNodeGroup(selectedDate, selectedNodeGroup.id)) {
      setIsLoading(true);
      ScheduleStore.addNewSchedule(selectedDate, selectedNodeGroup).catch(() => {
        toast(t('error.server'));
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }, [selectedDate, selectedNodeGroup]);

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.content}>
        <DateInput selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <NodeGroupSelect
          selectedNodeGroup={selectedNodeGroup}
          setSelectedNodeGroup={setSelectedNodeGroup}
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
