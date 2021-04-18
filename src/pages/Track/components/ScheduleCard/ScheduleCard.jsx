import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import avatar from '../../../../utils/images/userpic-blue.svg';
import useStyles from './ScheduleCard.styles';

const ScheduleCard = ({ user, interviews }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.title}>
        <Avatar alt='avatar' src={avatar} className={classes.avatar} />
        <Typography className={classes.name}>
          {user.name}
        </Typography>
      </div>
      <div style={{ height: '80%' }} />
      <div className={classes.interviewsCount}>
        <Typography>
          {interviews.length
            ? (
              <>
                <strong>{t('title.interviewsCount')}</strong>
                {' '}
                {interviews.length}
              </>
            )
            : <strong>{t('title.noInterviews')}</strong>}
        </Typography>

      </div>
    </DashboardCard>
  );
};

ScheduleCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  interviews: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ScheduleCard;
