import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, TextField, Button } from '@material-ui/core';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Header.styles';
import NodeGroupSelect from '../NodeGroupSelect/NodeGroupSelect';

const Header = ({
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
            className={classes.item}
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
        <Button className={classes.button}>
          {t('button.newSchedule')}
        </Button>
      </div>
    </DashboardCard>
  );
};

export default Header;
