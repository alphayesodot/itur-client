import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select, MenuItem } from '@material-ui/core';
import useStyles from './GenericSelect.styles';

const GenericSelect = ({
  options,
  selectedValue,
  setSelectedValue,
  selectClassName,
  isMultiple,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleOnChange = (e) => {
    setSelectedValue(options.find((option) => option.id === e.target.value));
  };

  return (
    <Select
      className={selectClassName}
      inputProps={{ classes: { root: classes.select, icon: classes.icon } }}
      onChange={handleOnChange}
      value={selectedValue?.id || ''}
      disableUnderline
    >
      {options.length === 0
        ? (
          <MenuItem disabled>
            {t('message.noOptions')}
          </MenuItem>
        )
        : options.map(({ name, id }) => (
          <MenuItem key={id} value={id}>
            {name}
          </MenuItem>
        ))}
    </Select>
  );
};

export default GenericSelect;
