import { ListItemText, Input, FormControl, Select, MenuItem, Checkbox } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import useStyles from './SelectCheckboxItem.styles';

const SelectCheckboxItem = ({
  data,
  checkedValuesIds,
  updateCheckedValuesIds,
  selectId,
  emptyMessage }) => {
  const { t } = useTranslation();
  const classes = useStyles();
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
        width: 250,
      },
    },
  };

  const handleOnChange = (event) => {
    updateCheckedValuesIds(event.target.value);
  };

  return (
    <FormControl classes={{ root: classes.root }}>
      <Select
        classes={{ root: classes.selectInput }}
        id={selectId}
        multiple
        variant='outlined'
        margin='dense'
        value={checkedValuesIds}
        onChange={handleOnChange}
        input={<Input classes={{ root: classes.input }} />}
        MenuProps={MenuProps}
        renderValue={!data.length ? () => emptyMessage : () => t('message.chosen')}
        disabled={!data.length}
        displayEmpty={!data.length}
      >
        {data.map((dataObject) => (
          <MenuItem
            key={dataObject.id}
            value={dataObject.id}
            classes={{ selected: classes.selectedMenuItem }}
          >
            <Checkbox
              classes={{ root: classes.checkbox, checked: classes.checkedCheckbox }}
              checked={checkedValuesIds.includes(dataObject.id)}
            />
            <ListItemText primary={dataObject.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectCheckboxItem;
