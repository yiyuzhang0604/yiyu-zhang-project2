import React from 'react';
import {useContext} from 'react'; 
import {AppContext} from './App'; 
import'./index.css'; 



function Letter({pos, attempt}) {
    const{board,word, currentAttempt} = useContext(AppContext);
    const letter = board[attempt][pos]; 
    const correct = word[pos] === letter 
    const wrongPos = !correct && letter !== "" && word.includes(letter);
    const status = (currentAttempt.attempt > attempt) && (correct ? "green" : wrongPos? "yellow" : "grey"); 

    return (
    <div className='letter' id={status}>{letter}</div>
    );

}
export default Letter; 