import React from 'react';
import './Style/Depoimentos.css';

const testimonials = [
  {
    quote: "Consegui minha aposentadoria muito antes do que imaginava. A Dra. Liliane foi excelente e muito atenciosa do início ao fim!",
    author: "João Carlos Silva",
    role: "Aposentado",
  },
  {
    quote: "Processo de pensão por morte resolvido com agilidade e sem burocracia. Só tenho a agradecer pela dedicação e profissionalismo.",
    author: "Maria Santos",
    role: "Pensionista",
  },
  {
    quote: "Tive meu benefício negado e não sabia o que fazer. A Dra. Liliane reverteu a decisão e hoje recebo o que é meu por direito. Recomendo!",
    author: "Carlos Pereira",
    role: "Segurado do INSS",
  },
  {
    quote: "Atendimento excepcional! Dra. Liliane explicou todo o processo de forma clara e conseguiu meu benefício em tempo recorde.",
    author: "Ana Oliveira",
    role: "Cliente",
  },
  {
    quote: "Profissional extremamente competente. Resolveu uma questão complexa da minha aposentadoria que estava parada há anos.",
    author: "Roberto Alves",
    role: "Aposentado",
  },
  {
    quote: "Simplesmente fantástica! Conseguiu o auxílio-doença para meu marido que estava há meses sem receber. Gratidão eterna!",
    author: "Fernanda Costa",
    role: "Esposa de segurado",
  }
];

function Depoimentos() {
  return (
    <div className="depoimentos-page">
      <div className="depoimentos-container">
        <h1 className="section-title">A confiança de quem já teve seus direitos garantidos</h1>
        <p className="section-subtitle">
          Resultados que falam por si. Veja o que alguns de meus clientes têm a dizer.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <p className="quote">{item.quote}</p>
              <div className="author-info">
                 <p className="author-name">{item.author}</p>
                 <p className="author-role">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Depoimentos;
