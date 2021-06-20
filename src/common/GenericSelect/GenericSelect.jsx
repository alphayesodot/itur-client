import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, MenuItem, Checkbox } from '@material-ui/core';
import useStyles from './GenericSelect.styles';

const GenericSelect = ({
  options,
  selectedValue,
  setSelectedValue,
  selectClassName,
  isMultiple,
}) => {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    setIsChecked(options.slice().fill(false));
  }, [options]);

  useEffect(() => {
    if (isMultiple) {
      setIsChecked((prevValue) => prevValue.map((value, i) => (
        selectedValue.some(({ id }) => id === options[i].id)
      )));
    }
  }, [selectedValue]);

  const handleOnChange = (e) => {
    if (isMultiple) {
      setSelectedValue(options.filter(({ id }) => e.target.value.includes(id)));
    } else {
      setSelectedValue(options.find((option) => option.id === e.target.value));
    }
  };

  const getValue = () => (isMultiple
    ? selectedValue.map(({ id }) => id)
    : selectedValue.id
  );

  const getRenderValue = () => (isMultiple
    ? selectedValue.map((value) => value.name).join(', ')
    : selectedValue.name
  );

  return (
    <Select
      className={selectClassName}
      inputProps={{
        classes: {
          root: classes.select,
          icon: classes.icon,
        },
        multiple: isMultiple,
      }}
      renderValue={getRenderValue}
      onChange={handleOnChange}
      value={getValue() || ''}
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
        getContentAnchorEl: null,
      }}
      disableUnderline
    >
      {options.length === 0
        ? (
          <MenuItem disabled>
            {t('message.noOptions')}
          </MenuItem>
        )
        : options.map(({ name, id }, optionId) => (
          <MenuItem key={id} value={id}>
            {isMultiple && <Checkbox key={id} checked={isChecked[optionId]} />}
            {name}
          </MenuItem>
        ))}
    </Select>
  );
};

export default GenericSelect;
