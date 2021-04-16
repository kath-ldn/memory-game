//components
import React, { useState, useEffect } from 'react';
import ScoreBoard from './Scoreboard.js';
import MessageBoard from './MessageBoard.js';

// imgs
import boot from '../imgs/boot.png'; import butterfly from '../imgs/butterfly.png';
import chick from '../imgs/chick.png'; import clover from '../imgs/clover.png';
import dragonfly from '../imgs/dragonfly.png'; import fan from '../imgs/fan.png';
import ladybird from '../imgs/ladybird.png'; import leaf from '../imgs/leaf.png';
import moth from '../imgs/moth.png'; import rainbow from '../imgs/rainbow.png';
import rose from '../imgs/rose.png'; import sprout from '../imgs/sprout.png';
import strawberry from '../imgs/strawberry.png'; import sun from '../imgs/sun.png';
import sunflower from '../imgs/sunflower.png'; import worm from '../imgs/worm.png';

export default function CardContainer() {
    const [cards, setCards] = useState({
        boot: false, butterfly: false, chick: false, clover: false,
        dragonfly: false, fan: false, ladybird: false, leaf: false,
        moth: false, rainbow: false, rose: false, sprout: false,
        strawberry: false, sun: false, sunflower: false, worm: false
    });

    const [cardArray, updateArray] = useState([
        {name: 'boot', img: boot}, {name: 'butterfly', img: butterfly},
        {name: 'chick', img: chick}, {name: 'clover', img: clover},
        {name: 'dragonfly', img: dragonfly}, {name: 'fan', img: fan},
        {name: 'ladybird', img: ladybird}, {name: 'leaf', img: leaf},
        {name: 'moth', img: moth}, {name: 'rainbow', img: rainbow},
        {name: 'rose', img: rose}, {name: 'sprout', img: sprout},
        {name: 'strawberry', img: strawberry}, {name: 'sun', img: sun},
        {name: 'sunflower', img: sunflower}, {name: 'worm', img: worm}
    ]);

    const [scores, setScores] = useState({
        currentScore: 0,
        bestScore: 0
    })

    const [outcome, setOutcome] = useState({
        lose: false,
        win: false
    })

    const [message, setMessage] = useState('Click a card to start!')

    function addScore(){
        setScores({...scores, currentScore: scores.currentScore + 1});
    }

    function resetScore(){
        setScores({...scores, currentScore: 0});
    }

    function resetCards(){
        setCards({...cards, 
            boot: false, butterfly: false, chick: false, clover: false,
            dragonfly: false, fan: false, ladybird: false, leaf: false,
            moth: false, rainbow: false, rose: false, sprout: false,
            strawberry: false, sun: false, sunflower: false, worm: false})
    }

    function updateMessage(result){
        if(result === 'win'){
        setMessage('You win!! Play again? Just click another card.')
    } else {
        setMessage('Oh no! You lose. Play again? Just click another card.')
    }
    }

    function resetMessage(){
        setMessage('')
    }

    function resetGame(){
        resetCards();
        resetScore();
        setOutcome({...outcome, lose: false, win: false})
    }

    function resetAll(){
        resetGame();
        setScores({...scores, bestScore: 0, currentScore: 0});
    }

    function gameOver(result){
        if (result === 'lose'){
            updateMessage('lose');
            if (scores.currentScore > scores.bestScore){
                setScores({...scores, bestScore: scores.currentScore}); 
            }
            setOutcome({...outcome, lose: true})
        } else if (result === 'win') {
            updateMessage('win');
            if (scores.currentScore > scores.bestScore){
                setScores({...scores, bestScore: scores.currentScore}); 
            }
            setOutcome({...outcome, win: true})
        }
    }
    
    function checkWin() {
        if(scores.currentScore === 16) {
            gameOver('win');
        }
    }

    function handleClick(card) {
        resetMessage();
        let selection = card.name;
        if (cards[selection] === false) {
            setCards({...cards, [card.name]: true})
            addScore();
        } else {
           gameOver('lose');
        }
    }

   useEffect(() => {
        updateArray(cardArray.sort(() => Math.random() - 0.5));
        if (outcome.lose === true || outcome.win === true){
        resetGame();
        }
        checkWin();
    });

    return(
        <div className="container">
                <MessageBoard message={message} />
            <div className="cardContainer">
                {cardArray.map((card, index) =>
                    <div key={index} className="card" onClick={(event) => {handleClick(card)}}>
                    <img className="cardImage" src={card.img} alt={card.name}/>    
                    <h4 className="cardName" name={card.name}>
                    {card.name} 
                    </h4>
                    </div>)}
            </div>
            <div className="scoreBoard">
                <ScoreBoard currentScore={scores.currentScore} bestScore={scores.bestScore} />
                <button className="reset" onClick={resetAll}>
                    Reset All Scores
                </button>
            </div>
        </div>
    )

}
