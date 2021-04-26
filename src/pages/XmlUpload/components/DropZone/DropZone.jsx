import axios from 'axios';
import { toast } from 'react-toastify';
import Dropzone from 'react-dropzone';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import cloudImg from '../../utils/images/cloud.png';
import useStyles from './DropZone.styles';
import configApp from '../../../../appConf';

const DropZone = ({ files, setFiles }) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const createErrorNorifications = (fileName, errorsArray) => {
    errorsArray.forEach((e) => {
      // cast error code to t('code')
      const translationCasting = `xmlPage.${(e.code)?.replace(/-([a-z])/g, (g) => g[1].toUpperCase())}`;
      if (i18n.exists(translationCasting)) {
        toast(`${fileName}: ${t(translationCasting)}`);
      } else toast(`${fileName}: ${e.code}`);
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
        const repetitionsArray = updatedFiles.filter((updatedFile) => updatedFile.path === f.path);
        // TODO: funciton that changes the name of the file if existed
        if (repetitionsArray.length > 0) {
          toast('This file name is already in list. Remove it from list or change the name');
        } else {
          updatedFiles = updatedFiles.concat(f);
        }
      });
      setFiles(updatedFiles);

      acceptedFiles.forEach((acceptedFile) => {
        const formData = new FormData();
        formData.append('file', acceptedFile);
        axios
          .post(`${configApp.uri.api}/api/xml-upload`, formData, {
            params: {
              filename: acceptedFile.name,
            },
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
      accept={configApp.xmlUpload.acceptedFileTypes}
      maxSize={configApp.xmlUpload.sizeLimit}
    >
      {({ getRootProps, getInputProps }) => (
        /* eslint-disable react/jsx-props-no-spreading */
        <div {...getRootProps({ className: classes.root })}>
          <input {...getInputProps()} />
          <img alt='drop files' src={cloudImg} className={classes.cloudImg} />
          <p className={classes.explanation}>Drag and Drop to upload files</p>
          <Button className={classes.uploadButton}>{t('xmlPage.uploadButton')}</Button>
          <p className={classes.limitation}>{t('xmlPage.sizeLimitation', { sizeLimit: configApp.xmlUpload.sizeLimit / 1000000 })}</p>
        </div>
      ) }
    </Dropzone>
  );
};

export default DropZone;
