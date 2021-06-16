import React from 'react';
import { Dialog, DialogTitle, Typography, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './CustomDialog.styles.js';

/**
 * @param {*} open: is dialog open- boolean variable
 * @param {*} onClose: dialog's closing function
 * @param {*} title: dialog's title's string/component
 * @param {*} content: dialog's content component
 * @returns custom dialog
 */
const CustomDialog = ({ open, onClose, title, content }) => {
  const classes = useStyles();

  return (
    <Dialog
      classes={{
        paper: classes.paper,
      }}
      onClose={onClose}
      open={open}
    >
      <DialogTitle classes={{ root: classes.titleDiv }} disableTypography>
        <Typography className={classes.title}>{title}</Typography>
        <IconButton
          onClick={onClose}
          style={{ backgroundColor: 'transparent' }}
          className={classes.closeButton}
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
