import React from 'react';
import { Link } from 'react-router-dom';
import './Style/Servicos.css';

// Lista de serviços mais detalhada com ícones e descrições
const servicosList = [
  {
    icon: '👵',
    title: 'Aposentadoria por Idade',
    description: 'Assessoria completa para garantir sua aposentadoria ao atingir a idade mínima exigida.'
  },
  {
    icon: '⏳',
    title: 'Aposentadoria por Tempo de Contribuição',
    description: 'Análise detalhada do seu tempo de contribuição para planejar e solicitar o benefício.'
  },
  {
    icon: '❤️',
    title: 'Pensão por Morte',
    description: 'Apoio e agilidade para garantir o direito dos dependentes após o falecimento do segurado.'
  },
  {
    icon: '�',
    title: 'Auxílio por Incapacidade',
    description: 'Orientação para solicitar auxílio-doença ou aposentadoria por invalidez.'
  },
  {
    icon: '🤝',
    title: 'Benefício Assistencial (BPC/LOAS)',
    description: 'Apoio na solicitação do benefício para idosos e pessoas com deficiência de baixa renda.'
  },
  {
    icon: '📊',
    title: 'Planejamento Previdenciário',
    description: 'Estudo completo do seu histórico para otimizar o valor e a data da sua aposentadoria.'
  },
   {
    icon: '🔍',
    title: 'Revisão de Benefícios',
    description: 'Análise de benefícios já concedidos para identificar e corrigir erros, aumentando o valor mensal.'
  }
];

function Servicos() {
  return (
    <div className="servicos-page">
      <div className="servicos-container">
        <h1 className="section-title">Como posso ajudar você</h1>
        <p className="section-subtitle">
          Ofereço uma assessoria jurídica completa e especializada para cada etapa da sua vida contributiva.
        </p>
        
        <div className="servicos-grid">
          {servicosList.map((servico, index) => (
            <div key={index} className="servico-card">
              <div className="servico-card-content">
                <div className="servico-icon">{servico.icon}</div>
                <h3>{servico.title}</h3>
                <p>{servico.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="servicos-cta">
          <p>Não encontrou o que procurava ou tem um caso específico?</p>
          <Link to="/contato" className="cta-button">Solicite uma Análise do seu Caso</Link>
        </div>
      </div>
    </div>
  );
}

export default Servicos;
