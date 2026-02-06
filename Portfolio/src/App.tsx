import SplineBackground from './components/SplineBackground';

function App() {
  return (
    <div className="app-container">
      <SplineBackground />

      <main style={{ 
        position: 'relative', 
        zIndex: 1, 
        minHeight: '200vh', 
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: '"Inter", system-ui, sans-serif',
      }}>
        
        <section style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 20px'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            background: 'linear-gradient(to right, #ffffff, #a1a1a1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 10px 30px rgba(0,0,0,0.3)',
            maxWidth: '900px'
          }}>
            Concevoir au-delà du plat : je bâtis des interfaces où le code prend du relief
          </h1>

          <p style={{ 
            fontSize: 'clamp(1rem, 4vw, 1.25rem)',
            maxWidth: '600px',
            lineHeight: '1.6',
            color: '#ccc',
            marginBottom: '2rem'
          }}>
            Salut, je suis <span style={{ color: '#fff', fontWeight: 'bold' }}>Durtelle de Saint Sauveur Noa</span>. 
            Développeur Fullstack spécialisé dans la création d'expériences numériques immersives et interactives.
          </p>

          <div style={{
            marginTop: '20px',
            fontSize: '0.9rem',
            opacity: 0.5,
            animation: 'bounce 2s infinite'
          }}>
            Scrollez pour découvrir ↓
          </div>
        </section>

        <section style={{
          minHeight: '100vh',
          width: '100%',
          maxWidth: '800px',
          padding: '100px 20px',
        }}>
        </section>

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