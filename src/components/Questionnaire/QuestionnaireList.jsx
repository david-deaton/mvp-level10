import React, { useState } from 'react';
import ListBuilder from './ListBuilder.jsx';

const QuestionnaireList = ({ handleQuestionSelect, handleQuestionnaireSubmit, questions }) => {

  // const [formData, setFormData] = useState({
  //   1: 0,
  //   2: 0,
  //   3: 0,
  //   4: 0
  //   });

  // const handleChange = (sentiment) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: sentiment === 'negative' ? Number(formData[event.target.name]) + Math.abs(Number(event.target.value) - 11) : Number(formData[event.target.name]) + Number(event.target.value)
  //   })
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('submit handled');
  // }

  return (
    <div className="questionnaireList">
      <ListBuilder handleQuestionSelect={handleQuestionSelect} handleQuestionnaireSubmit={handleQuestionnaireSubmit} questions={questions}/>
    </div>
  );
};

export default QuestionnaireList;


// 3 - 10 = -7
// 1 - 10 = 9