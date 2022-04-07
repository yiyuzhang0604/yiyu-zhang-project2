import React from 'react'; 
import {useState} from 'react'; 
import { defaultBoard } from './defaultBoard';
import Letter from './letter'; 
import './index.css'; 


function Board() {
    return (
    
        <div className='board'>
            <div className='row'>
                <Letter pos={0} attempt={0} />
                <Letter pos={1} attempt={0} /> 
                <Letter pos={2} attempt={0} /> 
                <Letter pos={3} attempt={0} /> 
                <Letter pos={4} attempt={0} /> 

            </div>
            <div className='row'>
                <Letter pos={0} attempt={1} />
                <Letter pos={1} attempt={1} /> 
                <Letter pos={2} attempt={1} /> 
                <Letter pos={3} attempt={1} /> 
                <Letter pos={4} attempt={1} /> 

            </div>
            <div className='row'>
                <Letter pos={0} attempt={2} />
                <Letter pos={1} attempt={2} /> 
                <Letter pos={2} attempt={2} /> 
                <Letter pos={3} attempt={2} /> 
                <Letter pos={4} attempt={2} /> 

            </div>

            <div className='row'>
                <Letter pos={0} attempt={3} />
                <Letter pos={1} attempt={3} /> 
                <Letter pos={2} attempt={3} /> 
                <Letter pos={3} attempt={3} /> 
                <Letter pos={4} attempt={3} /> 

            </div>
            <div className='row'>
                <Letter pos={0} attempt={4} />
                <Letter pos={1} attempt={4} /> 
                <Letter pos={2} attempt={4} /> 
                <Letter pos={3} attempt={4} /> 
                <Letter pos={4} attempt={4} /> 

            </div>

            <div className='row'>
                <Letter pos={0} attempt={5} />
                <Letter pos={1} attempt={5} /> 
                <Letter pos={2} attempt={5} /> 
                <Letter pos={3} attempt={5} /> 
                <Letter pos={4} attempt={5} /> 

            </div>

            <div className='row'>
                <Letter pos={0} attempt={6} />
                <Letter pos={1} attempt={6} /> 
                <Letter pos={2} attempt={6} /> 
                <Letter pos={3} attempt={6} /> 
                <Letter pos={4} attempt={6} /> 

            </div>

            

            
        </div>
        
    )

}
export default Board; 


