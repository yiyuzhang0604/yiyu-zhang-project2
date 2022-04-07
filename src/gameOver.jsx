import React, {useContext} from 'react'; 
import { AppContext } from './App';

function GameOver() {
    const{gameOver, setGameOver} = useContext(AppContext); 

    return(
        <div className='gameOver'>
            <h3>{gameOver.win ? "You won the game" : "You failed"}</h3>
        </div>
    )


}
export default GameOver; 