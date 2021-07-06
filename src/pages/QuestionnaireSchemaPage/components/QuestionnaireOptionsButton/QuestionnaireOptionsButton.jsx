import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './QuestionnaireOptionsButton.styles';
import deleteImg from '../../../../utils/images/general/trash.svg';
import previewImg from '../../../../utils/images/files/eye_black.svg';
import editImg from '../../../../utils/images/general/edit-regular.svg';
import OptionsButton from '../../../../common/OpetionButton/OpetionButton';
import { QuestionnaireSchemaService } from '../../../../services/QuestionnaireSchema.service';
import QuestionnaireDialog from '../QuestionnaireDialog/QuestionnaireDialog';

const QuestionnaireOptionsButton = ({
  questionnaire,
  setIdToDelete,
  allNodes,
  setQuestionnaireToEdit,
  setQuestionnaireToPreview }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [duringDeletion, setDuringDeletion] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleDelete = async () => {
    if (!duringDeletion) {
      setDuringDeletion(true);
      QuestionnaireSchemaService.deleteQuestionnaireById(questionnaire.id).then(async () => {
        setIdToDelete(questionnaire.id);
        setDuringDeletion(false);
      });
    }
  };
  const menuItems = [
    {
      onClick: async () => { await handleDelete(); },
      content: (
        <>
          <img className={classes.img} width='15rem' src={deleteImg} alt='see more' />
          {t('actions.delete')}
        </>
      ),
    },
    {
      onClick: () => {
        setOpenEditDialog(true);
      },
      content: (
        <>
          <img className={classes.img} width='17rem' src={editImg} alt='see more' />
          {t('actions.edit')}
        </>
      ),
    },
    {
      onClick: async () => { setQuestionnaireToPreview({ ...questionnaire }); },
      content: (
        <>
          <img className={classes.img} width='19rem' src={previewImg} alt='see more' />
          {t('actions.preview')}
        </>
      ),
    },
  ];

  const dialog = (
    <QuestionnaireDialog
      open={openEditDialog}
      onClose={() => { setOpenEditDialog(false); }}
      allNodes={allNodes}
      setQuestionnaireToEdit={setQuestionnaireToEdit}
      currentQuestionnaire={questionnaire}
    />
  );

  return (
    <OptionsButton menuItems={menuItems} popUps={[dialog]} />
  );
};

export default QuestionnaireOptionsButton;
