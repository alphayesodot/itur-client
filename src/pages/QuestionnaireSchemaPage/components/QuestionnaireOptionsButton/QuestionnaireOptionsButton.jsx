import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import useStyles from './QuestionnaireOptionsButton.styles';
import deleteImg from '../../../../utils/images/general/trash.svg';
import editImg from '../../../../utils/images/general/edit-regular.svg';
import OptionsButton from '../../../../common/OptionButton/OptionButton';
import QuestionnaireSchemaService from '../../../../services/questionnaireSchema.service';
import QuestionnaireDialog from '../QuestionnaireDialog/QuestionnaireDialog';

const QuestionnaireOptionsButton = ({
  questionnaire,
  setIdToDelete,
  allNodes,
  setQuestionnaireToEdit }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [duringDeletion, setDuringDeletion] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleDelete = async () => {
    try {
      if (!duringDeletion) {
        setDuringDeletion(true);
        QuestionnaireSchemaService.deleteQuestionnaireById(questionnaire.id).then(async () => {
          setIdToDelete(questionnaire.id);
          setDuringDeletion(false);
        });
      }
    } catch {
      toast(t('error.server'));
    }
  };
  const menuItems = [
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
      onClick: async () => { await handleDelete(); },
      content: (
        <>
          <img className={classes.img} width='15rem' src={deleteImg} alt='see more' />
          {t('actions.delete')}
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
