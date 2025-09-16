// src/pages/SobreMim.js

import React, { useEffect } from 'react';
import AOS from 'aos';
import './SobreMim.css'; // Vamos usar o mesmo nome de arquivo, com o conteúdo novo abaixo

function SobreMim() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="sobre-acolhedor-page">
      {/* ========== BANNER DE BOAS-VINDAS ========== */}
      <section className="welcome-banner">
        <div className="welcome-content" data-aos="fade-up">
          <h1 className="welcome-title">O caminho para a sua tranquilidade começa com uma boa orientação</h1>
          <p className="welcome-subtitle">
            Acredito que cada jornada de trabalho merece ser coroada com uma aposentadoria segura. Meu papel é ser a especialista ao seu lado, garantindo que seus direitos sejam plenamente reconhecidos.
          </p>
        </div>
      </section>

      {/* ========== BIOGRAFIA E RETRATO ========== */}
      <section className="bio-portrait-section">
        <div className="bio-grid">
          <div className="bio-image-container" data-aos="fade-right">
            <img 
              src="https://cdn.pixabay.com/photo/2025/05/17/17/34/ai-generated-9606083_640.png"
              alt="Retrato de Linliane Castro"
              className="bio-image"
            />
          </div>
          <div className="bio-text-container" data-aos="fade-left">
            <h2 className="bio-title">Olá, sou Linliane Castro</h2>
            <p>
              Desde o início da minha carreira, dediquei-me a entender as nuances do sistema previdenciário, não apenas como um conjunto de leis, mas como o guardião do futuro de milhões de brasileiros. Minha paixão é transformar a ansiedade e a incerteza de um processo burocrático em confiança e clareza.
            </p>
            <p>
              Fundei minha assessoria para criar um espaço onde cada cliente é ouvido com atenção e cada caso é tratado com a máxima precisão técnica e empatia. Para mim, o sucesso é ver você alcançar o futuro que planejou, com a segurança que merece.
            </p>
          </div>
        </div>
      </section>
      
      {/* ========== MINHA ABORDAGEM ========== */}
      <section className="approach-section">
        <h2 className="section-title" data-aos="fade-up">Minha Abordagem</h2>
        <div className="approach-grid">
          {/* Item 1 */}
          <div className="approach-item" data-aos="fade-up">
            <h3 className="approach-title">Escuta Ativa</h3>
            <p>O ponto de partida é sempre a sua história. Dedico tempo para entender suas necessidades, sua carreira e seus objetivos de vida.</p>
          </div>
          {/* Item 2 */}
          <div className="approach-item" data-aos="fade-up" data-aos-delay="150">
            <h3 className="approach-title">Planejamento Detalhado</h3>
            <p>Com base em uma análise técnica profunda, desenho a melhor estratégia para o seu caso, otimizando tempo e recursos.</p>
          </div>
          {/* Item 3 */}
          <div className="approach-item" data-aos="fade-up" data-aos-delay="300">
            <h3 className="approach-title">Comunicação Simples</h3>
            <p>Traduções claras para o "previdenciarês". Mantenho você informado de cada etapa, garantindo que não haja dúvidas no caminho.</p>
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="final-cta-warm">
          <div data-aos="zoom-in-up">
              <h2>Vamos conversar sobre o seu futuro?</h2>
              <p>Estou à disposição para analisar seu caso e mostrar como podemos, juntos, construir o caminho para a sua aposentadoria ideal.</p>
              <button className="cta-button">Agendar uma conversa</button>
          </div>
      </section>
    </div>
  );
}

export default SobreMim;