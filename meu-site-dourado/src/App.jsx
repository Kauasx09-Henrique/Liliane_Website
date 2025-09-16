// src/App.jsx

// REMOVEMOS as importações do react-router-dom
import Header from './components/Header'; // Renomeei para Header, como fizemos antes
import Home from './pages/Home';
import SobreMim from './pages/SobreMim';
import Contato from './pages/Contato';
import Testemunhos from './pages/Testemunhos';
import 'aos/dist/aos.css';

import './App.css';

function App() {
  return (
    // A tag <Router> foi removida
    <>
      <Header />
      <main>
        {/* As "páginas" agora são seções com IDs únicos */}
        <section id="home">
          <Home />
        </section>

        <section id="sobre">
          <SobreMim />
        </section>

        <section id="testemunhos">
          <Testemunhos />
        </section>

        <section id="contato">
          <Contato />
        </section>
      </main>
      {/* Adicione um componente de Footer (Rodapé) aqui se tiver um */}
    </>
  );
}

export default App;