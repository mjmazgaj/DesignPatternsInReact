import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import MainNav from './components/Nav/MainNav';
import Factory from './components/DesignPatterns/Factory';
import Strategy from './components/DesignPatterns/Strategy';
import Iterator from './components/DesignPatterns/Iterator';
import Observer from './components/DesignPatterns/Observer';
import Visitor from './components/DesignPatterns/Visitor';

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav />
        <div className="container">
          <Routes>
            <Route path="/Factory" element={<Factory />} />
            <Route path="/Strategy" element={<Strategy />} />
            <Route path="/Iterator" element={<Iterator />} />
            <Route path="/Observer" element={<Observer />} />
            <Route path="/Visitor" element={<Visitor />} />
            <Route path="/" element={<Factory />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
