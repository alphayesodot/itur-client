import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import ReactPlayer from 'react-player/lazy';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import useStyles from './index.styles';
import configApp from '../../appConf';

const PreparationKit = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageAmount, setPageAmount] = useState(1);
  const [showControls, setShowControls] = useState(false);

  const classes = useStyles();
  const { t } = useTranslation();

  const changePage = (offset) => setPageNumber((previousPageNumber) => previousPageNumber + offset);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setPageNumber(1);
    setPageAmount(numPages);
    setShowControls(true);
  };

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.documentContainer}>
        {showControls && (
          <div className={classes.pageInfo}>
            <IconButton
              disabled={pageNumber <= 1}
              onClick={() => changePage(-1)}
            >
              <ArrowForwardIcon />
            </IconButton>
            <Typography>
              {t('text.page')}
              {' '}
              {pageNumber}
              {' '}
              {t('text.of')}
              {' '}
              {pageAmount}
            </Typography>
            <IconButton
              disabled={pageNumber >= pageAmount}
              onClick={() => changePage(1)}
            >
              <ArrowBackIcon />
            </IconButton>
          </div>
        )}
        <Document
          file={`${configApp.apiUri}/api/preparation-kit/pdf`}
          noData={<p>No File Chosen</p>}
          loading={<Typography>{t('text.loading')}</Typography>}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} className={classes.document} />
        </Document>
      </div>
      <div className={classes.playerWrapper}>
        <ReactPlayer url={`${configApp.apiUri}/api/preparation-kit/video`} className={classes.player} controls />
      </div>
    </DashboardCard>
  );
};

export default PreparationKit;
