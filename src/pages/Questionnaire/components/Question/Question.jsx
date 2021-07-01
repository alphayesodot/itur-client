import React, { useState, useEffect } from 'react';
import { TextField, IconButton, Checkbox, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import { useTranslation } from 'react-i18next';
import { ExpandMore, ExpandLess } from '@material-ui/icons/';
import Zoom from '@material-ui/core/Zoom';
import searchImg from '../../../../utils/images/general/search-yellow.svg';
import DashboardCard from '../../../../common/DashboardCard/DashboardCard';
import useStyles from './Question.styles.js';
import GenericSelect from '../../../../common/GenericSelect/GenericSelect';
import deleteIcon from '../../../../utils/images/general/delete-grey.svg';
import LinearScale from '../LinearScaleQuestion/LinearScaleQuestion';
import OpenQuestion from '../OpenQuestion/OpenQuestion';
import MultipleChoice from '../MultipleChoice/MultipleChoice';

const Question = ({ currentQuestion, addQuestion, deleteQuestion }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const quesitonTypes = [
    { id: '0', name: t('question.choose') },
    { id: 'open', name: t('question.open') },
    { id: 'multiple', name: t('question.multiple') },
    { id: 'checkbox', name: t('question.checkbox') },
    { id: 'linearScale', name: t('question.linearScale') },
    { id: 'date', name: t('question.date') }];

  const [linearScale, setLinearScale] = useState({ minVal: 0, maxVal: 5, minTitle: '', maxTitle: '' });
  const [isShort, setIsShort] = useState(false);
  const [questionTitle, setQuestionTitle] = useState(currentQuestion ? currentQuestion.title : '');
  const [required, setRequired] = useState(true);
  const [options, setOptions] = useState([]);
  const [expand, setExpand] = useState(false);
  const [answer, setAnswer] = React.useState('female');
  const [questionType, setQuestionType] = useState(
    currentQuestion ? currentQuestion.type : quesitonTypes[0],
  );
  const reset = () => {
    setQuestionType(quesitonTypes[0]);
    setQuestionTitle('');
  };
  // to add an option for a new question
  useEffect(() => {
    if (questionType && !currentQuestion && questionType.id !== '0') {
      const newQuestion = {
        title: questionTitle,
        type: questionType,
        required: true,
        description: '',
      };
      addQuestion(newQuestion);
      reset();
    }
  }, [questionType]);

  return (
    <div className={classes.root}>
      <div className={classes.question}>
        <Checkbox
          classes={{ root: classes.checkbox, checked: classes.checkedCheckbox }}
          disabled={!currentQuestion}
          disableRipple
          checked={currentQuestion && required}
          onChange={() => { setRequired(!required); }}
        />
        <GenericSelect
          options={quesitonTypes}
          setSelectedValue={setQuestionType}
          selectClassName={classes.select}
          selectedValue={questionType}
        />
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
          value={questionTitle}
          onChange={(e) => { setQuestionTitle(e.target.value); }}
        />
        <IconButton
          style={{ backgroundColor: 'transparent', visibility: currentQuestion ? 'unset' : 'hidden' }}
          disabled={!currentQuestion}
          onClick={() => { setExpand(!expand); }}
        >
          {expand ? <ExpandLess /> : <ExpandMore />}
        </IconButton>

        <IconButton
          style={{ backgroundColor: 'transparent', visibility: currentQuestion ? 'unset' : 'hidden' }}
          disabled={!currentQuestion}
          onClick={deleteQuestion}
        >
          <img className={classes.deleteIcon} alt='+' src={deleteIcon} />
        </IconButton>
      </div>
      {/* <Accordion
        classes={{
          root: classes.accordion,
          expanded: classes.accordionUnchange,
          disabled: classes.accordionUnchange }}
        // disabled={!currentQuestion}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
          classes={{
            root: classes.accordionSummary,
            focused: classes.accordionUnchange }}
        >
          <Checkbox
            classes={{ root: classes.checkbox, checked: classes.checkedCheckbox }}
            disabled={!currentQuestion}
            checked={currentQuestion && required}
            onChange={() => { setRequired(!required); }}
          />
          <GenericSelect
            options={quesitonTypes}
            setSelectedValue={setQuestionType}
            selectClassName={classes.select}
            selectedValue={questionType}
          />
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
            value={questionTitle}
            onChange={(e) => { setQuestionTitle(e.target.value); }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <LinearScale linearScale={linearScale} setLinearScale={setLinearScale} />
        </AccordionDetails>
      </Accordion> */}
      {expand
        && (
        <div className={classes.answers}>
          {/* <LinearScale linearScale={linearScale} setLinearScale={setLinearScale} /> */}
          {/* <OpenQuestion isShort={isShort} setIsShort={setIsShort} /> */}
          <MultipleChoice
            options={options}
            setOptions={setOptions}
            answer={answer}
            setAnswer={setAnswer}
            multipleAnswers
          />
        </div>
        )}

    </div>
  );
};

export default Question;
