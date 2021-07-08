import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import ReactPlayer from 'react-player/file';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useTranslation } from 'react-i18next';
import interviewerPDF from './pdf/1.pdf';
import interviewerVideo from './pdf/video.mp4';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import useStyles from './index.styles';

const PreparationKit = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageAmount, setPageAmount] = useState(1);

  const classes = useStyles();
  const { t } = useTranslation();

  const changePage = (offset) => setPageNumber((previousPageNumber) => previousPageNumber + offset);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setPageNumber(1);
    setPageAmount(numPages);
  };

  return (
    <DashboardCard className={classes.root}>
      <div className={classes.documentContainer}>
        <Document
          file={interviewerPDF}
          noData={<p>No File Chosen</p>}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} className={classes.document} />
        </Document>
        <div className={classes.pageInfo}>
          <IconButton
            type='button'
            disabled={pageNumber >= pageAmount}
            onClick={() => changePage(1)}
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
          <IconButton disabled={pageNumber <= 1} onClick={() => changePage(-1)}>
            <ArrowBackIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.playerWrapper}>
        <ReactPlayer
          url={interviewerVideo}
          className={classes.player}
          controls
        />
      </div>
    </DashboardCard>
  );
};

export default PreparationKit;
