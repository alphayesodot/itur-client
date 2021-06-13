import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './SelectBox.styles';

const SelectBox = ({ style, label, values, selectedValue, setSelectedValue,
  hasEmptyValue = true }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl variant='outlined' className={classes.formControl}>
      <InputLabel>{label}</InputLabel>
      <Select
        style={style}
        className={classes.root}
        value={selectedValue}
        onChange={handleChange}
        label={label}
      >
        {values.map((value) => (
          <MenuItem key={value} value={value}>{value}</MenuItem>
        ))}
        <MenuItem value=''>
          <em>{t('unitControlPage.noChoice')}</em>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectBox;
