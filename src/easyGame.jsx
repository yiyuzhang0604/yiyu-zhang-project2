import React from 'react'; 
import './index.css'; 
import {createContext} from 'react'; 
import { defaultBoard } from './defaultBoard';
import { useState } from 'react';
import Board from './Board'; 
//import KeyBoard from './keyboard'; 

export const AppContext = createContext(); 



function EasyGame() {
    const[board, setBoard] = useState(defaultBoard); 
    return(
        <div className='app'>
            <AppContext.Provider value={board,setBoard}>
            
            <Board />


            </AppContext.Provider>
        </div>

    )

}

export default EasyGame; 
