import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './QuestionnaireOptionsButton.styles';
import deleteImg from '../../../../utils/images/general/trash.svg';
import editImg from '../../../../utils/images/general/edit-regular.svg';
import OptionsButton from '../../../../common/OpetionButton/OpetionButton';
import QuestionnaireService from '../../../../services/Questionnaire.service';

const QuestionnaireOptionsButton = ({ questionnaire, setIdToDelete }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [duringDeletion, setDuringDeletion] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const handleDelete = async () => {
    if (!duringDeletion) {
      setDuringDeletion(true);
      QuestionnaireService.deleteQuestionnaireById(questionnaire.id).then(async () => {
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
  ];

  return (
    <OptionsButton menuItems={menuItems} popUps={[]} />
  );
};

export default QuestionnaireOptionsButton;
