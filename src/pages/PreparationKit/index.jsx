import React, { useState, useLayoutEffect, useRef } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import samplePDF from './pdf/1.pdf';
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

  useLayoutEffect(() => {
    setPageHeight(sidebarRef.current.getBoundingClientRect().height);

    if (canvasRef.current) canvasRef.current.style.borderRadius = '15px';
  });

  return (
    <div className={classes.root}>
      <Document
        file={samplePDF}
        noData={<p>No File Chosen</p>}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} height={pageHeight} canvasRef={canvasRef} />
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
  );
};

export default PreparationKit;
