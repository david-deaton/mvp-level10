import React, { useState } from 'react';
import QuestionnaireList from './components/Questionnaire/QuestionnaireList.jsx';
import TestChartApp from './components/Chart/TestChart.jsx';
import Suggestions from './components/Suggestions/Suggestions.jsx'
import categories from './utils/categories.js';
import questions from './utils/questions.js';
import suggestionsList from './utils/suggestionsList.js';
import './styles.css';
// import { Button } from 'react-bootstrap';
// // import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

var App = () => {

  const [formData, setFormData] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0
    });

    const [seriesData, setSeriesData] = useState([0, 0, 0, 0])

    const [showChart, setShowChart] = useState(false);

    const [showQuestionnaire, setShowQuestionnaire] = useState(false);
    const handleGetStartedClick = (event) => {
      setShowQuestionnaire(!showQuestionnaire);
    };

    const handleQuestionSelect = (sentiment) => {
      setFormData({
        ...formData,
        [event.target.name]: sentiment === 'negative' ? Number(formData[event.target.name]) + Math.abs(Number(event.target.value) - 11) : Number(formData[event.target.name]) + Number(event.target.value)
      })
    }

    const updateSeriesData = (formObj) => {
      let tempArray = [];
      Object.keys(formObj).forEach((key) => {
        tempArray.push((formObj[key] / categories[key-1].totalQuestions))
      });
      setSeriesData(tempArray)
    }

    const handleQuestionnaireSubmit = (event) => {
      event.preventDefault();
      updateSeriesData(formData);
      setShowChart(true);
      setShowQuestionnaire(false);
    }

  const renderChart = showChart ? (
    <div className="parentChart">
    <TestChartApp series={seriesData}/>
    <Suggestions suggestionsList={suggestionsList} series={seriesData} categories={categories} />
    </div>

  ) : (
    <span></span>
  )

  const renderQuestionnaire = (showQuestionnaire && !showChart) ? (
    <QuestionnaireList handleQuestionSelect={handleQuestionSelect} handleQuestionnaireSubmit={handleQuestionnaireSubmit} questions={questions} />
  ) : (!showQuestionnaire && showChart) ? (
    <span></span>
  ) : (
    <div>
      <div className="level10Title">
        <h1>Level 10 Life</h1>
      </div>
      <p></p>
      <div className="getStartedButton">
        <button onClick={handleGetStartedClick}>Get Started</button>
      </div>
    </div>
  );

  return (
    <div className="mainContainer">
      <div className="questionnaire">
      {renderQuestionnaire}
      </div>
      <p></p>
      {renderChart}
    </div>
  );
};

export default App;



