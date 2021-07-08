import React from 'react';
import Questionnaire from './components/Questionnaire';

const questionDb = [
  {
    title: 'סתםםםםם שאלה',
    type: 'multipleChoice',
    options: ['option 1', 'option 2'],
  },
  {
    title: 'שאלה אחרת',
    type: 'date',
    options: ['נכון', 'לא נכון', 'אולי'],
  },
  {
    title: 'שאלה אחרת',
    type: 'checkbox',
    options: ['נכון', 'לא נכון', 'אולי'],
  },
];

const QuestionnaireComponent = () => <Questionnaire questions={questionDb} />;

export default QuestionnaireComponent;
