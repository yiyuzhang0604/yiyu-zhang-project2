import React, {useEffect, useContext} from 'react'; 
import Key from './key'; 
import { AppContext } from './App';
import './index.css'; 

function KeyBoard() {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    

    return(
        <div className='keyboard'>

        <div className='firstLine'>
            {keys1.map((key)=> {
            return <Key val={key} />; 
        })}</div>

        <div className='secondLine'>
            {keys2.map((key)=> {
            return <Key val={key} />; 
        })}</div>

        <div className='thirdLine'>
            <Key val={"ENTER"} big/>
            {keys3.map((key)=> {
            return <Key val={key} />; 
        })}
            <Key val={"DELETE"} big/></div>

        </div>
    )


}

export default KeyBoard; 
