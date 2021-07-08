import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import useStyles from './MalshabInfo.styles';

const MalshabInfo = ({ malshab }) => {
  const classes = useStyles();
  const { t } = useTranslation();
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
    <div className={classes.root}>
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
        {malshab?.addresses?.length > 0
            && addressFields.map(({ fieldName, type }) => (
              malshab.addresses[0][fieldName] !== undefined
            && getFieldComponent(
              fieldName,
              type,
              malshab.addresses[0][fieldName],
            )))}
      </div>
    </div>
  );
};

export default MalshabInfo;
