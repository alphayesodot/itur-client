import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Dialog } from '@material-ui/core';
import MalshabService from '../../services/malshab.service';
import useStyles from './index.styles';

const MalshabInfo = ({ id }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [malshab, setMalshab] = useState();

  useEffect(() => {
    MalshabService.getMalshabById(id).then((res) => {
      setMalshab(res);
    }).catch(() => {
      toast(t('error.server'));
    });
  }, [id]);

  return (
    <Dialog className={classes.root}>{JSON.stringify(malshab)}</Dialog>
  );
};

export default MalshabInfo;
