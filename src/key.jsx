import React from 'react'; 
import './index.css'; 
import {AppContext} from './App';
import { useContext } from 'react';



// when clicking the key, the key val should go up to the board 
function Key({val, big}) {

    const{onPickLetter, onDelete, onEnter} = useContext(AppContext); 
    
    const pickLetter = () => {
        
        if (val === "ENTER") {
            onEnter();
            

        } else if (val === "DELETE") {
            onDelete(); 
        
        }
        else {
            onPickLetter(val); 
            
        }
        
    };
    // if id === big AND big is true 
    return(
    <div className='key' id={big && "big"} onClick={pickLetter}>
        {val}
    </div>
    );

}

export default Key; 