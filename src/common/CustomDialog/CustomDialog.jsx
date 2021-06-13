import React from 'react';
import { Button, Dialog, Typography } from '@material-ui/core';
import useStyles from './CustomDialog.styles.js';
import closeImg from '../../utils/images/userManagement/add-icon.svg';

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
      <div className={classes.titleDiv}>
        <Typography className={classes.title}>{title}</Typography>
        <Button
          className={classes.closeButton}
          onClose={() => onClose()}
          disableRipple
        >
          <img src={closeImg} alt='close' className={classes.closeImg} />
        </Button>
      </div>
      <div>
        {content}
      </div>
    </Dialog>
  );
};

export default CustomDialog;
