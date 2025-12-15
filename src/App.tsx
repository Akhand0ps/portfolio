import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import EngineeringSummary from './components/EngineeringSummary';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import EngineeringPrinciples from './components/EngineeringPrinciples';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <EngineeringSummary />
        <Skills />
        <Projects />
        <Experience />
        <EngineeringPrinciples />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
