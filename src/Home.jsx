import './Home.css'; 
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './instruction'; 

function Home() {
    return (
        <div>
            <BrowserRouter>

            
            <div class="title">
                Welcome to Wordle! 
            </div>

            
            <button>
                <Link to="/instruction">Insructions on how to play: </Link>
            </button>
            

            <div class="title">
                Choose your difficulty
            </div>

            <button>Easy</button>
            <button>Medium</button>
            <button>Hard</button>
            </BrowserRouter>


        </div>
    ); 
}

export default Home; 