import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { toast } from 'react-toastify';
import NodeGroupService from '../../../../services/nodeGroup.service';
import useStyles from './CreationDialog.styles';

const CreationDialog = ({ open, onClose, UpdateAllNodeGroupList }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [nameValue, setNameValue] = useState('');
  const onSubmit = () => {
    NodeGroupService.createNodeGroup(nameValue).then(async (res, err) => {
      if (!err) {
        onClose();
        await UpdateAllNodeGroupList();
      }
    }).catch((error) => {
      toast(error.massage);
    });
  };
  // const currencies = [
  //   {
  //     value: 'USD',
  //     label: '$',
  //   },
  //   {
  //     value: 'EUR',
  //     label: '€',
  //   },
  //   {
  //     value: 'BTC',
  //     label: '฿',
  //   },
  //   {
  //     value: 'JPY',
  //     label: '¥',
  //   },
  // ];

  return (
    <Dialog onClose={onClose} className={classes.root} classes={{ paperScrollPaper: classes.popup }} aria-labelledby='form-dialog-title' open={open}>
      <DialogTitle classes={{ root: classes.title }} id='form-dialog-title' disableTypography>
        {t('title.newNodeGroup')}
        <IconButton onClick={onClose} style={{ backgroundColor: 'transparent' }}>
          <CloseIcon fontSize='small' classes={{ root: classes.closeIcon }} />
        </IconButton>
      </DialogTitle>
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
            value={nameValue}
            onChange={(e) => { setNameValue(e.target.value); }}
          />
        </div>
        {/* <div className={classes.labeledInput}>
          <span>{t('title.unit')}</span>
          <TextField
            id='standard-select-currency'
            select
            value='x'
            variant='outlined'
            onChange={() => { }}
            fullWidth
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div> */}
      </DialogContent>
      <DialogActions classes={{ spacing: classes.actions }}>
        <Button className={classes.saveButton} onClick={onSubmit}>
          {t('button.saveNodeGroup')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreationDialog;
