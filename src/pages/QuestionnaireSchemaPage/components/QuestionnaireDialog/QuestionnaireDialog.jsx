import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent, TextField, Zoom } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { toast } from 'react-toastify';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from './QuestionnaireDialog.styles';
import CustomDialog from '../../../../common/CustomDialog/CustomDialog';
import { Role } from '../../../../services/user.service';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import GenericSelect from '../../../../common/GenericSelect/GenericSelect';
import Question from '../Question/Question';
import { QuestionnaireSchemaService, QuestionType } from '../../../../services/QuestionnaireSchema.service';

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
  const { t } = useTranslation();
  const [checkedNodes, setCheckedNodes] = useState(
    isCurrentQuestionnaire ? currentQuestionnaire.nodes : [],
  );
  const [checkedRoles, setCheckedRoles] = useState(
    isCurrentQuestionnaire ? currentQuestionnaire.targetRoles : [],
  );
  const [questionnaireNameInput, setQuestionnaireNameInput] = useState(
    isCurrentQuestionnaire ? currentQuestionnaire.name : '',
  );
  const [questionsArr, setQuestionsArr] = useState(
    isCurrentQuestionnaire ? currentQuestionnaire.questions : [],
  );
  const allRoles = [
    { id: Role.Interviewer,
      name: t('roles.interviewer'),
    },
    { id: Role.RamadIturOfUnit,
      name: t('roles.ramadIturOfUnit'),
    },
    { id: Role.RamadIturAssistant,
      name: t('roles.ramadIturAssistant'),
    },
    { id: Role.ProfessionalRamad,
      name: t('roles.professionalRamad'),
    },
    { id: Role.Mada,
      name: t('roles.mada'),
    },
    { id: Role.Psychologist,
      name: t('roles.psychologist'),
    },
    { id: Role.Diagnoser,
      name: t('roles.diagnoser'),
    },
    { id: Role.Malshab,
      name: t('roles.malshab'),
    }];

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

  const addQuestion = (questionObject) => {
    setQuestionsArr([...questionsArr, questionObject]);
  };

  const deleteQuestion = (questionIdx) => {
    const tmpQuestionsArr = [...questionsArr];
    tmpQuestionsArr.splice(questionIdx, 1);
    setQuestionsArr([...tmpQuestionsArr]);
  };

  const updateQuestion = (question, questionIdx) => {
    const tmpQuestionsArr = [...questionsArr];
    tmpQuestionsArr[questionIdx] = question;
    setQuestionsArr([...tmpQuestionsArr]);
  };

  const prepareQuestionArr = (questions) => {
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
          questionObject.options = question.isShort;
          questionObject.answer = question.answer;
          questionObject.other = question.other;
          break;
        case QuestionType.linearScale:
          questionObject.min = { tag: question.minTag, value: question.minVal };
          questionObject.max = { tag: question.maxTag, value: question.maxVal };
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
      const questionnaireSchema = {
        name: questionnaireNameInput,
        targetRoles: [...checkedRoles],
        nodes: [...checkedNodes],
        questions: prepareQuestionArr(questionsArr),
        updatedAt: new Date(),
      };
      if (Object.keys(currentQuestionnaire).length) {
        questionnaireSchema.id = currentQuestionnaire.id;
        const updatedQuestionnaire = await QuestionnaireSchemaService.update(questionnaireSchema);
        setQuestionnaireToEdit(updatedQuestionnaire);
      } else {
        const createdQuestionnaire = await QuestionnaireSchemaService.create(questionnaireSchema);
        setQuestionnaireToAdd(createdQuestionnaire);
        reset();
      }
      onClose();
    } catch (error) {
      toast(error);
    }
  };

  const content = (
    <DialogContent className={classes.content}>
      <div className={classes.delatils}>
        <div className={classes.inputContainer}>
          <div className={classes.marginBottom}>
            <div className={classes.label}>{t('label.questionnaireName')}</div>
            <TextField
              classes={{ root: classes.input }}
              InputProps={{ disableUnderline: true }}
              autoFocus
              disableUnderline
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
              options={allRoles}
              selectedValue={checkedRoles}
              setSelectedValue={setCheckedRoles}
              selectClassName={classes.select}
              isMultiple
            />
          </>
        </div>
        <div className={classes.nodesContainer}>
          <div className={classes.label}>{t('title.nodes')}</div>
          {allNodes?.length
            ? (
              <DashboardCard className={classes.nodesDashBoard}>
                <FormGroup row className={classes.internalNodeContainer}>
                  {allNodes?.map((node) => (
                    <Tooltip
                      placement='top-end'
                      title={node.name}
                      TransitionComponent={Zoom}
                      enterDelay={300}
                    >
                      <FormControlLabel
                        classes={{ root: classes.checkboxContainer }}
                        control={(
                          <Checkbox
                            checked={checkedNodes.includes(node.id)}
                            onChange={() => { updateCheckedNodes(node.id); }}
                          />
)}
                        label={node.name}
                      />
                    </Tooltip>
                  )) }
                </FormGroup>
              </DashboardCard>
            )
            : (
              <div className={classes.noNodeGroups}>{t('title.noNodes')}</div>
            )}
        </div>
      </div>
      <div className={classes.questions}>
        <div className={classes.questionsTitle}>
          {t('title.questions')}
        </div>
        <DashboardCard className={classes.questionsDashBoard}>
          <div className={classes.questionnaireCreationTitle}>
            <span className={classes.number}>#</span>
            <span className={classes.titleMust}>{t('question.required')}</span>
            <span className={classes.titleQuestionType}>{t('question.questionType')}</span>
            <span className={classes.titleQuestion}>{t('question.question')}</span>
            <span className={classes.titlePlaceholder} />
          </div>
          <div className={classes.internalQuestionContainer}>
            <div className={classes.questionsLines}>
              {questionsArr.map((question, idx) => (
                <div className={classes.questionLine}>
                  <span className={classes.number}>{idx + 1}</span>
                  <Question
                    currentQuestion={question}
                    addQuestion={addQuestion}
                    deleteQuestion={() => { deleteQuestion(idx); }}
                    updateQuestion={(q) => { updateQuestion(q, idx); }}
                  />
                </div>
              ))}
              <div className={classes.questionLine}>
                <span className={classes.number} />
                <Question addQuestion={addQuestion} deleteQuestion={() => {}} />
              </div>
            </div>
          </div>
        </DashboardCard>
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
      onClose={onClose}
      title={currentQuestionnaire ? t('title.editQuestionnaire') : t('title.newQuestionnaire')}
      content={content}
    />
  );
};

export default QuestionnaireDialog;
