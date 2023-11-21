import React, { useState, useEffect } from 'react';

import QrCodeImg1 from '../../assets/image-qr-code-v1.png';
import QrCodeImg2 from '../../assets/image-qr-code-v2.png';

import quest from '../../json/quest.json';

export default function CodeQr() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isFlipped, setIsFlipped] = useState(false);
  const [image, setImage] = useState(width >= 750 ? QrCodeImg1 : QrCodeImg2);
  const [randomQuest, setRandomQuest] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth);
      setImage(width >= 750 ? QrCodeImg1 : QrCodeImg2);
    }

    window.addEventListener('resize', handleWindowResize);

    // Chargement de la question aléatoire une seule fois
    setRandomQuest(quest[Math.floor(Math.random() * quest.length)]);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [width]);

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
          <img src={image} alt="qr-code" />
          <h2>{randomQuest.Titre}</h2>
          <p>{randomQuest.Description}</p>
        </div>
        <div className="container-card back">
          {/* Contenu de la face arrière */}
          <img src={image} alt="qr-code" />
          <h2>{randomQuest.Titre}</h2>
          {showAnswer && <p>Réponse: {randomQuest['Bonne Réponse']}</p>}
        </div>
      </div>
      <div className="container-button">
        <button onClick={handleFlip}>Show Result</button>
      </div>
    </>
  );
}
