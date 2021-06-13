import { MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './SelectScheduling.styles';

const SelectScheduling = ({ selectedScheduling, setSelectedScheduling, selectOptions }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleOnChange = (event) => {
    setSelectedScheduling(event.target.value);
  };

  return (
    <Select
      className={classes.root}
      varient='filled'
      onChange={handleOnChange}
      value={selectedScheduling}
      disableUnderline
    >
      {selectOptions.length === 1
        ? (
          <MenuItem disabled>
            {t('title.noUsers')}
          </MenuItem>
        )
        : selectOptions.map((selectOption) => (
          <MenuItem key={selectOption.id} value={selectOption.id}>
            {selectOption.name}
          </MenuItem>
        ))}
    </Select>
  );
};

export default SelectScheduling;
