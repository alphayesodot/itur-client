import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';
import useStyles from './DeletionDialog.styles';
import CustomDialog from '../CustomDialog/CustomDialog';

const DeletionDialog = ({ open, onClose, onDeletion, deletedObjectName }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const content = (
    <div className={classes.content}>
      {`${t('dialogs.deletion')} ${deletedObjectName} ?`}
      <div className={classes.buttonSet}>
        <Button
          className={`${classes.optionButton} ${classes.yes}`}
          onClick={() => { onDeletion(); onClose(); }}
        >
          {t('dialogs.yes')}
        </Button>
        <Button
          className={`${classes.optionButton} ${classes.no}`}
          onClick={onClose}
        >
          {t('dialogs.no')}
        </Button>
      </div>

    </div>
  );
  return (
    (
      <CustomDialog
        open={open}
        paperClassName={classes.root}
        onClose={onClose}
        title=''
        content={content}
      />
    )
  );
};

export default DeletionDialog;
