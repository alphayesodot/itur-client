/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderQuestionInputsForType = (type) => {
    switch (type) {
      case 'multipleChoice':
        return (
          <AmericanAnswer options={question.options} setAnswer={setAnswer} />
        );
      case 'checkbox':
        return (
          <CheckboxAnswer
            options={question.options}
            selectedValues={answer ?? []}
            setSelectedValues={setAnswer}
          />
        );
      case 'linearScale':
        return <ScaleAnswer min={question.min} max={question.max} />;
      case 'open':
        return <TextAnswer isShort={question.isShort} setAnswer={setAnswer} />;
      case 'date':
        return (
          <DateInput
            inputClassName={classes.dateInput}
            inputProps={{
              disableUnderline: true,
              className: classes.dateInput,
            }}
            selectedDate={answer ?? null}
            setSelectedDate={setAnswer}
          />
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
        פתח
        <LaunchIcon />
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
        <DialogTitle>{question.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {renderQuestionInputsForType(question.type)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Question;
