// src/pages/Testemunhos.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';
import Slider from 'react-slick'; // Importa o componente Slider
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Ícones para as aspas e navegação

import './Testemunhos.css'; // O CSS que vamos renovar abaixo

// --- DADOS DOS TESTEMUNHOS ---
const testemunhosData = [
  {
    nome: "Maria S.",
    cargo: "Aposentada",
    texto: "Consegui minha aposentadoria por tempo de contribuição muito mais rápido do que imaginava. A assessoria foi fundamental para organizar todos os documentos e garantir que o processo corresse sem problemas."
  },
  {
    nome: "João P.",
    cargo: "Autônomo",
    texto: "Eu estava completamente perdido sobre como contribuir corretamente para o INSS. O planejamento previdenciário que recebi me deu clareza e, principalmente, segurança para o futuro. Serviço excepcional!"
  },
  {
    nome: "Ana L.",
    cargo: "Servidora Pública",
    texto: "Excelente profissional! Me ajudou a averbar um tempo de serviço especial que o INSS não estava reconhecendo. Sua precisão técnica fez toda a diferença. Recomendo muito!"
  },
  {
    nome: "Pedro R.",
    cargo: "Comerciante",
    texto: "Atendimento impecável! Todas as minhas dúvidas foram esclarecidas e o processo foi muito mais tranquilo do que eu esperava. Sinto-me seguro com o meu futuro."
  },
  {
    nome: "Lúcia F.",
    cargo: "Professora",
    texto: "A Linliane demonstrou um conhecimento profundo. Me senti totalmente amparada e confiante durante todo o processo da minha aposentadoria especial."
  },
];

// --- Componente Customizado para as Setas de Navegação do Carrossel ---
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-40px", zIndex: 10 }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-40px", zIndex: 10 }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};


// --- Componente Principal da Página ---
function Testemunhos() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  // Configurações do Slick Carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Mostra 2 slides por vez em telas maiores
    slidesToScroll: 1,
    autoplay: true, // Auto-play
    autoplaySpeed: 5000, // Troca a cada 5 segundos
    arrows: true, // Mostra as setas de navegação
    nextArrow: <NextArrow />, // Usa nossa seta personalizada
    prevArrow: <PrevArrow />, // Usa nossa seta personalizada
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Mostra 1 slide por vez em tablets
          slidesToScroll: 1,
          arrows: false, // Esconde as setas em telas menores
        }
      }
    ]
  };

  return (
    <div className="testemunhos-section-vibrant">
      <div className="testemunhos-container-vibrant">
        <h1 className="page-title-vibrant" data-aos="fade-up">A Confiança que Inspira</h1>
        <p className="page-subtitle-vibrant" data-aos="fade-up" data-aos-delay="100">
          Veja o que nossos clientes satisfeitos têm a dizer sobre a transformação de seus futuros.
        </p>

        <div className="carousel-wrapper" data-aos="zoom-in" data-aos-delay="200">
          <Slider {...sliderSettings}>
            {testemunhosData.map((testemunho, index) => (
              <div key={index} className="testemunho-slide">
                <div className="testemunho-card-vibrant">
                  <div className="quote-icon-container">
                    <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                  </div>
                  <p className="testemunho-texto-vibrant">"{testemunho.texto}"</p>
                  <div className="autor-info-vibrant">
                    <h4 className="autor-nome-vibrant">{testemunho.nome}</h4>
                    <span className="autor-cargo-vibrant">{testemunho.cargo}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testemunhos;