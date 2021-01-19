import React from 'react';

export default function ScoreBoard(props) {
   return(
       <div className="scoreContainer">
            <div className="currentScore">
            Current Score: {props.currentScore}
            </div>
            <div className="bestScore">
            Best Score: {props.bestScore}
            </div>
       </div>
   ) 
}