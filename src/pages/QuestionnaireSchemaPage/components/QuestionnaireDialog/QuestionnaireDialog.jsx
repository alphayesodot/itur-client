import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent, Input } from '@material-ui/core';
import { toast } from 'react-toastify';
import useStyles from './QuestionnaireDialog.styles';
import CustomDialog from '../../../../common/CustomDialog/CustomDialog';
import { Role } from '../../../../services/user.service';
import GenericSelect from '../../../../common/GenericSelect/GenericSelect';
import QuestionnaireSchemaService, { QuestionType } from '../../../../services/questionnaireSchema.service';
import QuestionsDashboard from '../QuestionsDashboard/QuestionsDashboard';
import NodesDashboard from '../NodesDashboard/NodesDashboard';
import NoObjectsToShow from '../../../../common/NoObjectsToShow/NoObjectsToShow';

const QuestionnaireDialog = ({
  open,
  onClose,
  allNodes,
  setQuestionnaireToAdd,
  setQuestionnaireToEdit,
  currentQuestionnaire }) => {
  const isCurrentQuestionnaire = currentQuestionnaire
  && Object.keys(currentQuestionnaire).length > 0;
  const classes = useStyles();
  const [duringSending, setDuringSending] = useState(false);
  const { t } = useTranslation();
  const targetTypes = [
    { id: Role.Interviewer,
      label: t('roles.interviewer'),
    },
    { id: Role.Mada,
      label: t('roles.mada'),
    },
    { id: Role.Psychologist,
      label: t('roles.psychologist'),
    },
    { id: Role.Diagnoser,
      label: t('roles.diagnoser'),
    },
    { id: Role.Malshab,
      label: t('roles.malshab'),
    }];

  const roleToObject = (role) => {
    const objectIdx = targetTypes.findIndex(({ id }) => id === role);
    return targetTypes[objectIdx];
  };
  const [checkedNodes, setCheckedNodes] = useState(
    isCurrentQuestionnaire ? currentQuestionnaire.nodes : [],
  );
  const [checkedRoles, setCheckedRoles] = useState(
    isCurrentQuestionnaire
      ? currentQuestionnaire.targetTypes.map((role) => roleToObject(role))
      : [],
  );
  const [questionnaireNameInput, setQuestionnaireNameInput] = useState(
    isCurrentQuestionnaire ? currentQuestionnaire.name : '',
  );
  const [questionsArr, setQuestionsArr] = useState(
    isCurrentQuestionnaire ? currentQuestionnaire.questions : [],
  );
  const [showErrors, setShowErrors] = useState(false);
  const reset = () => {
    setCheckedNodes([]);
    setCheckedRoles([]);
    setQuestionnaireNameInput('');
    setQuestionsArr([]);
  };

  const updateCheckedNodes = (nodeId) => {
    const idx = checkedNodes.indexOf(nodeId);
    if (idx > -1) {
      const tmpSchema = [...checkedNodes];
      tmpSchema.splice(idx, 1);
      setCheckedNodes([...tmpSchema]);
    } else {
      setCheckedNodes([...checkedNodes, nodeId]);
    }
  };

  const prepareQuestionArr = (questions) => {
    if (questions.some((question) => (question.error === true))) {
      return undefined;
    }
    const preparedQuestions = questions.map((question) => {
      const questionObject = {
        title: question.title,
        type: question.type,
        required: question.required,
        description: question.description,
      };
      switch (question.type) {
        case QuestionType.open:
          questionObject.isShort = question.isShort;
          break;
        case QuestionType.multipleChoice:
        case QuestionType.checkbox:
          questionObject.options = question.options;
          questionObject.answer = question.answer;
          questionObject.hasOther = question.hasOther;
          break;
        case QuestionType.linearScale:
          questionObject.min = { ...(question.min) };
          questionObject.max = { ...(question.max) };
          break;
        default:
          break;
      }
      return questionObject;
    });
    return preparedQuestions;
  };

  const onSubmit = async () => {
    try {
      if (duringSending) return;
      setDuringSending(true);
      setShowErrors(true);
      const questionnaireSchema = {
        name: questionnaireNameInput,
        targetTypes: checkedRoles.map(({ id }) => id),
        nodes: [...checkedNodes],
        questions: prepareQuestionArr(questionsArr),
      };
      if (questionnaireSchema.questions === undefined || !questionnaireNameInput.length) {
        toast(t('error.invalidQuestionnaire'));
      } else {
        setShowErrors(false);
        if (Object.keys(currentQuestionnaire).length) {
          questionnaireSchema.id = currentQuestionnaire.id;
          const nodeToRemove = currentQuestionnaire.nodes.filter(
            (nodeId) => !questionnaireSchema.nodes.includes(nodeId),
          );
          const nodeToAdd = questionnaireSchema.nodes.filter(
            (nodeId) => !currentQuestionnaire.nodes.includes(nodeId),
          );
          const updatedQuestionnaire = await QuestionnaireSchemaService.update(
            questionnaireSchema, nodeToAdd, nodeToRemove,
          );
          setQuestionnaireToEdit(updatedQuestionnaire);
        } else {
          const createdQuestionnaire = await QuestionnaireSchemaService.create(questionnaireSchema);
          setQuestionnaireToAdd(createdQuestionnaire);
          reset();
        }
        onClose();
      }
      setDuringSending(false);
    } catch {
      toast(t('error.server'));
    }
  };

  const content = (
    <DialogContent className={classes.content}>
      <div className={classes.delatils}>
        <div className={classes.inputContainer}>
          <div className={classes.marginBottom}>
            <div className={classes.label}>{t('label.questionnaireName')}</div>
            <Input
              classes={{ root: classes.input, error: classes.erroredInput }}
              disableUnderline
              autoFocus
              error={showErrors && !questionnaireNameInput.length}
              margin='dense'
              id='name'
              type='text'
              variant='standard'
              fullWidth
              value={questionnaireNameInput}
              onChange={(e) => { setQuestionnaireNameInput(e.target.value); }}
            />
          </div>
          <>
            <div className={classes.label}>{t('label.intendedTo')}</div>
            <GenericSelect
              options={targetTypes}
              selectedValue={checkedRoles}
              setSelectedValue={setCheckedRoles}
              selectClassName={classes.select}
              checkboxClasses={{
                root: classes.selectRoleCheckbox,
                checked: classes.checkedCheckbox }}
              isMultiple
            />
          </>
        </div>
        <div className={classes.nodesContainer}>
          <div className={classes.label}>{t('title.nodes')}</div>
          {allNodes?.length
            ? (
              <NodesDashboard
                allNodes={allNodes}
                checkedNodes={checkedNodes}
                updateCheckedNodes={updateCheckedNodes}
              />
            )
            : (
              <div className={classes.noNodes}>
                <NoObjectsToShow title={t('message.noNodes')} />
              </div>
            )}
        </div>
      </div>
      <div className={classes.questions}>
        <div className={classes.questionsTitle}>
          {t('title.questions')}
        </div>
        <QuestionsDashboard
          questionsArr={questionsArr}
          setQuestionsArr={setQuestionsArr}
          showErrors={showErrors}
        />
      </div>
      <DialogActions classes={{ spacing: classes.actions }}>
        <Button
          classes={{ disabled: classes.disabledButton }}
          className={classes.saveButton}
          onClick={onSubmit}
        >
          {t('button.saveQuestionnaire')}
        </Button>
      </DialogActions>
    </DialogContent>
  );

  return (
    <CustomDialog
      open={open}
      paperClassName={classes.root}
      onClose={() => { onSubmit(); }}
      title={currentQuestionnaire ? t('title.editQuestionnaire') : t('title.newQuestionnaire')}
      content={content}
    />
  );
};

export default QuestionnaireDialog;
