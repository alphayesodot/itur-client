import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, MenuItem, Checkbox } from '@material-ui/core';
import useStyles from './GenericSelect.styles';

/**
 * @param {*} options: array of options for the select.
 *                     (if multiple- [{ id: string, label: string, ...additionalFields }])
 * @param {*} selectedValue: the selected value of the select.
 *                           (if multiple- { id: string, label: string, ...additionalFields })
 * @param {*} setSelectedValue: set state function of the sleected value.
 * @param {*} selectClassName: class name for the select- optional.
 *                             for describing input's width, height, border radius etc.
 * @param {*} checkboxClasses: classes for checkbox- optional.
 *                             { root: rootClassName, checked: checkedClassName }
 * @param {*} isMultiple: is the select multiple choice- optional.
 * @returns a generic select. When multiple, selects an object from an array of objects
 */
const GenericSelect = ({
  options,
  selectedValue,
  setSelectedValue,
  selectClassName,
  checkboxClasses,
  isMultiple,
}) => {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState([]);
  const { t } = useTranslation();
  const menuItemHeight = 48;
  const menuItemPaddingTop = 8;
  const MenuProps = {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    },
    getContentAnchorEl: null,
    PaperProps: {
      style: {
        maxHeight: menuItemHeight * 4.5 + menuItemPaddingTop,
      },
    },
  };

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
    ? selectedValue.map((value) => value.label).join(', ')
    : selectedValue.label
  );

  return (
    <Select
      className={selectClassName}
      MenuProps={MenuProps}
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
      disableUnderline
    >
      {options.length === 0
        ? (
          <MenuItem disabled>
            {t('message.noOptions')}
          </MenuItem>
        )
        : options.map(({ label, id }, optionId) => (
          <MenuItem key={id} value={id}>
            {isMultiple && (
            <Checkbox
              key={id}
              checked={isChecked[optionId]}
              classes={checkboxClasses}
            />
            )}
            {label}
          </MenuItem>
        ))}
    </Select>
  );
};

export default GenericSelect;
