import React from "react";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'

function App() {
  return (
      <Router>
          <NavBar/>
          <Routes>
              <Route path='/' exact/>
          </Routes>
      </Router>

  );
}

export default App;
