import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import shortid from 'shortid';
import moment from 'moment';
import useStyles from './MalshabDetails.styles';
import AttachmentService from '../../../../../services/attachment.service';
import AlertSnackbar from './ErrorSnackbar';

const enumTogender = (e) => (e === 1 ? 'זכר' : 'נקבה');

const singleDictionary = {
  addresses: 'address',
  languages: 'language',
};

const getSingle = (str) => singleDictionary[str] || str;

const getDataParameterListItem = (malshab, parameterName, classes, translation) => {
  if (!malshab || !malshab[parameterName]) return undefined;
  if (Array.isArray(malshab[parameterName])) {
    if (malshab[parameterName].length > 1) {
      return (
        <li key={malshab[parameterName].length} className={classes.listItem}>
          {translation(`malshabInfo.${parameterName}`)}
          {malshab[parameterName].map((parameter) => (
            <span key={parameter} className={`${classes.dataParameter} ${classes.miniParameter}`}>{parameter}</span>
          ))}
        </li>
      );
    }
    return (
      <li key={malshab[parameterName]} className={classes.listItem}>
        {translation(`malshabInfo.${getSingle(parameterName)}`)}
        <span className={classes.dataParameter}>{malshab[parameterName]}</span>
      </li>
    );
  }
  return (
    <li key={malshab[parameterName]} className={classes.listItem}>
      {translation(`malshabInfo.${getSingle(parameterName)}`)}
      <span className={classes.dataParameter}>{malshab[parameterName]}</span>
    </li>
  );
};

const downloadAttachment = (identityNumber, fileKey, fileName, errorFunction) => {
  AttachmentService.getMalshabAttachment(identityNumber, fileKey)
    .then((file) => {
      const url = window.URL.createObjectURL(new Blob([file]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
    })
    .catch(errorFunction);
};

const getCityName = (arr) => arr.map((cityObj) => cityObj.cityName);

const getFilenameByKey = (fileKey) => decodeURI(fileKey.split('~')[1] || fileKey);

const MalshabDetails = ({ malshab }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [displayedMalshab, setDisplayedMalshab] = useState();

  useEffect(() => {
    setDisplayedMalshab({
      ...malshab,
      addresses: getCityName(malshab.addresses)?.slice(0, 2),
      languages: malshab.languages?.slice(0, 3).map((language) => language.languageName),
      gender: enumTogender(malshab.gender),
      birthDate: moment(malshab.birthDate).format('DD.MM.YYYY'),
      school: malshab.schoolName,
      major: malshab.majorName,
    });
  }, []);

  const openErrorSnackbar = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };

  const displayedMalshabParams = [
    'firstName',
    'lastName',
    'identityNumber',
    'gender',
    'school',
    'birthCountry',
    'dapar',
    'kaba',
    'birthDate',
    'major',
    'addresses',
    'languages',
  ];

  return (
    <div className={classes.root}>
      <AlertSnackbar open={open} text={t('interviewDashboard.attachmentDownloadErrorMessage')} />
      <div className={`${classes.detailsContainer} ${classes.flex}`}>
        <div>
          <img src='more-details-card.svg' alt='' />
          <Button disableRipple disableFocusRipple className={classes.moreDetailsBtn}>
            {t('malshabInfo.moreDetails')}
          </Button>
        </div>
        <span className={classes.moreDetails}>{t('malshabInfo.malshabDetails')}</span>
      </div>
      <div className={`${classes.flex} ${classes.malshabDataContainer}`}>
        <div className={classes.fileSection}>
          <div className={classes.fileContainer}>
            <div>
              {displayedMalshab?.attachments && displayedMalshab.attachments.map((attachment) => (
                <Button
                  disableRipple
                  key={shortid.generate()}
                  disableFocusRipple
                  className={classes.relevantFiles}
                  onClick={
                    () => downloadAttachment(
                      displayedMalshab.identityNumber,
                      attachment,
                      getFilenameByKey(attachment),
                      () => openErrorSnackbar(),
                    )
                  }
                >
                  <img src='relevant-documents.svg' alt='' className={classes.fileImg} />
                  {getFilenameByKey(attachment)}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className={`${classes.flex} ${classes.flexOne} ${classes.malshabParametersContainer}`}>
          {[...Array(Math.ceil(displayedMalshabParams.length / 3))].map(() => (
            <div key={shortid.generate()} className={classes.detailsRowItem}>
              <ul className={classes.ul}>
                {
                  displayedMalshabParams
                    .splice(0, 3)
                    .map((param) => getDataParameterListItem(displayedMalshab, param, classes, t))
                }
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MalshabDetails;
