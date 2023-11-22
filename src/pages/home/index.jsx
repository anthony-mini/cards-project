import React from 'react';
import Logo from '../../assets/logo.svg';

export default function Home() {
  return (
    <>
      <main>
        <header className="header-container">
          <img className="header-logo" src={Logo} alt="" />
          <h1 className="header-title">The Designer's Odyssey</h1>
        </header>
        <section className="introduction">
          <h2>
            Welcome to <br /> The Designer's Odyssey!
          </h2>
          <p>Select the card type and answer the questions with enthusiasm! </p>
        </section>
        <section className="container-deck">
          <button className="deck-button">
            <a href="/question">question</a>
          </button>
          <button className="deck-button">
            <a href="/challenges">challenges</a>
          </button>
        </section>
      </main>
    </>
  );
}
