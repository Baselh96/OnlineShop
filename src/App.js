import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <Routes className="App">
      
        <Route path="/" element={<LandingPage />} />
      
        <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
