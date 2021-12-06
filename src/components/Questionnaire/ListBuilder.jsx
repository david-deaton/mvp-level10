import React, { useState } from 'react';
import '../../styles.css';
// import Question from './Question.jsx';

const ListBuilder = ({ handleQuestionSelect, handleQuestionnaireSubmit, questions }) => {

  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [hover, setHover] = useState(null);

  const emojis = ['\u{1F636}', '\u{1F92C}', '\u{1F621}', '\u{1F624}', '\u{1F974}', '\u{1F914}', '\u{1F642}', '\u{1F60A}', '\u{1F603}', '\u{1F601}', '\u{1F973}'];


  const renderSubmitButton = showSubmitButton ? (
    <div className="submitSection">
      <p>You have answered all of the questions! Please click below to see your Level 10 Chart.</p>
      <button onClick={handleQuestionnaireSubmit}>Show My Chart!</button>
    </div>
  ) : (
    <div className="bubbles">
      <div className="question">
        <p>{currentQuestion.question}</p>
      </div>
      <span>Disagree
        {[...Array(10)].map((bubble, i) => {
          const bubbleValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name={currentQuestion.categoryId}
                value={bubbleValue}
                checked={false}
                onClick={() => {
                  // console.log(`Hey value is ${bubbleValue}`);
                  // handleChange(currentQuestion.sentiment)
                  if (currentQuestion.num !== questions.length) {
                    handleQuestionSelect(currentQuestion.sentiment);
                    setCurrentQuestion(questions[currentQuestion.num]);
                  } else {
                    setShowSubmitButton(true);
                  }
                }}
                // onChange={() => handleChange(currentQuestion.sentiment)}
              />

              <span
                style={{
                  'color': bubbleValue === hover ? '#ffc107' : '#e4e5e9',
                  'font-size': '40px'
                }}
                onMouseEnter={() => setHover(bubbleValue)}
                onMouseLeave={() => setHover(null)}
              > {(hover === bubbleValue) ? (
                  <>
                    {emojis[bubbleValue]}
                  </>
                ) : (
                  <>
                    {emojis[0]}
                  </>
                )} </span>

            </label>
          );
        })}
          Agree</span>
    </div>
  );

  return (
    <div>
      {renderSubmitButton}
    </div>
  );
};

export default ListBuilder;