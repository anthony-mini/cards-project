import React, { useState, useEffect } from 'react';

import QrCodeImg1 from '../../assets/image-qr-code-v1.png';
import QrCodeImg2 from '../../assets/image-qr-code-v2.png';

export default function CodeQr() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isFlipped, setIsFlipped] = useState(false);
  const [image, setImage] = useState(width >= 750 ? QrCodeImg1 : QrCodeImg2);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth);
      setImage(width >= 750 ? QrCodeImg1 : QrCodeImg2);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [width]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className={`card-flipper ${isFlipped ? 'flip' : ''}`}>
        <div className="container-card front">
          {/* Contenu de la face avant */}
          <img src={image} alt="qr-code" />
          <h2> Front </h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
        <div className="container-card back">
          {/* Contenu de la face arrière */}
          <img src={image} alt="qr-code" />
          <h2> Back </h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
      <button onClick={handleFlip}>Show Result</button>
    </>
  );
}
