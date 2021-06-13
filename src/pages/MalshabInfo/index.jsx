import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import MalshabService from '../../services/malshab.service';
import infoIcon from '../../utils/images/malshabInfo/info.svg';
import useStyles from './index.styles';
import CustomBackDrop from '../../common/CustomBackDrop/CustomBackDrop';

const MalshabInfo = ({ id, open, onClose }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [malshab, setMalshab] = useState();

  useEffect(() => {
    setIsLoading(false);
    // TODO: Change
    MalshabService.getMalshabById(0).then((res) => {
      setMalshab(res);
    }).catch(() => {
      toast(t('error.server'));
    }).finally(() => {
      setIsLoading(false);
    });
  }, [id]);

  return (
    <Dialog open={open} onClose={onClose} className={classes.root}>
      <DialogTitle className={classes.dialogTitle}>
        <img src={infoIcon} alt='info icon' />
        <Typography>{t('title.moreDetails')}</Typography>
      </DialogTitle>
      <DialogContent>
        {isLoading
          ? <CustomBackDrop />
          : JSON.stringify(malshab)}
      </DialogContent>
    </Dialog>
  );
};

export default MalshabInfo;
