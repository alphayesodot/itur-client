import axios from 'axios';
import { toast } from 'react-toastify';
import Dropzone from 'react-dropzone';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import cloudImg from '../../images/cloud.png';
import useStyles from './DropZone.styles';
import configPage from '../../config';
import configApp from '../../../../appConf';

const DropZone = (props) => {
  const { files, setFiles } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  const axiosInstance = axios.create({
    baseURL: `${configApp.uri.api}/upload_file`,
  });

  const createErrorNorifications = (fileName, errorsArray) => {
    errorsArray.forEach((e) => {
      toast(`${fileName}: ${e.code}`);
    });
  };

  const handleOnDrop = (acceptedFiles, rejectedFilesObjects) => {
    rejectedFilesObjects.forEach((fileObject) => {
      createErrorNorifications(fileObject.file.name, fileObject.errors);
    });

    if (acceptedFiles.length > 0) {
      let updatedFiles = [...files];
      acceptedFiles.forEach((f) => {
        // eslint-disable-next-line no-param-reassign
        f.progress = 0;
        updatedFiles = updatedFiles.concat(f);
      });
      setFiles(updatedFiles);

      acceptedFiles.forEach((acceptedFile) => {
        const formData = new FormData();
        formData.append('file', acceptedFile);
        axiosInstance
          .post(`${configApp.uri.api}/upload_file`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (data) => {
              const fileIndex = updatedFiles.findIndex((f) => f.path === acceptedFile.path);
              updatedFiles[fileIndex].progress = Math.round((100 * data.loaded) / data.total);
              setFiles([...updatedFiles]);
            },
          })
          .catch((error) => {
            setFiles([...updatedFiles.filter((f) => f.path !== acceptedFile.path)]);
            toast(`${error}`);
          });
      });
    }
  };

  return (
    <Dropzone
      onDrop={handleOnDrop}
      acceptedFiles={configPage.dropzone.acceptedFileTypes}
      maxSize={configPage.dropzone.maxSize}
    >
      {({ getRootProps, getInputProps }) => {
        const rootProps = getRootProps({ className: classes.root });
        const inputProps = getInputProps();
        return (
          <div {...{ rootProps }}>
            <input {...{ inputProps }} />
            <img alt='drop files' src={cloudImg} className={classes.cloudImg} />
            <p className={classes.explanation}>Drag and Drop to pload files</p>
            <Button className={classes.uploadButton}>{t('xmlPage.upload_button')}</Button>
            <p className={classes.limitation}>{t('xmlPage.size_limitation')}</p>
          </div>
        );
      }}
    </Dropzone>
  );
};

export default DropZone;
