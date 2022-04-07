import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EasyGame from './easyGame';
import Instruction from './instruction';
import './index.css'; 

function Home() {
    return (
        <div>
        <div className="app">
            <Router>

              <nav>
                  <h1>Welcome to Wordle</h1>
                  <l1>
                  <Link to="/home" className="list">Home</Link>
                  
                  </l1>

                  <l1>
                  <Link to="/easyGame" className="list">EasyGame</Link>
                  
                  </l1>



                <l1>

               
                  <Link to="/instruction" className="list">Instruction</Link>
                  </l1>
                  
              </nav>

              <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/easyGame" element={<EasyGame />} />
                  <Route path="/instruction" element={<Instruction />} />
              </Routes>
            
            
            </Router>

          </div>

        </div>
   


    ); 
}

export default Home; 