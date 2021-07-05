import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import UserCard from '../UserCard/UserCard';
import useStyles from './UsersCard.styles';

const UsersCard = ({ users, selectedDate, choosenNodeGroup }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [scheduleHasChanged, setScheduleHasChanged] = useState(false);

  const handleOnSave = () => {

  };

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.topRow}>
        <Typography className={classes.topRowText}>
          {t('unitControlPage.usersText')}
          <span>{`${t('unitControlPage.totalText')} - ${users.length}`}</span>
        </Typography>
        <Button
          disabled={!scheduleHasChanged}
          className={`${classes.button} ${!scheduleHasChanged ? classes.disabled : ''}`}
          onClick={handleOnSave}
        >
          {t('unitControlPage.saveSchedule')}
        </Button>
      </div>
      <div className={classes.usersList}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            selectedDate={selectedDate}
            choosenNodeGroup={choosenNodeGroup}
          />
        ))}
      </div>
    </DashboardCard>
  );
};

export default UsersCard;
