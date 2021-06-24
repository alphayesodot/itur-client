/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Link, Typography, IconButton, Tooltip } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import MalshabService from '../../services/malshab.service';
import DashboardCard from '../DashboardCard/DashboardCard';
import attachmentIcon from '../../utils/images/malshabInfo/attachment.svg';
import useStyles from './Attachments.styles';

const Attachments = ({ malshabId, attachments, canUpload }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleOnUpload = () => {

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
    <div className={classes.root}>
      <Typography className={classes.sectionTitle}>
        {t('title.attachments')}
        {canUpload && (
          <Tooltip title={t('toolTip.uploadAttachment')}>
            <IconButton
              size='small'
              className={classes.iconButton}
              onClick={handleOnUpload}
            >
              <Add />
            </IconButton>
          </Tooltip>
        )}
      </Typography>
      <DashboardCard className={classes.attachmentsCard}>
        {attachments.length ? attachments.map((attachment) => (
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
