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
    { fieldName: 'identityNumber', type: 'text' },
    { fieldName: 'personalNumber', type: 'text' },
    { fieldName: 'firstName', type: 'text' },
    { fieldName: 'lastName', type: 'text' },
    { fieldName: 'gender', type: 'gender' },
    { fieldName: 'birthDate', type: 'date' },
    { fieldName: 'medicalProfile', type: 'text' },
    { fieldName: 'kaba', type: 'text' },
    { fieldName: 'dapar', type: 'text' },
    { fieldName: 'birthCountry', type: 'text' },
    { fieldName: 'imigrationDate', type: 'date' },
    { fieldName: 'hasIsraeliCitizenship', type: 'boolean' },
    { fieldName: 'hasAnotherCitizenship', type: 'boolean' },
    { fieldName: 'isBereaved', type: 'boolean' },
    { fieldName: 'schoolId', type: 'text' },
    { fieldName: 'schoolName', type: 'text' },
    { fieldName: 'email', type: 'text' },
  ];
  const addressFields = [
    { fieldName: 'cityId', type: 'text' },
    { fieldName: 'cityName', type: 'text' },
    { fieldName: 'houseNumber', type: 'text' },
    { fieldName: 'street', type: 'text' },
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
    <div className={classes.attachmentsSection}>
      <Typography className={classes.sectionTitle}>
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

  const getFormattedValue = (type, value) => {
    switch (type) {
      case 'text':
        return value.toString();
      case 'boolean':
        return value ? t('malshabInfo.true') : t('malshabInfo.false');
      case 'date':
        return new Date(value).toLocaleDateString('de-DE', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        });
      case 'gender':
        return value === 1 ? t('malshabInfo.male') : t('malshabInfo.female');
      default:
    }
  };

  const getFieldComponent = (fieldName, type, value) => (
    <div className={classes.field} key={fieldName}>
      <Typography className={classes.fieldTitle}>
        {t(`malshabInfo.${fieldName}`)}
      </Typography>
      <Typography className={classes.fieldValue}>
        {getFormattedValue(type, value)}
      </Typography>
    </div>
  );

  return (
    <>
      {isLoading
        ? <CustomBackDrop />
        : (
          <div className={classes.root}>
            {malshab?.attachments && getAttachments()}
            <div className={classes.fieldsSection}>
              <Typography className={classes.sectionTitle}>
                {t('title.generalInfo')}
              </Typography>
              <div className={classes.fieldsDiv}>
                {fields.map(({ fieldName, type }) => (
                  malshab?.[fieldName] !== undefined
                && getFieldComponent(
                  fieldName,
                  type,
                  malshab?.[fieldName],
                )))}
                {malshab?.addresses?.length
                && addressFields.map(({ fieldName, type }) => (
                  malshab.addresses[0][fieldName] !== undefined
                && getFieldComponent(
                  fieldName,
                  type,
                  malshab.addresses[0][fieldName],
                )))}
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default MalshabInfo;
