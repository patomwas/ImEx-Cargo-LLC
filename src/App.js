
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home'
import Services from './Components/Services';
import Tracker from './Components/Tracker';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='App' >
      <Router>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route  path='/tracker' element={<Tracker/>} />
          <Route  path='/service' element={<Services/>} />
          <Route  path='/contact' element={<Contact/>} />
        </Routes>
    </Router>
    </div>
    
  );
}

export default App;
