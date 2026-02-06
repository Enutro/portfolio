//-------------------------Code à utiliser pour placer le texte sur la gauche-------------------------
// const About = () => {
//   return (
//     <section style={{
//       width: '100%',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '100px 5vw',
//       display: 'flex',
//       flexDirection: 'column',
//       zIndex: 1
//     }}>
//       <h2 style={{ 
//         fontSize: '1.2rem', 
//         textTransform: 'uppercase', 
//         letterSpacing: '2px', 
//         color: '#D2FFFF', 
//         marginBottom: '2rem',
//         fontWeight: '600'
//       }}>
//         / Parcours & Vision \
//       </h2>
      
//       <p style={{ 
//         fontSize: '1.5rem', 
//         lineHeight: '1.4', 
//         color: '#fff', 
//         fontWeight: '600', 
//         marginBottom: '2rem' 
//       }}>
//         Étudiant en ingénierie à <span style={{ color: '#00d8ff' }}>CESI</span> et apprenti chez <span style={{ color: '#00d8ff' }}>RAYAM</span>.
//       </p>

//       <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#aaa', fontWeight: '300' }}>
//         Actuellement en première année de cycle ingénieur, mon approche de l'informatique repose sur la compréhension des structures : de l'architecture des systèmes à l'optimisation des flux de données. 
//         Cette immersion en alternance me permet de confronter la rigueur théorique aux exigences réelles du terrain.
//         <br /><br />
//         J'envisage l'informatique comme un outil de résolution de problèmes complexes, où chaque structure doit être cohérente, performante et tournée vers l'avenir.
//       </div>
//     </section>
//   );
// }

// export default About;


//-------------------------Code à utiliser pour centrer au milieu de la page-------------------------
const About = () => {
  return (
    <section style={{
      width: '100%',
      maxWidth: '900px', 
      margin: '0 auto',
      padding: '100px 5vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', 
      textAlign: 'center',  
      zIndex: 1
    }}>
      <h2 style={{ 
        fontSize: '1.2rem', 
        textTransform: 'uppercase', 
        letterSpacing: '2px', 
        color: '#D2FFFF', 
        marginBottom: '2rem',
        fontWeight: '600'
      }}>
        / Parcours & Vision \
      </h2>
      
      <p style={{ 
        fontSize: '1.5rem', 
        lineHeight: '1.4', 
        color: '#fff', 
        fontWeight: '600', 
        marginBottom: '2rem',
        maxWidth: '800px',
        textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)',
      }}>
        Étudiant en ingénierie à <span style={{ color: '#00d8ff' }}>CESI</span> et apprenti chez <span style={{ color: '#00d8ff' }}>RAYAM</span>.
      </p>

      <div style={{ 
        fontSize: '1.1rem', 
        lineHeight: '1.8', 
        color: '#aaa', 
        fontWeight: '300',
        maxWidth: '750px' 
      }}>
        Actuellement en première année de cycle ingénieur, mon approche de l'informatique repose sur la compréhension des structures : de l'architecture des systèmes à l'optimisation des flux de données. 
        Cette immersion en alternance me permet de confronter la rigueur théorique aux exigences réelles du terrain.
        <br /><br />
        J'envisage l'informatique comme un outil de résolution de problèmes complexes, où chaque structure doit être cohérente, performante et tournée vers l'avenir.
      </div>
    </section>
  );
}

export default About;