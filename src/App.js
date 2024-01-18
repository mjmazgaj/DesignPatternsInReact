import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import MainNav from './components/Nav/MainNav';
import Pattern1 from './components/DesignPatterns/Pattern1';
import Pattern2 from './components/DesignPatterns/Pattern2';
import Pattern3 from './components/DesignPatterns/Pattern3';
import Pattern4 from './components/DesignPatterns/Pattern4';
import Pattern5 from './components/DesignPatterns/Pattern5';

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav />
        <div className="container">
          <Routes>
            <Route path="/pattern1" element={<Pattern1 />} />
            <Route path="/pattern2" element={<Pattern2 />} />
            <Route path="/pattern3" element={<Pattern3 />} />
            <Route path="/pattern4" element={<Pattern4 />} />
            <Route path="/pattern5" element={<Pattern5 />} />
            <Route path="/" element={<Pattern1 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
