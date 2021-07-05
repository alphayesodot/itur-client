import React from 'react';
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './SelectBox.styles';

const SelectBox = ({
  className,
  label,
  values,
  selectedValue,
  setSelectedValue,
  selectedValues,
  setSelectedValues,
  hasEmptyValue = true,
  multiSelect = false,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleChange = (event) => (
    multiSelect ? setSelectedValues(event.target.value) : setSelectedValue(event.target.value)
  );

  return (
    <FormControl variant='outlined' size='small'>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        className={`${className} ${classes.root}`}
        value={multiSelect ? selectedValues : selectedValue}
        multiple={multiSelect}
        onChange={handleChange}
        label={label}
        renderValue={(selected) => (multiSelect ? selected.join(', ') : selected)}
      >
        {values.map((value) => (
          <MenuItem key={value} value={value}>
            {multiSelect && <Checkbox checked={selectedValues.includes(value)} />}
            {value}
          </MenuItem>
        ))}
        {hasEmptyValue && (
        <MenuItem value=''>
          <em>{t('unitControlPage.noChoice')}</em>
        </MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default SelectBox;
