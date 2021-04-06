import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Typography, Select, MenuItem, TextField } from '@material-ui/core';
import useStyles from './header.styles';

const Header = ({ unit }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Typography className={classes.unit}>
        {t('title.unit')}
        :
        {' '}
        <strong>{unit}</strong>
      </Typography>
      <Select
        className={classes.select}
        inputProps={{
          classes: {
            icon: classes.icon,
          },
        }}
        disableUnderline
      >
        {['מסלול', 'מסלולללללל'].map((nodeGroup) => (
          <MenuItem
            className={classes.nodeGroup}
            key={nodeGroup}
            value={nodeGroup}
          >
            {nodeGroup}
          </MenuItem>
        ))}
      </Select>
      <TextField
        className={classes.date}
        type='date'
        defaultValue={new Date().toLocaleDateString('fr-CA', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
};

Header.propTypes = {
  unit: PropTypes.string.isRequired,
};

export default Header;
