import React, { useState, useEffect } from 'react';
import { TextField, IconButton, Checkbox, Input } from '@material-ui/core';
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
  showErrors,
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
  const [description, setDescription] = useState(currentQuestionExist ? currentQuestion.description || '' : '');
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

  const [expand, setExpand] = useState(false);
  const [titleError, setTitleError] = useState(questionTitle.length > 0);
  const [minMaxError, setMinMaxError] = useState(linearScale.maxVal <= linearScale.minVal);
  const [minMaxTitleError, setMinMaxTitleError] = useState(
    !linearScale.minTitle.length || !linearScale.maxTitle.length,
  );
  const [emptyOptionsError, setEmptyOptionsError] = useState(!(options && options.length));
  const calcQuestionError = () => titleError
    || (questionType.id === QuestionType.linearScale && (minMaxError || minMaxTitleError))
    || (questionType.id === QuestionType.checkbox && emptyOptionsError)
    || (questionType.id === QuestionType.multipleChoice && emptyOptionsError);

  const [error, setError] = useState(calcQuestionError());

  // set Error when changing
  useEffect(() => {
    setError(calcQuestionError());
  }, [minMaxError, emptyOptionsError, titleError, minMaxTitleError]);
  // map QuestionType to the right component
  const mapQuestionToComponent = new Map();
  mapQuestionToComponent[QuestionType.open] = (
    <OpenQuestion isShort={isShort} setIsShort={setIsShort} />
  );
  mapQuestionToComponent[QuestionType.linearScale] = (
    <LinearScale
      linearScale={linearScale}
      setLinearScale={setLinearScale}
      minMaxError={minMaxError}
      setMinMaxError={setMinMaxError}
      setMinMaxTitleError={setMinMaxTitleError}
      showErrors={showErrors}
    />
  );
  mapQuestionToComponent[QuestionType.multipleChoice] = (
    <MultipleChoice
      options={options}
      setOptions={setOptions}
      hasOther={hasOther}
      setHasOther={setHasOther}
      emptyOptionsError={emptyOptionsError}
      setEmptyOptionsError={setEmptyOptionsError}
      showErrors={showErrors}
    />
  );
  mapQuestionToComponent[QuestionType.checkbox] = (
    <MultipleChoice
      options={options}
      setOptions={setOptions}
      hasOther={hasOther}
      setHasOther={setHasOther}
      emptyOptionsError={emptyOptionsError}
      setEmptyOptionsError={setEmptyOptionsError}
      showErrors={showErrors}
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
    setQuestionTitle('');
  };
  // assign Error if input is empty
  const requriedError = (input, setSomeError) => {
    if (questionType?.id !== chooseOptionId && !input.length) {
      setSomeError(true);
    } else {
      setSomeError(false);
    }
  };

  // set required fields
  useEffect(() => {
    if (currentQuestionExist) {
      requriedError(questionTitle, setTitleError);
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

  const initBasicQuestion = () => {
    const initQuestion = {
      title: questionTitle,
      type: questionType.id,
      required,
      error: error || titleError,
    };
    if (description.length) {
      initQuestion.description = description;
    }
    return initQuestion;
  };
  // to add an option for a new question
  useEffect(() => {
    if (questionType && !currentQuestion && questionType.id !== chooseOptionId) {
      const newQuestion = initBasicQuestion();
      addQuestion(addFieldsToQuestion(newQuestion));
      reset();
    }
  }, [questionType]);

  useEffect(() => {
    if (!currentQuestionExist) return;
    const updatedQuestion = initBasicQuestion();
    updateQuestion(addFieldsToQuestion(updatedQuestion));
  }, [questionTitle,
    options,
    isShort,
    required,
    hasOther,
    questionType,
    linearScale,
    description,
    error]);

  return (
    <div className={classes.root}>
      <div className={classes.question}>
        <Checkbox
          classes={{ root: classes.checkbox, checked: classes.checkedCheckbox }}
          disabled={!currentQuestion}
          disableRipple
          checked={currentQuestionExist && required}
          onChange={() => { setRequired(!required); }}
        />
        <GenericSelect
          options={quesitonTypes}
          setSelectedValue={setQuestionType}
          selectClassName={classes.select}
          selectedValue={questionType}
        />
        <Input
          classes={{ root: classes.input, error: classes.erroredInput }}
          disableUnderline
          margin='dense'
          type='text'
          variant='standard'
          error={showErrors && titleError}
          fullWidth
          value={questionTitle}
          onChange={(e) => {
            requriedError(e.target.value, setTitleError);
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
          <TextField
            classes={{ root: classes.inputDescription }}
            InputProps={{ disableUnderline: true }}
            margin='dense'
            type='text'
            variant='standard'
            placeholder={t('question.description')}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          {mapQuestionToComponent[questionType.id]}
        </div>
        )}
    </div>
  );
};

export default Question;
