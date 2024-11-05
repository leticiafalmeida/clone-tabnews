import React, { useState } from "react";
import './Home.css';

function Home() {
  const [resposta, setResposta] = useState("");

  const handleSim = () => {
    setResposta("Eu já sabia que queria!");
  };

  const handleNao = () => {
    setResposta("Resposta inválida!");
  };

  return (
    <div>
      <h1>Isabella, aceitas sair comigo hoje? (2 anos e quase meio)</h1>
      <button onClick={handleSim} className="sim">SIM</button>
      <button onClick={handleNao} className="nao">não</button>
      <p>{resposta}</p>
    </div>
  );
}

export default Home;