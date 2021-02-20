import ProgressBox from './components/progress-box/progress-box';
import DropZone from './components/drop-zone/drop-zone';
import Dropzone from 'react-dropzone';

import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import useStyles from './index.styles';

const UploadXmlPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.uploadArea}>
      <Container maxWidth="sm">
        <DropZone></DropZone>

        {/* <Dropzone
          onDrop={() => {}}
          onChange={() => {}}
          accept="image/*,audio/*,video/*"
          inputContent={(files, extra) =>
            extra.reject ? 'Image, audio and video files only' : 'Drag Files'
          }
          styles={{
            dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
            inputLabel: (files, extra) =>
              extra.reject ? { color: 'red' } : {},
          }}
        >
        </Dropzone> */}
        {/* <Dropzone
          className={classes.dropZone}
          onDrop={() => {}}
          // maxSize={}
          multiple={false}
          // accept=""
        >
          Drop here
        </Dropzone> */}
        <ProgressBox progress={0.75}></ProgressBox>
      </Container>
    </div>
  );
};

export default UploadXmlPage;
