/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './Question.styles';
import AmericanAnswer from './AmericanAnswer/AmericanAnswer';
import CheckboxAnswer from './CheckboxAnswer/CheckboxAnswer';
import DateInput from '../../../../common/DateInput/DateInput';

const Question = ({ question, answer, setAnswer }) => {
  const classes = useStyles();

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
        return '';
      case 'open':
        return '';
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
    <Accordion className={classes.li}>
      <AccordionSummary
        className={classes.liCollapsed}
        expandIcon={<ExpandMoreIcon htmlColor='rgb(255 255 255 / 60%)' />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography className={classes.question}>{question.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>{renderQuestionInputsForType(question.type)}</div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Question;
