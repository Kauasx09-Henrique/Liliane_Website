import React from 'react';
import { Outlet } from 'react-router-dom'; // Importante!
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <main className="main-content">
        <Outlet /> {/* É aqui que as páginas (Home, Sobre, etc.) serão renderizadas */}
      </main>
      <Footer />
    </div>
  );
}

export default App;