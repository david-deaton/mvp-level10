import React, { useState } from 'react';
import findLowestTwo from '../../methods/findLowestTwo.js';

const Suggestions = ({ suggestionsList, series, categories }) => {

  const [lowestAreas, setLowestAreas] = useState([1, 2]);
  const lowestTwo = findLowestTwo(series);

  // const [currentFirstSuggestion, setCurrentFirstSuggestion] = useState([]);
  // const showSuggestion = (index) => {

  // };
  // const handleRandomizeSuggestions = (event) => {
  //   return (
  //     <div>
  //       <span>{randomSuggestion(lowestTwo[0])}</span>
  //       <span>{randomSuggestion(lowestTwo[1])}</span>
  //     </div>
  //   );
  // };

  const randomSuggestion = (index) => {
    return suggestionsList[index + 1][Math.floor(Math.floor(Math.random() * suggestionsList[index + 1].length))];
  };


  return (
    <div className="suggestions">
      <h2>The two areas for improvement: </h2>
      <h3>{categories[lowestTwo[0]].title} | {categories[lowestTwo[1]].title}</h3>
      <p></p>
      <h2>Suggestions of the Day</h2>
      <h3>{randomSuggestion(lowestTwo[0])}</h3>
      <h3>{randomSuggestion(lowestTwo[1])}</h3>
      <p></p>
      <button>Restart</button>
    </div>
  );
};

export default Suggestions;