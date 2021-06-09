import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem } from '@material-ui/core';
// import FormControl from '@material-ui/core/FormControl';

import useStyles from './CreationDialog.styles';

const CreationDialog = () => { // { onClose, selectedValue, open }
  const classes = useStyles();
  const { t } = useTranslation();
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  // const handleClose = () => {
  //   onClose(selectedValue);
  // };
  // onClose={handleClose} open={open}
  return (
    <Dialog className={classes.root} classes={{ paperScrollPaper: classes.popup }} aria-labelledby='form-dialog-title' open>
      <DialogTitle classes={{ root: classes.title }} id='form-dialog-title' disableTypography>{t('title.newNodeGroup')}</DialogTitle>
      <DialogContent>
        <div className={classes.labeledInput}>
          <span className={classes.label}>{t('formTitle.name')}</span>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            type='text'
            variant='outlined'
            fullWidth
          />
        </div>
        <div className={classes.labeledInput}>
          <span>{t('title.unit')}</span>
          <TextField
            id='standard-select-currency'
            select
            value='x'
            variant='outlined'
            onChange={() => { console.log('dialogChange'); }}
            fullWidth
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </DialogContent>
      <DialogActions classes={{ spacing: classes.actions }}>
        <Button className={classes.saveButton} onClick={() => {}} color='primary'>
          {t('button.saveNodeGroup')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// CreationDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

export default CreationDialog;
