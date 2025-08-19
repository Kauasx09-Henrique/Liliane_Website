import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
// IMPORTANTE: Mova sua logo para a pasta 'src/assets' para este caminho funcionar.
import logo from '../../public/Logo_liliane.png'; 

function Header() {
  // Substitua pelo nome real
  const professionalName = "Liliane Castro"; 
  
  // Estado para controlar a abertura do menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para fechar o menu ao clicar em um link (útil no mobile)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <Link to="/" className="logo-container" onClick={handleLinkClick}>
          <img src={logo} alt="Logo do escritório" className="logo" />
          <h1 className="professional-name">{professionalName}</h1>
        </Link>

        {/* Ícone do Menu Hambúrguer (só aparece em telas menores) */}
        <button 
          className={`mobile-menu-icon ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navegação Principal */}
        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={handleLinkClick}>Início</NavLink>
          <NavLink to="/sobre" onClick={handleLinkClick}>Sobre Mim</NavLink>
          <NavLink to="/servicos" onClick={handleLinkClick}>Serviços</NavLink>
          <NavLink to="/depoimentos" onClick={handleLinkClick}>Depoimentos</NavLink>
          <NavLink to="/contato" onClick={handleLinkClick}>Contato</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
