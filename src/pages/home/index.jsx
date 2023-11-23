import React from 'react';
import Logo from '../../assets/logo.svg';
import Deck from '../../components/deck';
import Deck2 from '../../components/deck2';

export default function Home() {
  return (
    <body className="body-home">
      <main>
        <header className="header-container">
          <img className="header-logo" src={Logo} alt="" />
          <h1 className="header-title">The Designer's Odyssey</h1>
        </header>
        <section className="introduction">
          <p>Select the card type and answer the questions with enthusiasm! </p>
        </section>
        <section className="container-deck">
          <Deck />
          <Deck2 />
        </section>
      </main>
    </body>
  );
}
