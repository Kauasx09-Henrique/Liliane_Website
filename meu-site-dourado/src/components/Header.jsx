// src/components/Header.js

import React, { useState, useEffect } from 'react';
// A importação do 'react-router-dom' não é mais necessária
import './Header.css'; 
import logoImage from '../../public/Logo_lili.png'; // Verifique se o caminho da sua logo está correto

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Este useEffect cuida de destacar o link ativo enquanto o usuário rola a página
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sobre', 'testemunhos', 'contato'];
      const scrollPosition = window.scrollY + 150; // Offset para ativar o link um pouco antes

      for (const sectionId of sections) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveLink(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Limpa o evento ao desmontar o componente para evitar problemas de performance
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        {/* O link da logo agora aponta para o topo da página */}
        <a href="#home" className="nav-logo-container" onClick={handleLinkClick}>
          <img src={logoImage} alt="Linliane Castro Assessoria Previdenciária" className="nav-logo-img" />
        </a>

        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Trocamos NavLink por <a> e 'to' por 'href' */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" className={activeLink === 'home' ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#sobre" className={activeLink === 'sobre' ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>
              Sobre Mim
            </a>
          </li>
          <li>
            <a href="#testemunhos" className={activeLink === 'testemunhos' ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>
              Testemunhos
            </a>
          </li>
          <li>
            <a href="#contato" className={activeLink === 'contato' ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;