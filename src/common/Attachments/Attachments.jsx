/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Link, Typography, IconButton, Tooltip } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import MalshabService from '../../services/malshab.service';
import DashboardCard from '../DashboardCard/DashboardCard';
import attachmentIcon from '../../utils/images/malshabInfo/attachment.svg';
import config from '../../appConf';
import useStyles from './Attachments.styles';

const Attachments = ({ malshabId, attachments, canUpload, rootClassName }) => {
  const classes = useStyles();
  const [showedAttachments, setShowedAttachments] = useState(attachments);
  const { t } = useTranslation();

  useEffect(() => {
    setShowedAttachments(attachments);
  }, [attachments]);

  const handleOnUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      MalshabService.uploadAttachment(malshabId, file).then(({ fileKey }) => {
        setShowedAttachments((prevValue) => [...prevValue, fileKey]);
      }).catch(() => {
        toast(t('error.server'));
      });
    }
  };

  const handleOnDownload = (attachment) => {
    MalshabService.getAttachmentByKey(malshabId, attachment).then((data) => {
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
    <div className={rootClassName}>
      <Typography className={classes.sectionTitle}>
        {t('title.attachments')}
        {canUpload && (
          <Tooltip title={t('toolTip.uploadAttachment')}>
            <IconButton
              variant='contained'
              component='label'
              size='small'
              className={classes.iconButton}
            >
              <Add />
              <input
                accept={config.attachments.acceptedFileTypes}
                type='file'
                hidden
                multiple
                onChange={(e) => handleOnUpload(e)}
              />
            </IconButton>
          </Tooltip>
        )}
      </Typography>
      <DashboardCard className={classes.attachmentsCard}>
        {showedAttachments.length ? showedAttachments.map((attachment) => (
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
};

export default Attachments;
