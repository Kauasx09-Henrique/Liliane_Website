import React, { useState } from 'react';
import './Style/Contato.css';

// Ícones SVG para a página
const WhatsappIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Formata a mensagem com os dados do formulário
    const message = `Olá, Dra. Liliane! Gostaria de entrar em contato.\n\n*Nome:* ${formData.nome}\n*E-mail:* ${formData.email}\n*Telefone:* ${formData.telefone}\n*Assunto:* ${formData.assunto}\n\n*Mensagem:*\n${formData.mensagem}`;

    // 2. Codifica a mensagem para ser usada em uma URL
    const encodedMessage = encodeURIComponent(message);
    
    // 3. Define o número de WhatsApp
    const whatsappNumber = "556184505988";

    // 4. Cria o link completo do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // 5. Abre o link em uma nova aba (inicia a conversa no WhatsApp)
    window.open(whatsappUrl, '_blank');

    // 6. Limpa o formulário após o envio
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
  };

  // Informações de contato
  const whatsappNumber = "556184505988";
  const emailAddress = "lilianems143liliane@hotmail.com";
  const address = "EQNO 12 / 14 Setor, Ceilândia - DF, 72255-551";
  const phoneNumber = "+55 (61) 8450-5988";
  const horarioAtendimento = "Segunda a Sexta, 9h às 18h";

  return (
    <div className="contato-page">
      <div className="contato-container">
        <div className="contato-header">
          <h1 className="section-title">Entre em Contato</h1>
          <p className="section-subtitle">
            Estou à disposição para tirar suas dúvidas e agendar uma consulta. Envie sua mensagem ou visite o escritório.
          </p>
        </div>

        <div className="contato-content">
          {/* Coluna da Esquerda: Informações de Contato */}
          <div className="contact-info-column">
             {/* Cards de contato (WhatsApp, E-mail, etc.) */}
             <div className="contact-card">
               <div className="contact-icon"><PhoneIcon /></div>
               <h3>Telefone</h3>
               <p>Entre em contato diretamente pelo telefone.</p>
               <a href={`tel:${phoneNumber}`} className="contact-link">
                 {phoneNumber}
               </a>
             </div>
             <div className="contact-card">
               <div className="contact-icon"><MailIcon /></div>
               <h3>E-mail</h3>
               <p>Para dúvidas detalhadas ou envio de documentos.</p>
               <a href={`mailto:${emailAddress}`} className="contact-link">
                 {emailAddress}
               </a>
             </div>
             <div className="contact-card">
               <div className="contact-icon"><MapPinIcon /></div>
               <h3>Endereço</h3>
               <p>Atendimento presencial com hora marcada.</p>
               <span className="contact-address">{address}</span>
             </div>
             <div className="contact-card">
               <div className="contact-icon"><ClockIcon /></div>
               <h3>Horário de Atendimento</h3>
               <p>Confira nossos horários disponíveis.</p>
               <span className="contact-hours">{horarioAtendimento}</span>
             </div>
          </div>

          {/* Coluna da Direita: Formulário e Mapa */}
          <div className="form-map-column">
            <div className="form-container">
              <h3>Envie sua Mensagem Direto no WhatsApp</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input type="text" name="nome" placeholder="Seu nome completo" value={formData.nome} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Seu e-mail" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <input type="tel" name="telefone" placeholder="Seu telefone" value={formData.telefone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <select name="assunto" value={formData.assunto} onChange={handleChange} required>
                    <option value="">Selecione o assunto</option>
                    <option value="Aposentadoria">Aposentadoria</option>
                    <option value="Pensão por Morte">Pensão por Morte</option>
                    <option value="Auxílio-Doença">Auxílio-Doença</option>
                    <option value="Revisão de Benefício">Revisão de Benefício</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea name="mensagem" placeholder="Sua mensagem" rows="5" value={formData.mensagem} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="submit-button">
                  <WhatsappIcon /> Enviar via WhatsApp
                </button>
              </form>
            </div>

            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d959.8183738806256!2d-48.13420681543867!3d-15.78952652287163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1755630387840!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Escritório"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;
