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
import ScaleAnswer from './ScaleAnswer/ScaleAnswer';
import TextAnswer from './TextAnswer/TextAnswer';
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
        return <ScaleAnswer min={question.min} max={question.max} />;
      case 'open':
        return (
          <TextAnswer
            isShort={question.isShort}
            answer={answer}
            setAnswer={setAnswer}
          />
        );
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
    <Accordion
      className={classes.li}
      // expanded={answer.expanded}
      onClick={() => {}} // TODO: Save accordion expand state
    >
      <AccordionSummary
        className={classes.liCollapsed}
        expandIcon={<ExpandMoreIcon htmlColor='rgb(255 255 255 / 60%)' />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography className={classes.question}>{question.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {renderQuestionInputsForType(question.type)}
      </AccordionDetails>
    </Accordion>
  );
};

export default Question;
