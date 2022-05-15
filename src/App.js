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
          <HeroSection/>
          <Routes>
              <Route path='/' exact component={Home}/>
              <Route path='/services' component={Services} />
          </Routes>
      </Router>

  );
}

export default App;
