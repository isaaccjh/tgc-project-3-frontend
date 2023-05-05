import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
      </Router>
    </React.Fragment>
  );
}

export default App;
