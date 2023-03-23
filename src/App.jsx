import React, { Component } from "react";
import './App.css';
import Home from './pages/Home'
import Motivations from './pages/Motivations'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Methodology from "./pages/Methodology";
import Results from "./pages/Results";
import About from "./pages/About";
import Taskbar from "./components/Taskbar";
import Calculator from "./pages/Emissions Calculator";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <Taskbar/>
          <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Motivations" element={<Motivations />} />
            <Route path="/Methodology" element={<Methodology />} />
            <Route path="/Results" element={<Results/>} />
            <Route path="/Calculator" element={<Calculator/>} />
            <Route path="/About" element={<About/>} />
          </Routes>
    
        </Router>
      </div>
    );
  }
}


