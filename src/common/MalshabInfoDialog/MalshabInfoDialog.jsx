import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import info from '../../utils/images/malshabInfo/info.svg';
import useStyles from './MalshabInfoDialog.styles';
import CustomDialog from '../CustomDialog/CustomDialog';
import MalshabInfo from '../MalshabInfo/MalshabInfo';
import Attachments from '../Attachments/Attachments';

const MalshabInfoDialog = ({ malshab, open, onClose }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <CustomDialog
      open={open}
      onClose={onClose}
      title={(
        <Typography className={classes.dialogTitle}>
          <img src={info} alt='info' className={classes.infoIcon} />
          {t('title.moreDetails')}
        </Typography>
              )}
      content={(
        <div className={classes.root}>
          {malshab.attachments && (
          <div className={classes.attachments}>
            <Attachments
              malshabId={malshab.identityNumber}
              attachments={malshab.attachments}
            />
          </div>
          )}
          <MalshabInfo malshab={malshab} />
        </div>
        )}
      dividers
      paperClassName={classes.dialogPaper}
    />
  );
};

export default MalshabInfoDialog;
