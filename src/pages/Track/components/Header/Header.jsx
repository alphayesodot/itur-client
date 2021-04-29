import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, TextField, Button } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import ScheduleStore from '../../../../stores/Schedule.store';
import useStyles from './Header.styles';
import NodeGroupSelect from '../NodeGroupSelect/NodeGroupSelect';

const Header = observer(({
  unit,
  selectedNodeGroupId,
  setSelectedNodeGroupId,
  selectedDate,
  setSelectedDate,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleOnDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleNewSchedule = () => {
    if (selectedDate && selectedNodeGroupId
      && !ScheduleStore.schedules.find((schedule) => schedule.date === selectedDate
    && schedule.nodeGroupId === selectedNodeGroupId)) {
      ScheduleStore.addNewSchedule(selectedDate, selectedNodeGroupId);
    }
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
            selectedNodeGroupId={selectedNodeGroupId}
            setSelectedNodeGroupId={setSelectedNodeGroupId}
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
        <Button className={classes.button} onClick={handleNewSchedule}>
          {t('button.newSchedule')}
        </Button>
      </div>
    </DashboardCard>
  );
});

export default Header;
