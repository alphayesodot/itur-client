import React from 'react';
import { Dialog, DialogTitle, Typography, IconButton, DialogContent } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './CustomDialog.styles.js';

/**
 * @param {*} open: is dialog open- boolean variable
 * @param {*} onClose: dialog's closing function
 * @param {*} title: dialog's title's string/component
 * @param {*} content: dialog's content component
 *                     (add `flex: 1` on content's root for perfect alignment)
 * @param {*} dividers: optional, are there dividers- boolean variable (false by default)
 * @param {*} paperClassName: optional, additional paper's class name defined by makestyles
 *                           (good for defining paper's width and height)
 * @returns custom dialog
 */
const CustomDialog = ({ open, onClose, title, content, dividers, paperClassName }) => {
  const classes = useStyles();

  return (
    <Dialog
      classes={{
        paper: `${classes.paper} ${paperClassName}`,
      }}
      onClose={() => onClose()}
      open={open}
    >
      <DialogTitle classes={{ root: classes.titleDiv }} disableTypography>
        <Typography component='span' className={classes.title}>{title}</Typography>
        <IconButton
          onClick={() => onClose()}
          style={{ backgroundColor: 'transparent' }}
          className={classes.closeButton}
        >
          <CloseIcon fontSize='small' classes={{ root: classes.closeIcon }} />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers={dividers} classes={{ root: classes.content }}>
        {content}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
