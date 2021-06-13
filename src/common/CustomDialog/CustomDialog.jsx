import React from 'react';
import { Dialog, DialogTitle, Typography, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './CustomDialog.styles.js';

const CustomDialog = ({ open, onClose, title, content }) => {
  const classes = useStyles();

  return (
    <Dialog
      classes={{
        paper: classes.paper,
      }}
      onClose={() => onClose()}
      open={open}
    >
      <DialogTitle classes={{ root: classes.titleDiv }} disableTypography>
        <Typography className={classes.title}>{title}</Typography>
        <IconButton
          onClick={() => onClose()}
          style={{ backgroundColor: 'transparent' }}
        >
          <CloseIcon fontSize='small' classes={{ root: classes.closeIcon }} />
        </IconButton>
      </DialogTitle>
      <div>
        {content}
      </div>
    </Dialog>
  );
};

export default CustomDialog;
