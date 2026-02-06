import SplineBackground from './components/SplineBackground';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';

document.addEventListener('wheel', (e) => {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && (e.key === '=' || e.key === '-' || e.key === '0')) {
    e.preventDefault();
  }
});

function App() {
  return (
    <div className="app-container">
      <SplineBackground />

      <main style={{ 
        position: 'relative', 
        zIndex: 1, 
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: '"Inter", system-ui, sans-serif',
      }}>
        <Hero />
        <About />
        <Expertise />
      </main>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }
      `}</style>
    </div>
  );
}

export default App;