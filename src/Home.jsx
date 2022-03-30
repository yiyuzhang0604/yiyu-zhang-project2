import { useNavigate } from 'react-router-dom'; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Instruction from "./Instruction";
import styles from './Home.css'; 




function Home() {
    return (
        <div>
        <button className={styles.button}>Easy</button>
        <button>Medium</button>
        <button>Hard</button>

        </div>
   


    ); 
}

export default Home; 