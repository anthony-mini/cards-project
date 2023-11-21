import React, { useState, useEffect } from 'react';

import quest from '../../json/quest.json';

export default function CodeQr() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [randomQuest, setRandomQuest] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    // Chargement de la question aléatoire une seule fois
    setRandomQuest(quest[Math.floor(Math.random() * quest.length)]);
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setShowAnswer(!showAnswer); // Toggle l'affichage de la réponse
  };

  if (!randomQuest) return <div>Loading...</div>;

  return (
    <>
      <div className={`card-flipper ${isFlipped ? 'flip' : ''}`}>
        <div className="container-card front">
          {/* Contenu de la face avant */}
          {randomQuest.image && (
            <img src={randomQuest.image} alt={randomQuest.TexteAlternatif} />
          )}
          <h2>{randomQuest.Titre}</h2>
          <p>{randomQuest.Description}</p>
          <div className="bullet-container">
            <ul>
              <li>
                {' '}
                <span>A) </span> {randomQuest.ReponseA}
              </li>
              <li>
                {' '}
                <span>B) </span> {randomQuest.ReponseB}
              </li>
              <li>
                {' '}
                <span>C) </span>
                {randomQuest.ReponseC}
              </li>
              <li>
                {' '}
                <span>D) </span>
                {randomQuest.ReponseD}
              </li>
            </ul>
          </div>
        </div>
        <div className="container-card back">
          {/* Contenu de la face arrière */}
          {randomQuest.image && (
            <img src={randomQuest.image} alt={randomQuest.TexteAlternatif} />
          )}
          <h2>{randomQuest.Titre}</h2>
          {showAnswer && <p>Réponse: {randomQuest.BonneReponse}</p>}
        </div>
      </div>
      <div className="container-button">
        <button onClick={handleFlip}>Show Result</button>
      </div>
    </>
  );
}
