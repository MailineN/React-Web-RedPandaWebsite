import React from "react";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import HeroSection from "./components/HeroSection";

function App() {
  return (
      <Router>
          <NavBar/>
          <Routes>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/services' element={<Services/>} />
          </Routes>
      </Router>

  );
}

export default App;
