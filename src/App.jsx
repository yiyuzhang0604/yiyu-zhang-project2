import React from 'react'; 
import {createContext} from 'react'; 
import { defaultBoard } from './defaultBoard';
import { useState, useEffect } from 'react';
import Board from './Board'; 
import KeyBoard from './keyboard';
import './index.css'; 
import GameOver from './gameOver';


export const AppContext = createContext(); 



function App() {
    const[board, setBoard] = useState(defaultBoard); 
    const[currentAttempt, setCurrentAttempt] = useState({attempt: 0, position: 0}); 
    const wordsOptions = ["RIGHT","ABORT","POINT","JESUS",
                          "CABIN","COURT","ABOUT","EARTH",
                          "FINAL","ERROR"]; 


    
    const[word, setWord] = useState(""); 
    const[gameOver, setGameOver] = useState({gameOver: false, win: false}); 


    useEffect(() => {
      setWord(wordsOptions[Math.floor(Math.random() * wordsOptions.length)]);
    },[]); 
    console.log(word); 



    //functions that handle picking letter event 
    const onPickLetter = (val) => {
      if(currentAttempt.attempt > 6) return; 
      // get current letter 
      const currBoard = [...board];
      currBoard[currentAttempt.attempt][currentAttempt.position] = val
      setBoard(currBoard);
      setCurrentAttempt({...currentAttempt, position: currentAttempt.position + 1}); 

    }

    // functions that handle delete event 
    const onDelete =() => {
      if(currentAttempt.position === 0) return; 
      const currBoard = [...board];
      currBoard[currentAttempt.attempt][currentAttempt.position - 1] = ""; 
      setBoard(currBoard); 
      setCurrentAttempt({...currentAttempt, position: currentAttempt.position - 1 }); 


    }
    // functions that handle enter event 
    const onEnter = () => {
      if (currentAttempt.position !== 5) {
        alert("You need to enter 5 letters"); 
        return; 
    }
    // update the attempt count
    setCurrentAttempt({attempt: currentAttempt.attempt + 1, position:0}); 

    let currWord = ""; 
    for (let i = 0; i < 5; i++) {
      currWord += board[currentAttempt.attempt][i]; 
    }

    if (currWord === word) {
      alert("You won the game"); 
      setGameOver({gameOver: true, won: true}); 
      return; 
      

    }

    }
    return(
        <div className="app">
            <AppContext.Provider value={{board, 
                                        setBoard, 
                                        currentAttempt, 
                                        setCurrentAttempt, 
                                        onPickLetter,
                                        onDelete,
                                        onEnter,
                                        word,
                                        gameOver,
                                        setGameOver}}>
              <div className="center">
                <Board />
                <KeyBoard />

              </div>
            
            

            </AppContext.Provider>
        </div>

    )

}

export default App; 
