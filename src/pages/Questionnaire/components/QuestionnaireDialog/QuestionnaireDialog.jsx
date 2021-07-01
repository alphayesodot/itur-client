import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent, TextField, Zoom } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { toast } from 'react-toastify';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import NodeGroupService from '../../../../services/nodeGroup.service';
import NodeService from '../../../../services/node.service';
import useStyles from './QuestionnaireDialog.styles';
import CustomDialog from '../../../../common/CustomDialog/CustomDialog';
import { UserService, Role } from '../../../../services/user.service';
import UserStoreInstance from '../../../../stores/User.store';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import GenericSelect from '../../../../common/GenericSelect/GenericSelect';
import addImg from '../../../../utils/images/general/add-icon-blue.svg';
import Question from '../Question/Question';

const QuestionnaireDialog = ({
  open,
  onClose,
  allNodes,
  updateQuestionnaire,
  currentQuestionnaire }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [checkedNodes, setCheckedNodes] = useState([]);
  const [checkedRoles, setCheckedRoles] = useState([]);
  const [questionnaireNameInput, setQuestionnaireNameInput] = useState('');
  const [questionsArr, setQuestionsArr] = useState([]);
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

  useEffect(async () => {
    if (!open) return;
  }, [open]);

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
    console.log(questionIdx);
    const tmpQuestionsArr = [...questionsArr];
    tmpQuestionsArr.splice(questionIdx, 1);
    setQuestionsArr([...tmpQuestionsArr]);
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
          <div>
            <div className={classes.label}>{t('label.intendedTo')}</div>
            <GenericSelect
              options={allRoles}
              selectedValue={checkedRoles}
              setSelectedValue={setCheckedRoles}
              selectClassName={classes.select}
              isMultiple
            />
          </div>
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
      <div claaName={classes.questions}>
        <div className={classes.questionsTitle}>
          {t('title.questions')}
          <Button style={{ backgroundColor: 'transparent' }} className={classes.addButton}>
            <img className={classes.iconImg} alt='+' src={addImg} />
            {t('actions.addQuestion')}
          </Button>
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
                  />
                </div>
              ))}
              <div className={classes.questionLine}>
                <span className={classes.number} />
                <Question addQuestion={addQuestion} deleteQuestion={deleteQuestion} />
              </div>
            </div>

          </div>
        </DashboardCard>

      </div>
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
