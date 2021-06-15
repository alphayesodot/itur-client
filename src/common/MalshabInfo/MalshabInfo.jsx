/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Link, Typography } from '@material-ui/core';
import MalshabService from '../../services/malshab.service';
import DashboardCard from '../DashboardCard/DashboardCard';
import CustomBackDrop from '../CustomBackDrop/CustomBackDrop';
import attachmentIcon from '../../utils/images/malshabInfo/attachment.svg';
import useStyles from './MalshabInfo.styles';

const MalshabInfo = ({ id }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [malshab, setMalshab] = useState();
  const fields = [
    { name: 'identityNumber', type: 'text' },
    { name: 'personalNumber', type: 'text' },
    { name: 'firstName', type: 'text' },
    { name: 'lastName', type: 'text' },
    { name: 'gender', type: 'text' },
    { name: 'birthDate', type: 'date' },
    { name: 'medicalProfile', type: 'text' },
    { name: 'kaba', type: 'text' },
    { name: 'dapar', type: 'text' },
    { name: 'birthCountry', type: 'text' },
    { name: 'imigrationDate', type: 'text' },
    { name: 'hasIsraeliCitizenship', type: 'boolean' },
    { name: 'hasAnotherCitizenship', type: 'boolean' },
    { name: 'isBereaved', type: 'boolean' },
    { name: 'schoolId', type: 'text' },
    { name: 'schoolName', type: 'text' },
    { name: 'email', type: 'text' },
  ];
  const addressFields = [
    { name: 'cityId', type: 'text' },
    { name: 'cityName', type: 'text' },
    { name: 'houseNumber', type: 'text' },
    { name: 'street', type: 'text' },
  ];

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

  const handleOnDownload = (attachment) => {
    MalshabService.getAttachmentByKey(id, attachment).then((data) => {
      const url = window.URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', decodeURIComponent(attachment));
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch(() => {
      toast(t('error.server'));
    });
  };

  const getAttachments = () => (
    <div className={classes.attachments}>
      <Typography className={classes.attachmentsTitle}>
        {t('title.attachments')}
      </Typography>
      <DashboardCard className={classes.attachmentsCard}>
        {malshab.attachments.length ? malshab.attachments.map((attachment) => (
          <div className={classes.attachment} key={attachment}>
            <img
              alt='icon'
              src={attachmentIcon}
              className={classes.attachmentIcon}
            />
            <Link
              className={classes.link}
              component='button'
              variant='body2'
              onClick={() => handleOnDownload(attachment)}
            >
              {decodeURIComponent(attachment)}
            </Link>
          </div>
        )) : (
          <Typography className={classes.message}>
            {t('message.noAttachments')}
          </Typography>
        )}
      </DashboardCard>
    </div>
  );

  const getFieldComponent = (name, type, value) => (
    `${t(`malshabInfo.${name}`)} ${value}`
  );

  return (
    <>
      {isLoading
        ? <CustomBackDrop />
        : (
          <div className={classes.root}>
            {malshab?.attachments && getAttachments()}
            <div className={classes.fields}>
              {fields.map(({ name, type }) => (
                malshab?.[name]
                && getFieldComponent(
                  name,
                  type,
                  malshab?.[name],
                )))}
              {addressFields.map(({ name, type }) => (
                malshab?.addresses[0][name]
                && getFieldComponent(
                  name,
                  type,
                  malshab?.addresses[0][name],
                )))}
            </div>
          </div>
        )}
    </>
  );
};

export default MalshabInfo;
