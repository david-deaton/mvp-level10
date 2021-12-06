// import React, { useState } from 'react';

// const Question = ( { handleChange, questionSet, categoryName } ) => {
//   var index = 0;
//   const [currentQuestion, setCurrentQuestion] = useState(questionSet[index])

//   return (
//     <div>
//       <fieldset>
//         <legend>{categoryName}</legend>
//         {
//               <div>
//                 <p>{currentQuestion.question}</p>

//                 <span>Disagree
//                 {[...Array(10)].map((bubble, i) => {
//                   const bubbleValue = i + 1;
//                   return (
//                     <label>
//                       <input
//                         type="radio"
//                         name="bubbleVal"
//                         value={{
//                           sentiment: currentQuestion.sentiment,
//                           numericValue: bubbleValue
//                         }}
//                         // sentiment={currentQuestion.sentiment}
//                         // category={categoryName}
//                         onClick={() => {
//                           console.log(`Hey value is ${bubbleValue}`);
//                           index++;
//                           setCurrentQuestion(questionSet[index])
//                         }}
//                         onChange={handleChange}
//                       />
//                     </label>
//                   );
//                 })}
//                 Agree</span>
//               </div>

//           }
//       </fieldset>
//     </div>
//   )
// }

// export default Question;