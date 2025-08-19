import React from 'react';
import { Link } from 'react-router-dom';
import './Style/Home.css'; // Usaremos o novo CSS abaixo

// Componente reutilizável para os cards de serviço
const ServiceCard = ({ title, description }) => (
  <div className="service-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to="/servicos" className="card-link">Ver detalhes</Link>
  </div>
);

const Home = () => {
  return (
    <div className="home-page">
      {/* Seção Principal (Hero) */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1 className="hero-title">Assessoria Previdenciária Humanizada</h1>
          <p className="hero-subtitle">Análise especializada para garantir o seu futuro e proteger seus direitos.</p>
          <div className="hero-actions">
            <Link to="/contato" className="btn btn-primary">Fale Comigo</Link>
            <Link to="/servicos" className="btn btn-outline">Meus Serviços</Link>
          </div>
        </div>
      </section>

      {/* Seção de Especialidades */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Como posso te ajudar</h2>
            <p className="section-description">Atuação dedicada em todas as áreas do Direito Previdenciário.</p>
          </div>
          <div className="services-grid">
            <ServiceCard 
              title="Aposentadorias"
              description="Análise completa para todos os tipos de aposentadoria, planejando o melhor benefício para você."
            />
            <ServiceCard 
              title="Benefícios por Incapacidade"
              description="Suporte completo para solicitar auxílio-doença, aposentadoria por invalidez e auxílio-acidente."
            />
            <ServiceCard 
              title="Pensões e Auxílios"
              description="Orientação para garantir a pensão por morte e outros benefícios assistenciais como o BPC/LOAS."
            />
            <ServiceCard 
              title="Revisão de Benefícios"
              description="Análise detalhada do seu benefício atual para garantir que o cálculo está correto e que você recebe o valor justo."
            />
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2>Uma abordagem dedicada ao seu caso</h2>
            <p>Entendo que cada história é única. Por isso, ofereço um atendimento pessoal e desenvolvo estratégias personalizadas para alcançar o melhor resultado para você, com transparência em todas as etapas.</p>
            <ul className="about-features">
              <li>Análise detalhada do seu histórico</li>
              <li>Planejamento estratégico e individualizado</li>
              <li>Acompanhamento próximo do seu processo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Seção de Depoimento */}
      <section className="testimonial-section">
        <div className="container">
          <blockquote>
            "Profissional extremamente competente que transformou minha situação previdenciária. Gratidão pelo cuidado e pela agilidade."
            <cite>- Ana Lúcia, Cliente Satisfeita</cite>
          </blockquote>
        </div>
      </section>

      {/* Seção de Chamada para Ação (CTA) */}
      <section className="cta-section">
        <div className="container">
          <h2>Pronto(a) para garantir seu futuro?</h2>
          <Link to="/contato" className="btn btn-primary">Solicite uma Análise do seu Caso</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
