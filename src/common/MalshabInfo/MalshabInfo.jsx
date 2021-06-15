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

  return (
    <>
      {isLoading
        ? <CustomBackDrop />
        : (
          <div className={classes.root}>
            {malshab?.attachments && (
            <div className={classes.attachments}>
              <Typography className={classes.attachmentsTitle}>{t('title.attachments')}</Typography>
              <DashboardCard className={classes.attachmentsCard}>
                {malshab.attachments.length ? malshab.attachments.map((attachment) => (
                  <div className={classes.attachment} key={attachment}>
                    <img src={attachmentIcon} alt='icon' className={classes.attachmentIcon} />
                    <Link
                      className={classes.link}
                      component='button'
                      variant='body2'
                      onClick={() => handleOnDownload(attachment)}
                    >
                      {decodeURIComponent(attachment)}
                    </Link>
                  </div>
                )) : <Typography className={classes.message}>{t('message.noAttachments')}</Typography>}
              </DashboardCard>
            </div>
            )}
          </div>
        )}
    </>
  );
};

export default MalshabInfo;
