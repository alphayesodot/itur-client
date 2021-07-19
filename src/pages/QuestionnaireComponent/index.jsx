import React, { useState, useEffect } from 'react';
import Questionnaire from '../../common/Questionnaire/Questionnaire';

const questionDb = [
  {
    title: 'סתםםםםם שאלה',
    type: 'MULTIPLE_CHOICE',
    options: ['option 1', 'option 2'],
  },
  {
    title: 'שאלה אחרת',
    type: 'DATE',
    options: ['נכון', 'לא נכון', 'אולי'],
  },
  {
    title: 'שאלה אחרת',
    type: 'CHECKBOX',
    options: ['נכון', 'לא נכון', 'אולי'],
  },
  {
    title: 'עוד שאלה',
    type: 'OPEN',
    isShort: true,
  },
  {
    title: 'test',
    type: 'LINEARSCALE',
    min: { tag: 'test', value: 1 },
    max: { tag: 'drop', value: 5 },
  },
];

const QuestionnaireComponent = () => {
  const [questions, setQuestions] = useState([...questionDb]);

  return <Questionnaire questions={questions} setQuestions={setQuestions} />;
};

export default QuestionnaireComponent;
