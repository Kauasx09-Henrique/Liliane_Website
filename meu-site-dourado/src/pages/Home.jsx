// src/pages/Home.js

import React, { useEffect } from 'react';
import AOS from 'aos';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './Home.css';

// Componente para os números que se animam
function StatItem({ number, suffix, label }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="stat-item" data-aos="fade-up" ref={ref}>
      <span className="stat-number">
        {inView ? <CountUp start={0} end={number} duration={2.5} /> : '0'}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="home-page">
      {/* ========== SEÇÃO HERO COM PARALLAX E NOVO LAYOUT ========== */}
      <section className="hero-section-v4"> {/* <-- NOVA CLASSE AQUI */}
        <Parallax speed={-20} className="hero-parallax-bg-wrapper">
          <div className="hero-background-image"></div>
        </Parallax>
        <div className="hero-overlay-dark"></div> {/* <-- OVERLAY ESCURO */}
        <div className="hero-content-v4" data-aos="fade-up"> {/* <-- NOVA CLASSE AQUI */}
          <h1>
  Sua aposentadoria planejada, <br /> seu futuro garantido.
</h1>
<p>Assessoria Previdenciária por Liliane Castro</p>
          {/* O CTA button pode ser movido para uma seção abaixo ou um botão no header,
              ou adicionado aqui de outra forma se for essencial logo no Hero */}
        </div>
        <div className="scroll-down-indicator">
            <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </section>

      {/* ========== SEÇÃO DIFERENCIAIS ========== */}
      <section className="features-section-light">
        <h2 className="section-title" data-aos="fade-up">Diferenciais que Fazem a Diferença</h2>
        <div className="features-grid">
          {/* Card 1 */}
          <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3>Agilidade e Eficiência</h3>
            <p>Analisamos seu caso e traçamos a melhor estratégia para acelerar seu processo, evitando atrasos desnecessários.</p>
          </div>
          {/* Card 2 */}
          <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <h3>Segurança e Precisão</h3>
            <p>Nossa análise detalhada de documentos e legislação garante que seu requerimento seja feito corretamente da primeira vez.</p>
          </div>
          {/* Card 3 */}
          <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" /></svg>
            </div>
            <h3>Comunicação Clara</h3>
            <p>Traduzimos o "previdenciarês" para você. Entenda cada etapa do seu processo sem jargões complicados.</p>
          </div>
        </div>
      </section>
      
      {/* ========== SEÇÃO DE RESULTADOS COM NÚMEROS ANIMADOS ========== */}
      <section className="stats-section">
        <StatItem number={500} suffix="+" label="Casos Analisados" />
        <div className="stats-divider"></div>
        <StatItem number={10} suffix="+" label="Anos de Experiência" />
        <div className="stats-divider"></div>
        <StatItem number={98} suffix="%" label="de Clientes Satisfeitos" />
      </section>

      {/* ========== SEÇÃO PREVIA DE TESTEMUNHO ========== */}
      <section className="testimonial-preview-section">
        <div className="testimonial-content" data-aos="fade-right">
          <span className="decorative-quote">“</span>
          <blockquote>
            "O planejamento previdenciário que recebi me deu clareza e, principalmente, segurança para o futuro. Serviço excepcional!"
          </blockquote>
          <cite>– João P., Autônomo</cite>
        </div>
      </section>

      {/* ========== SEÇÃO FINAL CTA ========== */}
      <section className="final-cta-section">
        <div data-aos="zoom-in-up">
          <h2>Pronto para dar o primeiro passo?</h2>
          <p>Agende uma conversa inicial e descubra como podemos construir juntos o seu caminho para uma aposentadoria tranquila.</p>
          <a href="#contato" className="cta-button-final">Fale com um especialista agora</a>
        </div>
      </section>
    </div>
  );
}

export default Home;