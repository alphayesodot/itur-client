/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormControl from '@material-ui/core/FormControl';
import DialogTitle from '@material-ui/core/DialogTitle';
import LaunchIcon from '@material-ui/icons/Launch';
import useStyles from './Question.styles';
import AmericanAnswer from './AmericanAnswer/AmericanAnswer';
import CheckboxAnswer from './CheckboxAnswer/CheckboxAnswer';
import ScaleAnswer from './ScaleAnswer/ScaleAnswer';
import TextAnswer from './TextAnswer/TextAnswer';
import DateInput from '../../DateInput/DateInput';

const Question = ({ question, answer, setAnswer }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderQuestionInputsForType = (type) => {
    switch (type) {
      case 'MULTIPLE_CHOICE':
        return (
          <AmericanAnswer
            options={question.options}
            selectedValue={answer ?? ''}
            setSelectedValue={setAnswer}
            hasOther={question.hasOther}
            required={question.required}
          />
        );
      case 'CHECKBOX':
        return (
          <CheckboxAnswer
            options={question.options}
            selectedValues={answer ?? []}
            setSelectedValues={setAnswer}
            hasOther={question.hasOther}
            required={question.required}
          />
        );
      case 'LINEARSCALE':
        return (
          <ScaleAnswer
            min={question.min}
            max={question.max}
            selectedValue={answer ?? ''}
            setSelectedValue={setAnswer}
            required={question.required}
          />
        );
      case 'OPEN':
        return (
          <TextAnswer
            isShort={question.isShort}
            answer={answer}
            setAnswer={setAnswer}
            required={question.required}
          />
        );
      case 'DATE':
        return (
          <FormControl required={question.required}>
            <DateInput
              inputClassName={classes.dateInput}
              style={{ paddingRight: '0' }}
              inputProps={{
                disableUnderline: true,
                className: classes.dateInput,
              }}
              selectedDate={answer ?? null}
              setSelectedDate={setAnswer}
            />
          </FormControl>
        );
      default:
        return '';
    }
  };

  return (
    <div className={classes.li}>
      <Typography className={classes.question}>{question.title}</Typography>
      <Button
        className={classes.expandButton}
        variant='outlined'
        color='secondary'
        onClick={handleClickOpen}
      >
        {t('interviewDashboard.questionnaire.openQuestion')}
        <LaunchIcon />
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
        <DialogTitle style={{ padding: '24px 24px 0px 24px' }}>
          {question.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{question.description}</DialogContentText>
          <DialogContentText>
            {renderQuestionInputsForType(question.type)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            {t('interviewDashboard.questionnaire.saveQuestion')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Question;
