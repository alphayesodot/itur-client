import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Typography, TextField } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import ScheduleStore from '../../../../stores/Schedule.store';
import useStyles from './Header.styles';
import NodeGroupSelect from '../NodeGroupSelect/NodeGroupSelect';

const Header = observer(({
  unit,
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
      && !ScheduleStore.getScheduleOfNodeGroup(selectedDate, selectedNodeGroup._id)) {
      setIsLoading(true);
      ScheduleStore.addNewSchedule(selectedDate, selectedNodeGroup).catch(() => {
        toast(t('error.server'));
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }, [selectedDate, selectedNodeGroup]);

  const handleOnDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.content}>
        <div className={classes.main}>
          <Typography className={`${classes.unit} ${classes.item}`}>
            {t('title.unit')}
            :
            {' '}
            <strong>{unit ? unit.name : ''}</strong>
          </Typography>
          <NodeGroupSelect
            selectedNodeGroup={selectedNodeGroup}
            setSelectedNodeGroup={setSelectedNodeGroup}
          />
          <TextField
            className={`${classes.date} ${classes.item}`}
            type='date'
            onChange={handleOnDateChange}
            value={selectedDate}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </div>
      </div>
    </DashboardCard>
  );
});

export default Header;
