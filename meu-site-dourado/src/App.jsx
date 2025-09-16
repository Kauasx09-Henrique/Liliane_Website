// src/App.jsx

import { ParallaxProvider } from 'react-scroll-parallax'; // Importe o Provider
import Header from './components/Header';
import Home from './pages/Home';
import SobreMim from './pages/SobreMim';
import Contato from './pages/Contato';
import Testemunhos from './pages/Testemunhos';
import 'aos/dist/aos.css';

import './App.css';

function App() {
  return (
    // Envolva todo o conteúdo com o ParallaxProvider
    <ParallaxProvider>
      <Header />
      <main>
        <section id="home"> <Home /> </section>
        <section id="sobre"> <SobreMim /> </section>
        <section id="testemunhos"> <Testemunhos /> </section>
        <section id="contato"> <Contato /> </section>
      </main>
    </ParallaxProvider>
  );
}

export default App;