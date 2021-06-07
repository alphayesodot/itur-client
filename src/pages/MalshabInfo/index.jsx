import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Dialog } from '@material-ui/core';
import MalshabService from '../../services/malshab.service';
import useStyles from './index.styles';
import CustomeBackDrop from '../../common/CustomeBackDrop/CustomeBackDrop';

const MalshabInfo = ({ id }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [malshab, setMalshab] = useState();

  useEffect(() => {
    setIsLoading(false);
    MalshabService.getMalshabById(id).then((res) => {
      setMalshab(res);
    }).catch(() => {
      toast(t('error.server'));
    }).finally(() => {
      setIsLoading(false);
    });
  }, [id]);

  return (
    <Dialog className={classes.root}>
      {isLoading
        ? JSON.stringify(malshab)
        : <CustomeBackDrop />}
    </Dialog>
  );
};

export default MalshabInfo;
