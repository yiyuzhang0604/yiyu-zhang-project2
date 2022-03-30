import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'; 
import Instruction from './Instruction';
import './Home.css'; 




function App() {
  return (
      <div>
          <div className="app">
            <Router>

            
              <nav>
                  <h1>Welcome to Wordle</h1>
                  <l1>
                  <Link to="/Home" className="list">Home</Link>
                  
                  </l1>

                <l1>

               
                  <Link to="/Instruction" className="list">Instruction</Link>
                  </l1>

                
                  
                 

                  
                  
              </nav>

              <Routes>
                  <Route path="/Home" element={<Home />} />
                  <Route path="/Instruction" element={<Instruction />} />
              </Routes>
            
            
            </Router>

          </div>
          

      </div>

      
  );
}

export default App; 