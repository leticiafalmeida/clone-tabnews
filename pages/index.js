import React, { useState } from 'react';

function Home() {
  const [resposta, setResposta] = useState('');

  const handleSim = () => {
    setResposta('Eu já sabia que queria!');
  };

  const handleNao = () => {
    setResposta('Resposta inválida!');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f4f9',
    },
    button: {
      backgroundColor: '#3498db',
      color: '#fff',
      border: 'none',
      padding: '12px 25px',
      margin: '10px',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    buttonSim: {
      backgroundColor: '#2ecc71',
    },
    buttonNao: {
      backgroundColor: '#e74c3c',
    },
    heading: {
      fontSize: '24px',
      color: '#2c3e50',
      marginBottom: '20px',
    },
    responseText: {
      fontSize: '18px',
      marginTop: '20px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Isabella, aceitas sair comigo hoje? (2 anos e quase meio)</h1>
      <button
        onClick={handleSim}
        style={{ ...styles.button, ...styles.buttonSim }}
      >
        SIM
      </button>
      <button
        onClick={handleNao}
        style={{ ...styles.button, ...styles.buttonNao }}
      >
        NÃO
      </button>
      <p style={styles.responseText}>{resposta}</p>
    </div>
  );
}

export default Home;