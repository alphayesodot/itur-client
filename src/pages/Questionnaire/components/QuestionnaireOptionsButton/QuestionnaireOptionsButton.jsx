import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './QuestionnaireOptionsButton.styles';
import deleteImg from '../../../../utils/images/general/trash.svg';
import editImg from '../../../../utils/images/general/edit-regular.svg';
import OptionsButton from '../../../../common/OpetionButton/OpetionButton';
import QuestionnaireService from '../../../../services/Questionnaire.service';

const QuestionnaireOptionsButton = ({
  questionnaire,
  deleteQuestionnaireFromState,
  x,
  allQuestionnaireRows,
  questionnaireRowsToShow,
  setAllQuestionnaireRows,
  setQuestionnaireToShow }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [duringDeletion, setDuringDeletion] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  // const deleteQuestionnaireFromState = (id) => {
  //   console.log('all:', [...allQuestionnaireRows]);
  //   console.log('show:', [...questionnaireRowsToShow]);
  //   const allIdx = [...allQuestionnaireRows].findIndex(
  //     (q) => q.id === id,
  //   );
  //   const showIdx = [...questionnaireRowsToShow].findIndex(
  //     (q) => q.id === id,
  //   );
  //   if (allIdx > -1) {
  //     const tmpCopy = [...allQuestionnaireRows];
  //     tmpCopy.splice(allIdx, 1);
  //     setAllQuestionnaireRows([...tmpCopy]);
  //   }
  //   if (showIdx > -1) {
  //     const tmpCopy = [...questionnaireRowsToShow];
  //     tmpCopy.splice(showIdx, 1);
  //     console.log(tmpCopy);
  //     setQuestionnaireToShow([...tmpCopy]);
  //   }
  // };

  const handleDelete = async () => {
    console.log('button-x', x);
    if (!duringDeletion) {
      setDuringDeletion(true);
      // QuestionnaireService.deleteQuestionnaireById(questionnaire.id).then(async () => {
      deleteQuestionnaireFromState(questionnaire.id);
      // updateAllNodeGroupList();
      console.log('delete');
      setDuringDeletion(false);
      // });
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
