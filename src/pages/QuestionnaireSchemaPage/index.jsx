import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { toast } from 'react-toastify';
import Moment from 'moment';
import useStyles from './index.styles';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import Header from './components/Header/Header';
import DataTable from '../../common/DataTable/DataTable';
import QuestionnaireSchemaService from '../../services/questionnaireSchema.service';
import { UserService, Role } from '../../services/user.service';
import QuestionnaireOptionsButton from './components/QuestionnaireOptionsButton/QuestionnaireOptionsButton';
import QuestionnaireDialog from './components/QuestionnaireDialog/QuestionnaireDialog';
import NodeService from '../../services/node.service';
import UserStoreInstance from '../../stores/User.store';
import Preview from './components/Preview/Preview';
import CustomBackDrop from '../../common/CustomBackDrop/CustomBackDrop';

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
  const [questionnaireToPreview, setQuestionnaireToPreview] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getIntendedRole = (rolesArr) => {
    if (!rolesArr.length) {
      return '-';
    } if (rolesArr.includes(Role.Malshab) && rolesArr.length === 1) {
      return t('roles.malshab');
    } if (!rolesArr.includes('MALSHAB')) {
      return t('permissions.appreciator');
    }
    return t('permissions.malshabAppreciator');
  };

  useEffect(() => { setQuestionnaireToPreview(questionnaireToEdit); }, [questionnaireToEdit]);

  /**
   * create a row table from a questionnaire
   * @param {} questionnaire questionnaire object with params
   */
  const createRowTable = (questionnaire, questionnaireCreatorName, allNodesTmp?) => {
    const intendedRole = getIntendedRole(questionnaire.targetTypes);
    return {
      id: questionnaire.id,
      data: [
        questionnaire.name,
        intendedRole,
        questionnaireCreatorName,
        Moment(new Date(questionnaire.updatedAt)).format('DD/MM/YYYY'),
        questionnaire.questions.length,
        <QuestionnaireOptionsButton
          questionnaire={questionnaire}
          setIdToDelete={setIdToDelete}
          allNodes={allNodesTmp || allNodes}
          setQuestionnaireToEdit={setQuestionnaireToEdit}
          setQuestionnaireToPreview={setQuestionnaireToPreview}
        />,
      ],
      onClick: () => { setQuestionnaireToPreview(questionnaire); },
    };
  };

  /**
   * @param {*} id id to delete from array
   * @param {*} arr array to delete from. all objects have an id property.
   * @returns new array without the object with the noted #id
   */
  const deleteById = (id, arr) => {
    const idx = arr.findIndex((value) => value.id === id);
    if (idx > -1) {
      const tmpCopy = [...arr];
      tmpCopy.splice(idx, 1);
      return tmpCopy;
    }
  };

  /**
   * import all questionnaires - at the beginning only
   */
  useEffect(async () => {
    try {
      setIsLoading(true);
      const allNodesTmp = await NodeService.getNodes();
      setAllNodes(allNodesTmp);
      const allQuestionnaires = await QuestionnaireSchemaService.getQuestionnaires();
      const promises = allQuestionnaires.map(async (questionnaire) => {
        const questionnaireWriter = await UserService.getUserById(questionnaire.createdBy);
        return createRowTable(questionnaire, questionnaireWriter.name, allNodesTmp);
      });
      const questionnaireRows = await Promise.all(promises);
      setAllQuestionnaireRows(questionnaireRows);
      setQuestionnaireToShow(questionnaireRows);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      toast(t('error.server'));
    }
  }, []);

  // delete questionnaire from states - delete a row table
  useEffect(() => {
    const tmpAllQuestionnaireRows = deleteById(idToDelete, [...allQuestionnaireRows]);
    const tmpShowQuestionnaireRows = deleteById(idToDelete, [...questionnaireRowsToShow]);
    if (tmpAllQuestionnaireRows) setAllQuestionnaireRows([...tmpAllQuestionnaireRows]);
    if (tmpShowQuestionnaireRows) setQuestionnaireToShow([...tmpShowQuestionnaireRows]);
    setQuestionnaireToPreview({});
  }, [idToDelete]);

  // add questionnaire to state - add a row-table
  useEffect(() => {
    if (Object.keys(questionnaireToAdd).length) {
      const questionnaireRow = createRowTable(questionnaireToAdd, userName);
      setAllQuestionnaireRows([...allQuestionnaireRows, questionnaireRow]);
      setQuestionnaireToShow([...allQuestionnaireRows, questionnaireRow]);
    }
    setQuestionnaireToPreview(questionnaireToAdd);
  }, [questionnaireToAdd]);

  // edit questionnaire - edit row-tables
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
      if (questionniareRowIdx > -1) {
        const creatorName = tmpAllQuestionnaireRows[questionniareRowIdx]?.data[2];
        tmpAllQuestionnaireRows[questionniareRowIdx] = createRowTable(
          questionnaireToEdit, creatorName,
        );
        if (questionniareRowShowIdx > -1) {
          tmpQuestionnaireRowsShow[questionniareRowShowIdx] = createRowTable(
            questionnaireToEdit, creatorName,
          );
        }
      }
      setAllQuestionnaireRows([...tmpAllQuestionnaireRows]);
      setQuestionnaireToShow([...tmpQuestionnaireRowsShow]);
    }
  }, [questionnaireToEdit]);

  const infoContent = (
    <div className={classes.infoContainer}>
      {questionnaireRowsToShow.length
        ? (
          <div className={`${classes.tableContainer}`}>
            <DataTable
              rowsData={questionnaireRowsToShow}
              columnNames={colNames}
              widthVec={['20%', '20%', '20%', '20%', '20%', '1rem']}
            />
          </div>
        )
        : (
          <div className={` ${classes.noQuestionnaire} ${classes.emptyTable}`}>
            {' '}
            {t('message.noQuestionnaires')}
          </div>
        )}
      <div className={`${classes.previewContainer}`}>
        <Preview questionnaire={questionnaireToPreview} />
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <Header
        allQuestionnaireRows={allQuestionnaireRows}
        setQuestionnaireToShow={setQuestionnaireToShow}
        openDialog={() => { setOpenDialog(true); }}
        setQuestionnaireToPreview={setQuestionnaireToPreview}
      />
      <DashboardCard className={classes.dashbord}>
        <Typography className={classes.content}>
          <strong className={classes.title}>{t('title.questionnaires')}</strong>
          {' '}
          <span className={classes.countTitle}>{`(${[...questionnaireRowsToShow].length})`}</span>
        </Typography>
        {isLoading
          ? <CustomBackDrop />
          : infoContent}

        <QuestionnaireDialog
          open={openDialog}
          onClose={() => { setOpenDialog(false); }}
          allNodes={allNodes}
          setQuestionnaireToAdd={setQuestionnaireToAdd}
          currentQuestionnaire={{}}
        />
      </DashboardCard>
    </div>
  );
};

export default QuestionnaireSchemaPage;
