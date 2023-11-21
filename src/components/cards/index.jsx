import React, { useState, useEffect } from 'react';

import quest from '../../json/quest.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';

export default function CodeQr() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [randomQuest, setRandomQuest] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    // Chargement de la question aléatoire une seule fois
    setRandomQuest(quest[Math.floor(Math.random() * quest.length)]);

    generateRandomQuestion();
  }, []);

  const generateRandomQuestion = () => {
    const newRandomQuest = quest[Math.floor(Math.random() * quest.length)];
    setRandomQuest(newRandomQuest);
    setIsFlipped(false); // Réinitialiser la carte à l'état initial
    setShowAnswer(false); // Réinitialiser l'affichage de la réponse
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setShowAnswer(!showAnswer); // Toggle l'affichage de la réponse
  };

  if (!randomQuest) return <div>Loading...</div>;

  return (
    <>
      <div className={`card-flipper ${isFlipped ? 'flip' : ''}`}>
        <div
          className={`container-card front ${
            randomQuest.image ? '' : 'without-image'
          }`}
        >
          {/* Contenu de la face avant */}
          {randomQuest.image && (
            <img src={randomQuest.image} alt={randomQuest.TexteAlternatif} />
          )}
          <h2 className={`h2 ${randomQuest.image ? '' : 'without-image'}`}>
            {randomQuest.Titre}
          </h2>
          <p className={`p ${randomQuest.image ? '' : 'without-image'}`}>
            {randomQuest.Description}
          </p>
          <div
            className={`bullet-container ${
              randomQuest.image ? '' : 'without-image'
            }`}
          >
            <ul>
              <li className={`li ${randomQuest.image ? '' : 'without-image'}`}>
                {' '}
                <span>A) </span> {randomQuest.ReponseA}
              </li>
              <li>
                {' '}
                <span>B) </span> {randomQuest.ReponseB}
              </li>
              {/* Condition pour vérifier si la réponse C existe */}
              {randomQuest.ReponseC && (
                <li>
                  <span>C) </span> {randomQuest.ReponseC}
                </li>
              )}
              {/* Condition pour vérifier si la réponse D existe */}
              {randomQuest.ReponseD && (
                <li>
                  <span>D) </span> {randomQuest.ReponseD}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div
          className={`container-card back ${
            randomQuest.image ? '' : 'without-image'
          }`}
        >
          {/* Contenu de la face arrière */}
          {randomQuest.image && (
            <img src={randomQuest.image} alt={randomQuest.TexteAlternatif} />
          )}
          <h2 className={`h2 ${randomQuest.image ? '' : 'without-image'}`}>
            {randomQuest.Titre}
          </h2>
          {showAnswer && (
            <p className={`p ${randomQuest.image ? '' : 'without-image'}`}>
              Réponse: {randomQuest.BonneReponse}
            </p>
          )}
        </div>
      </div>
      <div className="container-button">
        <button className="button1" onClick={handleFlip}>
          Show Result
        </button>
        <button className="button2" onClick={generateRandomQuestion}>
          {' '}
          <FontAwesomeIcon icon={faRepeat} />
        </button>
      </div>
    </>
  );
}
