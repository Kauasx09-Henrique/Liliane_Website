// src/pages/Contato.jsx

import React,  { useState, useEffect } from 'react';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import './Contato.css'; // Crie um novo arquivo CSS com este nome

function Contato() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada! (Verifique o console para ver os dados)");
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <div className="contact-page-v3">
      {/* ========== CABEÇALHO COM IMAGEM DE FUNDO ========== */}
      <header className="contact-header" data-aos="fade-in">
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>Vamos Construir Seu Futuro?</h1>
          <p>Sua tranquilidade começa com o primeiro passo. Estou aqui para ajudar.</p>
        </div>
      </header>

      {/* ========== ÁREA DE CONTATO PRINCIPAL ========== */}
      <main className="contact-main-content">
        <div className="contact-grid">
          {/* Coluna Esquerda: Contato Direto */}
          <div className="direct-info" data-aos="fade-right" data-aos-delay="200">
            <h3>Contato Direto</h3>
            <p>Prefere uma conversa mais rápida? Me chame em um destes canais.</p>
            <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className="contact-card">
              <FontAwesomeIcon icon={faWhatsapp} className="contact-card-icon" />
              <div className="contact-card-text">
                <strong>WhatsApp</strong>
                <span>Clique para iniciar a conversa</span>
              </div>
            </a>
            <a href="mailto:SEUEMAIL" className="contact-card">
              <FontAwesomeIcon icon={faEnvelope} className="contact-card-icon" />
              <div className="contact-card-text">
                <strong>E-mail</strong>
                <span>contato@linlianecastro.com.br</span>
              </div>
            </a>
          </div>

          {/* Coluna Direita: Formulário */}
          <div className="form-container" data-aos="fade-left" data-aos-delay="400">
            <h3>Ou envie uma mensagem</h3>
            <p>Preencha o formulário e retornarei o mais breve possível.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Seu Nome</label>
                <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Seu E-mail</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="mensagem">Como posso ajudar?</label>
                <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">
                Enviar Mensagem
                <FontAwesomeIcon icon={faPaperPlane} className="button-icon" />
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contato;