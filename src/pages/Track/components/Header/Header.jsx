import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography, Select, MenuItem, TextField, Button } from '@material-ui/core';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Header.styles';

const Header = ({ unitName }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.content}>
        <div className={classes.main}>
          <Typography className={`${classes.unit} ${classes.item}`}>
            {t('title.unit')}
            :
            {' '}
            <strong>{unitName}</strong>
          </Typography>
          <Select
            className={`${classes.select} ${classes.item}`}
            inputProps={{ classes: { icon: classes.icon } }}
            disableUnderline
          >
            {['מסלול', 'עוד מסלול'].map((nodeGroup) => (
              <MenuItem className={classes.nodeGroup} key={nodeGroup} value={nodeGroup}>
                {nodeGroup}
              </MenuItem>
            ))}
          </Select>
          <TextField
            className={`${classes.date} ${classes.item}`}
            type='date'
            defaultValue={new Date().toLocaleDateString('fr-CA', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })}
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

Header.propTypes = {
  unitName: PropTypes.string.isRequired,
};

export default Header;
