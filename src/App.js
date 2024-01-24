import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import './App.css';
import Home from './pages/home.jsx';
import CellSize from './pages/cellsize.jsx';
import NucleusSize from './pages/nucleussize.jsx';
import Select from './pages/select.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/select" element={<Select/>} />
        <Route path="/cellsize" element={<CellSize/>} />
        <Route path="/nucleussize" element={<NucleusSize/>} />
        </Routes>
    </Router>
  );
}

export default App;
