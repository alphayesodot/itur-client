/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */

import axios from 'axios';
import { toast } from 'react-toastify';
import Dropzone from 'react-dropzone';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import cloudImg from '../../utils/images/cloud.png';
import useStyles from './DropZone.styles';
import configApp from '../../../../appConf';

const COPY_SUFFIX = ' - Copy';

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

  const escapeRegex = (string) => string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

  const fixDuplicateFile = (updatedFiles, file) => {
    if (!updatedFiles.some((updatedFile) => updatedFile.path === file.path)) return file;

    const extensionIndex = file.name.lastIndexOf('.');
    const extension = file.name.slice(extensionIndex);
    const fileName = file.name.slice(0, extensionIndex);
    const newFile = {};
    let duplicates = [];

    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in file) newFile[key] = file[key];

    const duplicates = updatedFiles.filter((updatedFile) => new RegExp(
      `^${escapeRegex(fileName)}${COPY_SUFFIX} \\([1-9]([0-9]+)?\\)\\${escapeRegex(extension)}$`,
    ).test(updatedFile.name));

    if (duplicates.length) {
      newFile.name = newFile.path = `${fileName}${COPY_SUFFIX} (${
        duplicates.reduce(
          (acc, current) => Math.max(
            +current.name.slice(
              current.name.lastIndexOf('(') + 1,
              current.name.lastIndexOf(')'),
            ),
            acc,
          ),
          0,
        ) + 1
      })${extension}`;
    } else if (
      updatedFiles.some(
        (updatedFile) => updatedFile.name === fileName + COPY_SUFFIX + extension,
      )
    ) {
      newFile.name = newFile.path = `${fileName}${COPY_SUFFIX} (2)${extension}`;
    } else {
      newFile.name = newFile.path = fileName + COPY_SUFFIX + extension;
    }

    return newFile;
  }

  const handleOnDrop = (acceptedFiles, rejectedFilesObjects) => {
    rejectedFilesObjects.forEach((fileObject) => {
      createErrorNorifications(fileObject.file.name, fileObject.errors);
    });

    if (acceptedFiles.length > 0) {
      let updatedFiles = [...files];
      acceptedFiles.forEach((file) => {
        file.progress = 0;

        updatedFiles = updatedFiles.concat(fixDuplicateFile(updatedFiles, file));
      });

      setFiles(updatedFiles);

      updatedFiles.slice(-acceptedFiles.length).forEach((acceptedFile) => {
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
