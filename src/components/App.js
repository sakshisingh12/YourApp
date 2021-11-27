import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import Therapists from './pages/Therapists';
import Helpline from './pages/Helpline';
import Navbar from "./Navbar/Navbar"
import './App.css';


function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path = '/' exact element={<Home/>} />
          <Route path = '/quotes' element={<Quotes/>} />
          <Route path = '/therapists' element={<Therapists/>}  />
          <Route path = '/helpline' element={<Helpline/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
