import React, { useState, useLayoutEffect as useEffect, useRef } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import ReactPlayer from 'react-player/file';
import interviewerPDF from './pdf/1.pdf';
import interviewerVideo from './pdf/video.mp4';
import useStyles from './index.styles';

const PreparationKit = ({ sidebarRef }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageAmount, setPageAmount] = useState(1);
  const [pageHeight, setPageHeight] = useState(0);
  const canvasRef = useRef(null);

  const classes = useStyles();

  const changePage = (offset) => setPageNumber((previousPageNumber) => previousPageNumber + offset);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setPageNumber(1);
    setPageAmount(numPages);
  };

  useEffect(() => {
    setPageHeight(sidebarRef.current.getBoundingClientRect().height);
  }, [sidebarRef.current?.getBoundingClientRect().height]);

  return (
    <div className={classes.root}>
      <div className={classes.PDFContainer}>
        <Document
          file={interviewerPDF}
          noData={<p>No File Chosen</p>}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNumber}
            height={pageHeight}
            canvasRef={canvasRef}
            className={classes.document}
          />
        </Document>
        <div>
          <p>
            Page
            {' '}
            {pageNumber || (pageAmount ? 1 : '--')}
            {' '}
            of
            {' '}
            {pageAmount || '--'}
          </p>
          <button
            type='button'
            disabled={pageNumber <= 1}
            onClick={() => changePage(-1)}
          >
            Previous
          </button>
          <button
            type='button'
            disabled={pageNumber >= pageAmount}
            onClick={() => changePage(1)}
          >
            Next
          </button>
        </div>
      </div>
      <div className={classes.playerWrapper}>
        <ReactPlayer
          url={interviewerVideo}
          className={classes.player}
          controls
        />
      </div>
    </div>
  );
};

export default PreparationKit;
