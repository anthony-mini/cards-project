import React, { useState, useEffect } from 'react';
import RepeatLogo from '../../assets/repeat-solid.svg';
import Logo from '../../assets/logo.svg';
import BackWard from '../../assets/backward-solid.svg';

import challenge from '../../json/challenge.json';
export default function CodeQr() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [randomQuest, setRandomQuest] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    // Chargement de la question aléatoire une seule fois
    setRandomQuest(challenge[Math.floor(Math.random() * challenge.length)]);

    generateRandomQuestion();
  }, []);

  const generateRandomQuestion = () => {
    const newRandomQuest =
      challenge[Math.floor(Math.random() * challenge.length)];
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
      <button className="backward-button">
        <a href="/">
          <img className="backward" src={BackWard} alt="" />
        </a>
      </button>
      <div className={`card-flipper ${isFlipped ? 'flip' : ''}`}>
        <div className={`level-cards ${isFlipped ? 'flip' : ''}`}>
          {randomQuest.Difficulte}
        </div>
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
            <img src={Logo} alt="" className="logo-odyssey" />
          </p>
          <p className="p p-challenge">
            {' '}
            <b> Material:</b> {randomQuest.Materiel}
          </p>
          <p className="h1 isCollectif"> {randomQuest.IsCollectif} </p>
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
            <>
              <p className={`p ${randomQuest.image ? '' : 'without-image'}`}>
                <b>Win Condition:</b> {randomQuest.WinCondition}
              </p>
              <p>{randomQuest.Explanation}</p>
            </>
          )}
        </div>
      </div>
      <div className="container-button">
        <button className="button1 challenge" onClick={handleFlip}>
          Win Condition
        </button>
        <button className="button2 challenge" onClick={generateRandomQuestion}>
          <img className="RepeatLogo" src={RepeatLogo} alt="" srcset="" />
        </button>
      </div>
    </>
  );
}
