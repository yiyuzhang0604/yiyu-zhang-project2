import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home.jsx'; 
import Instruction from './Instruction.jsx';
import './Home.css'; 




function App() {
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

               
                  <Link to="/instruction" className="list">Instruction</Link>
                  </l1>

                
                  
                 

                  
                  
              </nav>

              <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/instruction" element={<Instruction />} />
              </Routes>
            
            
            </Router>

          </div>
          

      </div>

      
  );
}

export default App; 