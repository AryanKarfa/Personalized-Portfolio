import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ParticlesBackground from './components/ParticlesBackground';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 to-black text-white">
      <Navbar />
      <ParticlesBackground />
      <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects/>
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm bg-black border-t border-cyan-800/20">
        © {new Date().getFullYear()} Aryan Karfa • Crafted with 🔥 and Framer Motion
      </footer>
    </div>
  );
}

export default App;
