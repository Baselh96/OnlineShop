import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/navBar';
import LandingPage from './pages/landingPage';
import OrderPage from './pages/order';
import FavoritePage from './pages/favorite';
import CartPage from './pages/cart';
import LoginPage from './pages/login';
import ProfilPage from './pages/profil';
import MyArticlesPage from './pages/myArticles';


function App() {
  return (
    <>
    <NavBar />
    <Routes className="App">
      
        <Route path="/" element={<LandingPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/myArticles" element={<MyArticlesPage />} />
        
        <Route path="*" element={<LandingPage />} />
    </Routes>
    </>
  );
}

export default App;
