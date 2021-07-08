import React, { useState, useEffect } from 'react';
import { TextField, IconButton, Checkbox } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { ExpandMore, ExpandLess } from '@material-ui/icons/';
import useStyles from './Question.styles.js';
import GenericSelect from '../../../../common/GenericSelect/GenericSelect';
import deleteIcon from '../../../../utils/images/general/delete-grey.svg';
import LinearScale from '../LinearScaleQuestion/LinearScaleQuestion';
import OpenQuestion from '../OpenQuestion/OpenQuestion';
import MultipleChoice from '../MultipleChoice/MultipleChoice';
import { QuestionType } from '../../../../services/questionnaireSchema.service';

const Question = ({
  currentQuestion,
  updateQuestion,
  addQuestion,
  deleteQuestion,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const chooseOptionId = '0';
  const quesitonTypes = [
    { id: chooseOptionId, label: t('question.choose') },
    { id: QuestionType.open, label: t('question.open') },
    { id: QuestionType.multipleChoice, label: t('question.multiple') },
    { id: QuestionType.checkbox, label: t('question.checkbox') },
    { id: QuestionType.linearScale, label: t('question.linearScale') },
    { id: QuestionType.date, label: t('question.date') }];

  const currentQuestionExist = currentQuestion && Object.keys(currentQuestion).length > 0;
  const [questionTitle, setQuestionTitle] = useState(currentQuestionExist ? currentQuestion.title : '');
  const [options, setOptions] = useState(currentQuestionExist ? currentQuestion.options : []);
  const [isShort, setIsShort] = useState(currentQuestionExist ? currentQuestion.isShort : false);
  const [required, setRequired] = useState(currentQuestionExist ? currentQuestion.required : true);
  const [hasOther, setHasOther] = useState(currentQuestionExist ? currentQuestion.hasOther : false);
  const [expand, setExpand] = useState(false);
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(false);
  const [questionType, setQuestionType] = useState(
    currentQuestionExist
      ? quesitonTypes.filter((type) => type.id === currentQuestion.type)[0]
      : quesitonTypes[0],
  );
  const [linearScale, setLinearScale] = useState(
    currentQuestionExist && currentQuestion.type === QuestionType.linearScale
      ? { minVal: currentQuestion.min.value,
        maxVal: currentQuestion.max.value,
        minTitle: currentQuestion.min.tag,
        maxTitle: currentQuestion.max.tag }
      : { minVal: 0, maxVal: 5, minTitle: '', maxTitle: '' },
  );

  // map QuestionType to the right component
  const mapQuestionToComponent = new Map();
  mapQuestionToComponent[QuestionType.open] = (
    <OpenQuestion isShort={isShort} setIsShort={setIsShort} />
  );
  mapQuestionToComponent[QuestionType.linearScale] = (
    <LinearScale linearScale={linearScale} setLinearScale={setLinearScale} />
  );
  mapQuestionToComponent[QuestionType.multipleChoice] = (
    <MultipleChoice
      options={options}
      setOptions={setOptions}
      answer={answer}
      setAnswer={setAnswer}
      hasOther={hasOther}
      setHasOther={setHasOther}
    />
  );
  mapQuestionToComponent[QuestionType.checkbox] = (
    <MultipleChoice
      options={options}
      setOptions={setOptions}
      answer={answer}
      setAnswer={setAnswer}
      hasOther={hasOther}
      setHasOther={setHasOther}
      multipleAnswers
    />
  );

  const reset = () => {
    setLinearScale({ minVal: 0, maxVal: 5, minTitle: '', maxTitle: '' });
    setIsShort(false);
    setQuestionType(quesitonTypes[0]);
    setRequired(true);
    setHasOther(false);
    setOptions([]);
    setExpand(false);
    setAnswer('');
    setQuestionTitle('');
    setError(false);
  };
  // assign Error for a required field
  const requriedError = (input) => {
    if (questionType?.id !== chooseOptionId && !input.length) {
      setError(true);
    } else {
      setError(false);
    }
  };

  // set required fields
  useEffect(() => {
    if (currentQuestionExist) {
      requriedError(questionTitle);
    }
  }, []);

  // add relevant fields to question according to question.type
  const addFieldsToQuestion = (questionObject) => {
    const updatedQuestion = { ...questionObject };
    switch (questionObject.type) {
      case QuestionType.open:
        updatedQuestion.isShort = isShort;
        break;
      case QuestionType.multipleChoice:
        updatedQuestion.options = options;
        updatedQuestion.hasOther = hasOther;
        break;
      case QuestionType.checkbox:
        updatedQuestion.options = options;
        updatedQuestion.hasOther = hasOther;
        break;
      case QuestionType.linearScale:
        updatedQuestion.min = { tag: linearScale.minTitle, value: linearScale.minVal };
        updatedQuestion.max = { tag: linearScale.maxTitle, value: linearScale.maxVal };
        break;
      default:
        break;
    }
    return updatedQuestion;
  };

  // to add an option for a new question
  useEffect(() => {
    if (questionType && !currentQuestion && questionType.id !== chooseOptionId) {
      const newQuestion = {
        title: questionTitle,
        type: questionType.id,
        required: true,
        // description: '', // not allowed to be empty
      };
      addQuestion(addFieldsToQuestion(newQuestion));
      reset();
    }
  }, [questionType]);

  useEffect(() => {
    if (!currentQuestionExist) return;
    const updatedQuestion = {
      title: questionTitle,
      type: questionType.id,
      required,
      // description: '', // not allowed to be empty
    };
    updateQuestion(addFieldsToQuestion(updatedQuestion));
  }, [questionTitle, options, isShort, required, hasOther, questionType, linearScale]);

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
          margin='dense'
          id='question-title'
          type='text'
          variant='standard'
          error={error}
          placeholder={error ? '*' : ''}
          fullWidth
          value={questionTitle}
          onChange={(e) => {
            requriedError(e.target.value);
            setQuestionTitle(e.target.value);
          }}
        />
        <IconButton
          style={{ backgroundColor: 'transparent', padding: 0, visibility: currentQuestion ? 'unset' : 'hidden' }}
          className={classes.expandButton}
          disabled={!currentQuestion}
          onClick={() => { setExpand(!expand); }}
        >
          {expand
            ? <ExpandLess className={classes.expandIcon} />
            : <ExpandMore className={classes.expandIcon} />}
        </IconButton>

        <IconButton
          style={{ backgroundColor: 'transparent', padding: 0, visibility: currentQuestion ? 'unset' : 'hidden' }}
          disabled={!currentQuestion}
          onClick={deleteQuestion}
        >
          <img className={classes.deleteIcon} alt='delete' src={deleteIcon} />
        </IconButton>
      </div>
      {expand
        && (
        <div className={classes.answers}>
          {mapQuestionToComponent[questionType.id]}
        </div>
        )}

    </div>
  );
};

export default Question;
