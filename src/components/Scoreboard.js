import React from 'react';

export default function ScoreBoard(props) {
   return(
       <div className="scoreContainer">
            <div className="currentScore">
            <span className="scoreLabel">Current Score: </span> {props.currentScore}
            </div>
            <div className="bestScore">
            <span className="scoreLabel">Best Score: </span> {props.bestScore}
            </div>
       </div>
   ) 
}