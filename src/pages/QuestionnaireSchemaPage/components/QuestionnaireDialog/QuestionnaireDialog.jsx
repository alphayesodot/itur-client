import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent, TextField } from '@material-ui/core';
import { toast } from 'react-toastify';
import useStyles from './QuestionnaireDialog.styles';
import CustomDialog from '../../../../common/CustomDialog/CustomDialog';
import { Role } from '../../../../services/user.service';
import GenericSelect from '../../../../common/GenericSelect/GenericSelect';
import { QuestionnaireSchemaService, QuestionType } from '../../../../services/QuestionnaireSchema.service';
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
  const { t } = useTranslation();
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

  const roleToObject = (role) => {
    const objectIdx = allRoles.findIndex(({ id }) => id === role);
    return allRoles[objectIdx];
  };
  const [checkedNodes, setCheckedNodes] = useState(
    isCurrentQuestionnaire ? currentQuestionnaire.nodes : [],
  );
  const [checkedRoles, setCheckedRoles] = useState(
    isCurrentQuestionnaire
      ? currentQuestionnaire.targetRoles.map((role) => roleToObject(role))
      : [],
  );
  const [questionnaireNameInput, setQuestionnaireNameInput] = useState(
    isCurrentQuestionnaire ? currentQuestionnaire.name : '',
  );
  const [questionsArr, setQuestionsArr] = useState(
    isCurrentQuestionnaire ? currentQuestionnaire.questions : [],
  );

  const reset = () => {
    setCheckedNodes([]);
    setCheckedRoles([]);
    setQuestionnaireNameInput('');
    setQuestionsArr([]);
  };
  const hadleOnClose = () => {
    if (isCurrentQuestionnaire) {
      // return state to be unchanges
      setCheckedNodes(currentQuestionnaire.nodes);
      setCheckedRoles(currentQuestionnaire.targetRoles.map((role) => roleToObject(role)));
      setQuestionnaireNameInput(currentQuestionnaire.name);
      setQuestionsArr(currentQuestionnaire.questions);
    } else {
      reset();
    }
    onClose();
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
        targetRoles: checkedRoles.map(({ id }) => id),
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
              <NodesDashboard
                allNodes={allNodes}
                checkedNodes={checkedNodes}
                updateCheckedNodes={updateCheckedNodes}
              />
            )
            : (

              <div className={classes.noNodeGroups}>
                <NoObjectsToShow title={t('message.noNodes')} />
              </div>
            )}
        </div>
      </div>
      <div className={classes.questions}>
        <div className={classes.questionsTitle}>
          {t('title.questions')}
        </div>
        <QuestionsDashboard questionsArr={questionsArr} setQuestionsArr={setQuestionsArr} />
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
      onClose={hadleOnClose}
      title={currentQuestionnaire ? t('title.editQuestionnaire') : t('title.newQuestionnaire')}
      content={content}
    />
  );
};

export default QuestionnaireDialog;
