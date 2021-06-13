import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import MalshabService from '../../services/malshab.service';
import useStyles from './index.styles';
import CustomBackDrop from '../CustomBackDrop/CustomBackDrop';

const MalshabInfo = ({ id }) => {
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
    <>
      {isLoading
        ? <CustomBackDrop />
        : JSON.stringify(malshab)}
    </>
  );
};

export default MalshabInfo;
