import { useState } from 'react';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
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
  if (!malshab[parameterName]) return undefined;
  if (Array.isArray(malshab[parameterName])) {
    if (malshab[parameterName].length > 1) {
      return (
        <li className={classes.listItem}>
          {translation(`interviewDashboard.malshab.${parameterName}`)}
          {malshab[parameterName].map((parameter) => (
            <span className={`${classes.dataParameter} ${classes.miniParameter}`}>{parameter}</span>
          ))}
        </li>
      );
    }
  }
  return (
    <li className={classes.listItem}>
      {translation(`interviewDashboard.malshab.${getSingle(parameterName)}`)}
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

const getFilenameByKey = (fileKey) => decodeURI(fileKey.split('~')[1]);

const MalshabDetails = ({ malshab }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const openErrorSnackbar = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };

  const displayedMalshab = {
    ...malshab,
    addresses: malshab.addresses?.slice(0, 2),
    languages: malshab.languages?.slice(0, 3).map((language) => language.languageName),
    gender: enumTogender(malshab.gender),
    birthDate: moment(malshab.birthDate.$date).format('DD.MM.YYYY'),
    school: malshab.schoolName,
    major: malshab.majorName,
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
      <AlertSnackbar open={open} text={t('interviewDashboard.malshab.attachmentDownloadErrorMessage')} />
      <div className={`${classes.detailsContainer} ${classes.flex}`}>
        <span className={classes.moreDetails}>{t('interviewDashboard.malshab.malshabDetails')}</span>
        <div>
          <img src='more-details-card.svg' alt='' />
          <Button disableRipple disableFocusRipple className={classes.moreDetailsBtn}>
            {t('interviewDashboard.malshab.moreDetails')}
          </Button>
        </div>
      </div>
      <div className={`${classes.flex} ${classes.malshabDataContainer}`}>
        <div className={`${classes.flex} ${classes.flexOne}`}>
          {[...Array(Math.ceil(displayedMalshabParams.length / 3))].map(() => (
            <div className={classes.detailsRowItem}>
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
        <div className={classes.fileSection}>
          <div className={classes.fileContainer}>
            <div>
              {displayedMalshab.attachments.map((attachment) => (
                <Button
                  disableRipple
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
      </div>
    </div>
  );
};

export default MalshabDetails;
