import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent, TextField } from '@material-ui/core';
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

const QuestionnaireDialog = ({
  open,
  onClose,
  allNodes,
  updateQuestionnaire,
  currentQuestionnaire }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [checkedNodes, setCheckedNodes] = useState([]);
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

  const content = (
    <DialogContent className={classes.content}>
      <div className={classes.delatils}>
        <div className={classes.inputContainer}>
          <div className={`${classes.labeledInput} ${classes.marginBottom}`}>
            <div className={classes.label}>{t('label.questionnaireName')}</div>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              type='text'
              variant='outlined'
              fullWidth
              onChange={() => { console.log('something'); }}
            />
          </div>
          <div className={classes.labeledInput}>
            <div className={classes.label}>{t('label.intendedTo')}</div>
            <GenericSelect
              options={allRoles}
              selectedValue={checkedNodes}
              setSelectedValue={setCheckedNodes}
              selectClassName={classes.select}
              isMultiple
            />
          </div>
        </div>
        <div className={classes.nodesContainer}>
          {/* <div className={classes.labeledInput}> */}
          <DashboardCard className={classes.nodesDashBoard}>
            {allNodes?.length
              ? (
                <FormGroup row>
                  {allNodes?.map((node) => (
                    <FormControlLabel
                      control={<Checkbox checked onChange={() => { console.log('handleOnChange'); }} name='checkedA' />}
                      label={node.name}
                    />
                  )) }
                </FormGroup>
              )
              : <div className={classes.noNodeGroups}>{t('title.noNodeGroups')}</div>}
          </DashboardCard>
          {/* </div> */}
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
          questoins
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
