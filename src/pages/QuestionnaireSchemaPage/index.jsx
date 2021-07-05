import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { toast } from 'react-toastify';
import Moment from 'moment';
import useStyles from './index.styles';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import Header from './components/Header/Header';
import DataTable from '../../common/DataTable/DataTable';
import { QuestionnaireSchemaService } from '../../services/QuestionnaireSchema.service';
import { UserService } from '../../services/user.service';
import QuestionnaireOptionsButton from './components/QuestionnaireOptionsButton/QuestionnaireOptionsButton';
import QuestionnaireDialog from './components/QuestionnaireDialog/QuestionnaireDialog';
import NodeService from '../../services/node.service';
import UserStoreInstance from '../../stores/User.store';

const QuestionnaireSchemaPage = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const userName = UserStoreInstance.userProfile.name;
  const [allNodes, setAllNodes] = useState([]);
  const [allQuestionnaireRows, setAllQuestionnaireRows] = useState([]);
  const [questionnaireRowsToShow, setQuestionnaireToShow] = useState([]);
  const [idToDelete, setIdToDelete] = useState(0);
  const [questionnaireToAdd, setQuestionnaireToAdd] = useState({});
  const [questionnaireToEdit, setQuestionnaireToEdit] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const colNames = [t('tableColumns.questionnaireName'), t('tableColumns.intended'), t('tableColumns.writer'), t('tableColumns.changeDate'), t('tableColumns.questionsNumber'), ''];

  const handeOnCloseDialog = () => {
    setOpenDialog(false);
  };
  const getIntendedRole = (rolesArr) => {
    if (!rolesArr.length) {
      return '-';
    } if (rolesArr.includes('MALSHAB') && rolesArr.length === 1) {
      return t('roles.malshab');
    } if (!rolesArr.includes('MALSHAB')) {
      return t('permissions.appreciateor');
    }
    return t('permissions.malshabAppreciateor');
  };

  /**
   * import all questionnaires - at the beeging only
   */
  useEffect(async () => {
    try {
      const allNodesTmp = await NodeService.getNodes();
      setAllNodes(allNodesTmp);
      const allQuestionnaires = await QuestionnaireSchemaService.getQuestionnaires();
      const promises = allQuestionnaires.map(async (questionnaire) => {
        const questionnaireWriter = await UserService.getUserById(questionnaire.createdBy);
        const intendedRole = getIntendedRole(questionnaire.targetRoles);
        return {
          id: questionnaire.id,
          data: [
            questionnaire.name,
            intendedRole,
            questionnaireWriter.name,
            Moment(new Date(questionnaire.updatedAt)).format('DD/MM/YYYY'),
            questionnaire.questions.length,
            <QuestionnaireOptionsButton
              questionnaire={questionnaire}
              setIdToDelete={setIdToDelete}
              allNodes={allNodesTmp}
              setQuestionnaireToEdit={setQuestionnaireToEdit}
            />,
          ],
        };
      });
      const questionnaireRows = await Promise.all(promises);
      setAllQuestionnaireRows(questionnaireRows);
      setQuestionnaireToShow(questionnaireRows);
    } catch {
      toast(t('error.server'));
    }
  }, []);

  /**
   * delete questionnaire from states
   */
  useEffect(() => {
    const allIdx = [...allQuestionnaireRows].findIndex(
      (q) => q.id === idToDelete,
    );
    const showIdx = [...questionnaireRowsToShow].findIndex(
      (q) => q.id === idToDelete,
    );
    if (allIdx > -1) {
      const tmpCopy = [...allQuestionnaireRows];
      tmpCopy.splice(allIdx, 1);
      setAllQuestionnaireRows([...tmpCopy]);
    }
    if (showIdx > -1) {
      const tmpCopy = [...questionnaireRowsToShow];
      tmpCopy.splice(showIdx, 1);
      setQuestionnaireToShow([...tmpCopy]);
    }
  }, [idToDelete]);

  // add questionnaire to state
  useEffect(() => {
    if (Object.keys(questionnaireToAdd).length) {
      const intendedRole = getIntendedRole(questionnaireToAdd.targetRoles);
      const questionnaireRow = {
        id: questionnaireToAdd.id,
        data: [
          questionnaireToAdd.name,
          intendedRole,
          userName,
          Moment(new Date(questionnaireToAdd.updatedAt)).format('DD/MM/YYYY'),
          questionnaireToAdd.questions.length,
          <QuestionnaireOptionsButton
            questionnaire={questionnaireToAdd}
            setIdToDelete={setIdToDelete}
            allNodes={allNodes}
            setQuestionnaireToEdit={setQuestionnaireToEdit}
          />,
        ],
      };
      setAllQuestionnaireRows([...allQuestionnaireRows, questionnaireRow]);
      setQuestionnaireToShow([...allQuestionnaireRows, questionnaireRow]);
    }
  }, [questionnaireToAdd]);

  useEffect(() => {
    if (Object.keys(questionnaireToEdit).length) {
      const questionniareRowIdx = allQuestionnaireRows.findIndex(
        (qRow) => qRow.id === questionnaireToEdit.id,
      );
      const questionniareRowShowIdx = questionnaireRowsToShow.findIndex(
        (qShowRow) => qShowRow.id === questionnaireToEdit.id,
      );
      const tmpAllQuestionnaireRows = [...allQuestionnaireRows];
      const tmpQuestionnaireRowsShow = [...questionnaireRowsToShow];
      const intendedRole = getIntendedRole(questionnaireToEdit.targetRoles);
      if (questionniareRowIdx > -1) {
        const creator = tmpAllQuestionnaireRows[questionniareRowIdx]?.data[2];
        tmpAllQuestionnaireRows[questionniareRowIdx] = {
          id: questionnaireToEdit.id,
          data: [
            questionnaireToEdit.name,
            intendedRole,
            creator,
            Moment(new Date(questionnaireToEdit.updatedAt)).format('DD/MM/YYYY'),
            questionnaireToEdit.questions.length,
            <QuestionnaireOptionsButton
              questionnaire={questionnaireToEdit}
              setIdToDelete={setIdToDelete}
              allNodes={allNodes}
              setQuestionnaireToEdit={setQuestionnaireToEdit}
            />,
          ],
        };
        if (questionniareRowShowIdx > -1) {
          tmpQuestionnaireRowsShow[questionniareRowShowIdx] = tmpAllQuestionnaireRows[
            questionniareRowIdx];
        }
      }

      setAllQuestionnaireRows([...tmpAllQuestionnaireRows]);
      setQuestionnaireToShow([...tmpQuestionnaireRowsShow]);
    }
  }, [questionnaireToEdit]);

  return (
    <div className={classes.root}>
      <Header
        allQuestionnaireRows={allQuestionnaireRows}
        setQuestionnaireToShow={setQuestionnaireToShow}
        openDialog={() => { setOpenDialog(true); }}
      />
      <DashboardCard className={classes.dashbord}>
        <Typography className={classes.content}>
          <strong className={classes.title}>{t('title.questionnaires')}</strong>
          {' '}
          <span className={classes.countTitle}>{`(${[...questionnaireRowsToShow].length})`}</span>
        </Typography>
        {questionnaireRowsToShow.length
          ? (
            <div className={`${classes.tableContainer}`}>
              <DataTable rowsData={questionnaireRowsToShow} columnNames={colNames} />
            </div>
          )
          : (
            <div className={` ${classes.viewContainer} ${classes.emptyTable}`}>
              {' '}
              {t('title.noQuestionnaires')}
            </div>
          )}
        <QuestionnaireDialog
          open={openDialog}
          onClose={handeOnCloseDialog}
          allNodes={allNodes}
          setQuestionnaireToAdd={setQuestionnaireToAdd}
          currentQuestionnaire={{}}
        />
      </DashboardCard>
    </div>
  );
};

export default QuestionnaireSchemaPage;
