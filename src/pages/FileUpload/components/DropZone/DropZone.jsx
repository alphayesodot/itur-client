import axios from 'axios';
import { toast } from 'react-toastify';
import Dropzone from 'react-dropzone';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import cloudImg from '../../../../utils/images/uploadPage/upload-decoration.svg';
import uploadIcon from '../../../../utils/images/uploadPage/uploading-icon.svg';
import useStyles from './DropZone.styles';
import configApp from '../../../../appConf';

const DropZone = ({ files, setFiles }) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const createErrorNorifications = (fileName, errorsArray) => {
    errorsArray.forEach((e) => {
      // cast error code to t('code')
      const translationCasting = `uploadPage.${(e.code)?.replace(/-([a-z])/g, (g) => g[1].toUpperCase())}`;
      if (i18n.exists(translationCasting)) {
        toast(`${fileName}: ${t(translationCasting)}`);
      } else toast(`${fileName}: ${e.code}`);
    });
  };

  const conversion = 1e6; // = 1,000,000

  const escapeRegex = (string) => string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

  const renameDuplicateFile = (updatedFiles, file) => {
    if (!updatedFiles.some((updatedFile) => updatedFile.path === file.path)) return file;

    const extensionIndex = file.name.lastIndexOf('.');
    const extension = file.name.slice(extensionIndex);
    let fileName = file.name.slice(0, extensionIndex);

    const duplicates = updatedFiles.filter((updatedFile) => new RegExp(
      `^${escapeRegex(fileName)} \\([1-9]([0-9]+)?\\)${escapeRegex(extension)}$`,
    ).test(updatedFile.name));

    if (duplicates.length) {
      // eslint-disable-next-line no-multi-assign
      fileName += ` (${
        duplicates.reduce((acc, current) => {
          const currentNumber = +current.name.slice(current.name.lastIndexOf('(') + 1, current.name.lastIndexOf(')'));

          if (Math.abs(currentNumber - acc) > 1) return Math.min(currentNumber, acc);

          return Math.max(currentNumber, acc);
        }, 0) + 1
      })${extension}`;
    } else if (
      updatedFiles.some(
        (updatedFile) => updatedFile.name === file.name,
      )
    ) {
      // eslint-disable-next-line no-multi-assign
      fileName += ` (1)${extension}`;
    } else {
      fileName = file.name;
    }

    const newFile = new File([file.slice()], fileName, {
      type: file.type,
      lastModified: file.lastModified,
    });

    newFile.path = fileName;
    newFile.progress = file.progress;

    return newFile;
  };

  const handleOnDrop = (acceptedFiles, rejectedFilesObjects) => {
    rejectedFilesObjects.forEach((fileObject) => {
      createErrorNorifications(fileObject.file.name, fileObject.errors);
    });

    if (acceptedFiles.length > 0) {
      let updatedFiles = [...files];
      acceptedFiles.forEach((file) => {
        // eslint-disable-next-line no-param-reassign
        file.progress = 0;

        updatedFiles = updatedFiles.concat(renameDuplicateFile(updatedFiles, file));
      });

      setFiles(updatedFiles);

      updatedFiles.slice(-acceptedFiles.length).forEach((acceptedFile) => {
        const formData = new FormData();
        formData.append('file', acceptedFile);
        axios
          .post(`${configApp.apiUri}/api/data-upload`, formData, {
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
      accept={configApp.fileUpload.acceptedFileTypes}
      maxSize={configApp.fileUpload.sizeLimit}
    >
      {({ getRootProps, getInputProps }) => (
        /* eslint-disable react/jsx-props-no-spreading */
        <div {...getRootProps({ className: classes.root })}>
          <input {...getInputProps()} />
          <img alt='drop files' src={cloudImg} className={classes.cloudImg} />
          <p className={classes.explanation}>Drag and Drop to upload files</p>
          <Button className={classes.uploadButton}>
            {t('uploadPage.uploadButton')}
            <img className={classes.uploadIcon} src={uploadIcon} alt='upload' />
          </Button>
          <p className={classes.limitation}>{t('uploadPage.sizeLimitation', { sizeLimit: configApp.fileUpload.sizeLimit / conversion })}</p>
        </div>
      ) }
    </Dropzone>
  );
};

export default DropZone;
