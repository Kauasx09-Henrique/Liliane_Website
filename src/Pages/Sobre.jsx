import React from 'react';
import { Link } from 'react-router-dom';
import './Style/Sobre.css';
// IMPORTANTE: Mova a foto 'icon_women.png' para a pasta 'src/assets'.
import fotoProfissional from '../../public/icon_women.png'; 

// Ícones para a seção de pilares
const HandshakeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8.05a4 4 0 0 0-8 0"/><path d="M4 14.05V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.95"/><path d="m6 14 1.5-2.5 2.5 2.5 2-4 2.5 4 1.5-2.5"/></svg>;
const EyeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;

function Sobre() {
  return (
    <div className="sobre-page">
      <div className="sobre-hero">
        <div className="container">
          <h1 className="hero-title">Dedicação e experiência a serviço do seu direito</h1>
          <p className="hero-subtitle">Conheça a trajetória e os valores que guiam meu trabalho.</p>
        </div>
      </div>

      <section className="sobre-main-content">
        <div className="container content-grid">
          <div className="image-container">
            <img src={fotoProfissional} alt="Dra. Liliane Castro do Nascimento" className="profile-pic" />
          </div>
          <div className="text-container">
            <h2>Olá, sou a Dra. Liliane Castro do Nascimento</h2>
            <p>Com mais de uma década de atuação focada em Direito Previdenciário, minha paixão é transformar a complexidade das leis em resultados concretos para meus clientes. Eu sei que cada caso carrega uma história única e a esperança de um futuro mais tranquilo.</p>
            <p>É por isso que meu compromisso vai além do processo. Ofereço um atendimento próximo e humano, garantindo que você entenda cada etapa e se sinta seguro(a) do início ao fim. Luto incansavelmente para que seus direitos sejam não apenas reconhecidos, mas plenamente garantidos.</p>
          </div>
        </div>
      </section>

      <section className="pilares-section">
        <div className="container">
          <div className="section-header">
            <h2>Pilares do meu trabalho</h2>
          </div>
          <div className="pilares-grid">
            <div className="pilar-card">
              <HandshakeIcon />
              <h3>Compromisso</h3>
              <p>Dedicação total a você e ao seu caso, buscando a melhor estratégia para o seu objetivo.</p>
            </div>
            <div className="pilar-card">
              <EyeIcon />
              <h3>Transparência</h3>
              <p>Comunicação clara e honesta sobre cada passo do processo, para que você tenha total confiança.</p>
            </div>
            <div className="pilar-card">
              <StarIcon />
              <h3>Excelência</h3>
              <p>Busca contínua por conhecimento e os melhores resultados, aplicando anos de experiência a seu favor.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sobre;
