import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import LandingPage from './pages/landingPage/LandingPage';
import NavBar from './components/navBar/NavBar';


function App() {
  return (
    <>
    <NavBar />
    <Routes className="App">
      
        <Route path="/" element={<LandingPage />} />
      
        <Route path="*" element={<LandingPage />} />
    </Routes>
    </>
  );
}

export default App;
